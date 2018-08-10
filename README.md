sauron
======



[![Version](https://img.shields.io/npm/v/sauron.svg)](https://npmjs.org/package/sauron)
[![CircleCI](https://circleci.com/gh/sauron/sauron/tree/master.svg?style=shield)](https://circleci.com/gh/sauron/sauron/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/sauron/sauron?branch=master&svg=true)](https://ci.appveyor.com/project/sauron/sauron/branch/master)
[![Codecov](https://codecov.io/gh/sauron/sauron/branch/master/graph/badge.svg)](https://codecov.io/gh/sauron/sauron)
[![Downloads/week](https://img.shields.io/npm/dw/sauron.svg)](https://npmjs.org/package/sauron)
[![License](https://img.shields.io/npm/l/sauron.svg)](https://github.com/sauron/sauron/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g sauron
$ sauron COMMAND
running command...
$ sauron (-v|--version|version)
sauron/0.0.0 darwin-x64 node-v8.9.0
$ sauron --help [COMMAND]
USAGE
  $ sauron COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`sauron hello [FILE]`](#sauron-hello-file)
* [`sauron help [COMMAND]`](#sauron-help-command)

## `sauron hello [FILE]`

describe the command here

```
USAGE
  $ sauron hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ sauron hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/sauron/sauron/blob/v0.0.0/src/commands/hello.ts)_

## `sauron help [COMMAND]`

display help for sauron

```
USAGE
  $ sauron help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v1.2.10/src/commands/help.ts)_
<!-- commandsstop -->
