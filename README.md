<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">@messageflow/clean-cli</h1>

  <p>CLI for @messageflow/clean</p>
</div>

<hr />

[![NPM][nodei-badge]][nodei-url]

[![Version][version-badge]][version-url]
[![Downloads][downloads-badge]][downloads-url]
[![MIT License][mit-license-badge]][mit-license-url]
[![Code of Conduct][coc-badge]][coc-url]

[![Build Status][travis-badge]][travis-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
[![NSP Status][nsp-badge]][nsp-url]

[![codebeat-badge]][codebeat-url]
[![codacy-badge]][codacy-url]

> Yet another opinionated CLI to reset your working directory with [@messageflow/clean][messageflow-clean-url].

## Table of contents

- [Pre-requisites](#pre-requisites)
- [Setup](#setup)
  - [Install](#install)
  - [Run with npx (recommended)](#run-with-npx-recommended)
  - [Or, install globally](#or-install-globally)
  - [Usage](#usage)
    - [With npx (recommended)](#with-npx-recommended)
- [License](#license)

## Pre-requisites

- [Node.js][nodejs-url] >= 8.9.0
- [NPM][npm-url] >= 5.5.1 ([NPM][npm-url] comes with [Node.js][nodejs-url] so there is no need to install separately.)

## Setup

### Install

### Run with npx (recommended)

```sh
# Run CLi with npx
$ npx -p @messageflow/clean-cli -- clean
```

### Or, install globally

```sh
# Install via NPM globally
$ npm install --global @messageflow/clean-cli
```

### Usage

#### With npx (recommended)

```sh
$ npx -p @messageflow/clean-cli -- clean --help

Usage
$ clean <path|glob> ...

Options
  -i, --file    Specify the path to read \`.gitignore\`
  -p, --path    Specify the glob patterns to delete files/ folders.
  -f, --force   Allow deleting the current working directory and outside
  -d, --dry-run List what would be deleted instead of deleting

Examples
  $ clean .
  $ clean -i ./.gitignore
  $ clean -i ./.gitignore -d
  $ clean -p "**/src/**/*.js,**/src/**/*.d.ts,!gulpfile.js"
```

## License

[MIT License](https://motss.mit-license.org/) © Rong Sen Ng

<!-- References -->
[typescript-url]: https://github.com/Microsoft/TypeScript
[nodejs-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases

[messageflow-clean-url]: https://github.com/Messageflow/clean

[array-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[boolean-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[function-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[map-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[number-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[object-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[regexp-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[set-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

<!-- Badges -->
[nodei-badge]: https://nodei.co/npm/@messageflow/clean-cli.png?downloads=true&downloadRank=true&stars=true

[version-badge]: https://img.shields.io/npm/v/@messageflow/clean-cli.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/@messageflow/clean-cli.svg?style=flat-square
[mit-license-badge]: https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square

[travis-badge]: https://img.shields.io/travis/Messageflow/clean-cli.svg?style=flat-square
[daviddm-badge]: https://img.shields.io/david/Messageflow/clean-cli.svg?style=flat-square
[nsp-badge]: https://nodesecurity.io/orgs/messageflow/projects/b43cd26c-3507-44ab-a8d0-ebb183d618c0/badge?style=flat-square

[codebeat-badge]: https://codebeat.co/badges/9da39ac7-2ec5-4287-a902-baf26f6bc1fe?style=flat-square
[codacy-badge]: https://api.codacy.com/project/badge/Grade/a9c75ccd790a44d5982f4aa1ea89546a?style=flat-square

<!-- Links -->
[nodei-url]: https://nodei.co/npm/@messageflow/clean-cli

[version-url]: https://www.npmjs.com/package/@messageflow/clean-cli
[downloads-url]: http://www.npmtrends.com/@messageflow/clean-cli
[mit-license-url]: https://github.com/Messageflow/clean-cli/blob/master/LICENSE
[coc-url]: https://github.com/Messageflow/clean-cli/blob/master/CODE_OF_CONDUCT.md

[travis-url]: https://travis-ci.org/Messageflow/clean-cli
[daviddm-url]: https://david-dm.org/Messageflow/clean-cli
[nsp-url]: https://nodesecurity.io/orgs/messageflow/projects/b43cd26c-3507-44ab-a8d0-ebb183d618c0

[codebeat-url]: https://codebeat.co/projects/github-com-messageflow-clean-cli-master
[codacy-url]: https://www.codacy.com/app/motss/clean-cli?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Messageflow/clean-cli&amp;utm_campaign=Badge_Grade
