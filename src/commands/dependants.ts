import * as inquirer from 'inquirer'
import {Command, flags} from '@oclif/command'
import * as R from 'ramda'

import BitbucketClient from '../bitbucket/client'
import { getDependecyVersion } from '../npm/packageJson';
import { version } from 'punycode';

interface Repo {
  slug: string
  name: string,

}

interface VersionInfo {
  type: string,
  version: string,
}

interface Dependant {
  package: string,
  dependencies: Array<VersionInfo>
}

const getDependants = (bitbucket:BitbucketClient) => (module:string) => async (repo:Repo) => {
  try {
    const pckg = await bitbucket.getPackageJson(repo.slug);
    const getVersion = getDependecyVersion(pckg.data)(module);
    const dependencyTypes = ['dependencies', 'peerDependencies', 'devDepependencies', 'optionalDependencies', 'bundledDependencies']
    const dependencies = dependencyTypes
      .map((type:string) => ({
        type,
        version: getVersion(type),
      }))
      .filter((dep:VersionInfo) => dep.version !== undefined)

    return {
        package: repo.name,
        dependencies,
    };
  }
  catch {
    return {}
  }
}

export default class Dependants extends Command {
  static description = 'finds all dependants of a given project'

  static examples = [
    `$ sauron dependants --package some-package`,
  ]

  static flags = {
    package: flags.string(),
  }

  async run() {
    const {flags} = this.parse(Dependants);

    const questions = [
      {
        name: 'account',
        type: 'string',
        message: 'Your Bitbucket Account',
        default: process.env.BITBUCKET_ACCOUNT,
      },
      {
        name: 'username',
        type: 'string',
        message: 'Your Bitbucket Username',
        default: process.env.BITBUCKET_USERNAME,
      },
      {
        name: 'password',
        type: 'password',
        message: 'Your Bitbucket Password',
        default: process.env.BITBUCKET_PASSWORD,
      }
    ];

    const answers:any =  await inquirer.prompt(questions);
    const bitbucket = new BitbucketClient(answers.account, answers.username, answers.password)
    const repos = await bitbucket.repositoriesForCurrentUser();


    const dependants = await Promise.all(
      repos.data
        .map(repo => getDependants(bitbucket)(flags.package || '')(repo)
    ));

    const cleanedDependants = dependants
      .filter(dependant => dependant.dependencies && dependant.dependencies.length > 0)

    console.log(JSON.stringify(cleanedDependants, null, 2));
  }
}
