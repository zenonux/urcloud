#! /usr/bin/env node

import { Command } from 'commander'
import Aod from '../src/index'
const program = new Command()
import { getVersionFromPackage } from '../src/util'

program
  .command('upload <mode>')
  .requiredOption(
    '-c, --config <file>',
    'deploy config file',
    './.deploy.config.js'
  )
  .description('upload html to server and upload assets to oss')
  .action(async (mode, opts) => {
    const config = await import(opts.config)
    const client = new Aod(config)
    const version = await getVersionFromPackage()
    await client.uploadAssetsAndHtml(mode, version)
  })

program
  .command('clear <mode>')
  .requiredOption(
    '-c, --config <file>',
    'deploy config file',
    './.deploy.config.js'
  )
  .description('clear unused assets in oss')
  .action(async (mode, opts) => {
    const client = new Aod(opts.config)
    await client.clearAssets(mode)
  })

program.parse(process.argv)
