'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'generateRoutes'
console.log('===========generate router start===============');
require('./prerender.routes')().then(routesList => {
  console.log(routesList);
  console.log('===========generate router end===============');
  process.env.NODE_ENV = 'prerender'
  const ora = require('ora')
  const rm = require('rimraf')
  const path = require('path')
  const chalk = require('chalk')
  const webpack = require('webpack')
  const config = require('../config')
  config.prerender.routes = routesList;
  const webpackConfig = require('./webpack.prerender.conf')

  const spinner = ora('Prerender...')
  spinner.start()

  rm(config.prerender.assetsRoot, err => {
    if (err) throw err
    webpack(webpackConfig, (err, stats) => {
      spinner.stop()
      if (err) throw err
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during prerender.
        chunks: false,
        chunkModules: false
      }) + '\n\n')

      if (stats.hasErrors()) {
        console.log(chalk.red('  Prerender failed with errors.\n'))
        process.exit(1)
      }

      console.log(chalk.cyan('  Prerender complete.\n'))
      console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
      ))
    })
  })
})

