import axios, { AxiosResponse } from 'axios';
import authorisation from './authorisation';

export default class BitbucketClient {

  public account: string
  public username: string
  public password:string

  constructor(account: string, username: string, password: string) {
    this.account = account;
    this.username = username;
    this.password = password;
  }

  async repositoriesForCurrentUser() {
    return await axios(`https://api.bitbucket.org/1.0/user/repositories`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${authorisation(this.username, this.password)}`,
        'Content-Type': 'application/json',
      },
    });
  }

  async getPackageJson(repoSlug:string, revision:string = 'develop') {
    return await axios(`https://api.bitbucket.org/1.0/repositories/${this.account}/${repoSlug}/raw/${revision}/package.json`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${authorisation(this.username, this.password)}`,
        'Content-Type': 'application/json',
      },
    })
  }
}
