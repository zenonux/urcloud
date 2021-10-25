# ali-oss-deploy

[![NPM version][npm-image]][npm-url]
[![David deps][david-image]][david-url]
[![License][license-image]][license-url]

[npm-image]: https://img.shields.io/npm/v/@zenonux/ali-oss-deploy.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@zenonux/ali-oss-deploy
[david-image]: https://img.shields.io/david/zenonux/ali-oss-deploy.svg?style=flat-square
[david-url]: https://david-dm.org/zenonux/ali-oss-deploy
[license-url]: https://github.com/zenonux/ali-oss-deploy/blob/master/LICENCE
[license-image]: https://img.shields.io/npm/l/@zenonux/ali-oss-deploy.svg

it will upload index.html to Server and upload assets(css,js,img) to aliyun oss with version manager using a local json file.

## Installation

```bash
npm i @urcloud/ali-oss-deploy -D
```

## Basic Usage

deploy.js

```js
const { Command } = require('commander')
const program = new Command()
const Aod = require('@urcloud/ali-oss-deploy').default
const config = require('./.deploy.config')
const client = new Aod(config)
const version = require('./package.json').version

program
  .command('upload <mode>')
  .description('upload html to server and upload assets to oss')
  .action(async (mode) => {
    await client.uploadAssetsAndHtml(mode, version)
  })

program
  .command('clear <mode>')
  .description('clear unused assets in oss')
  .action(async (mode) => {
    await client.clearAssets(mode)
  })

program.parse(process.argv)
```

package.json

```json
{
  "scripts": {
    "deploy:stag": "node ./deploy.js upload stag",
    "clear:stag": "node ./deploy.js clear stag",
    "deploy:prod": "node ./deploy.js upload prod",
    "clear:prod": "node ./deploy.js clear prod"
  }
}
```

## Options

```js
const client = new Aod({
  distPath: './dist',
  jsonPath: './deploy.version.json',
  maxVersionCountOfMode: 5,
  oss: {
    accessKeyId: '',
    accessKeySecret: '',
    region: 'oss-cn-shanghai',
    bucket: 'test',
    prefix: (mode, version) => {
      return mode + '@' + version
    },
  },
  stag: {
    host: '',
    username: '',
    password: '',
    serverPath: '',
  },
  prod: {
    host: '',
    username: '',
    password: '',
    serverPath: '',
  },
})
```

## Methods

### uploadAssetsAndHtml(mode,version)

parameters:

- mode{stag | prod}
- version{string}

### clearAssets(mode)

parameters:

- mode{stag | prod}
