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

> Better greeting message

## Table of contents

## Pre-requisites

- [Node.js][nodejs-url] >= 8.9.0
- [NPM][npm-url] >= 5.5.1 ([NPM][npm-url] comes with [Node.js][nodejs-url] so there is no need to install separately.)

## Setup

### Install

```sh
# Install via NPM
$ npm install --save @messageflow/clean-cli
```

### Usage

#### With npx

```sh
$ npx -p @messageflow/clean-cli -- clean
$ npx -p 
```

## API Reference

### greeting(name)

- `name` <[string][string-mdn-url]> Name of the person to greet at.
- returns: <[Promise][promise-mdn-url]&lt;[string][string-mdn-url]&gt;> Promise which resolves with a greeting message.

### greetingSync(name)

This methods works the same as `greeting(name)` except that this is the synchronous version.

## License

[MIT License](https://Messageflow.mit-license.org/) © Rong Sen Ng

<!-- References -->
[typescript-url]: https://github.com/Microsoft/TypeScript
[nodejs-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases

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

[travis-badge]: https://img.shields.io/travis/Messageflow/@messageflow/clean-cli.svg?style=flat-square
[daviddm-badge]: https://img.shields.io/david/Messageflow/@messageflow/clean-cli.svg?style=flat-square
[nsp-badge]: https://nodesecurity.io/orgs/Messageflow/projects/<PROJECT_ID>/badge?style=flat-square

[codebeat-badge]: https://codebeat.co/badges/<PROJECT_ID>?style=flat-square
[codacy-badge]: https://api.codacy.com/project/badge/Grade/<PROJECT_ID>?style=flat-square

<!-- Links -->
[nodei-url]: https://nodei.co/npm/@messageflow/clean-cli

[version-url]: https://www.npmjs.com/package/@messageflow/clean-cli
[downloads-url]: http://www.npmtrends.com/@messageflow/clean-cli
[mit-license-url]: https://github.com/Messageflow/@messageflow/clean-cli/blob/master/LICENSE
[coc-url]: https://github.com/Messageflow/@messageflow/clean-cli/blob/master/CODE_OF_CONDUCT.md

[travis-url]: https://travis-ci.org/Messageflow/@messageflow/clean-cli
[daviddm-url]: https://david-dm.org/Messageflow/@messageflow/clean-cli
[nsp-url]: https://nodesecurity.io/orgs/Messageflow/projects/<PROJECT_ID>

[codebeat-url]: https://codebeat.co/projects/github-com-Messageflow-@messageflow/clean-cli-master
[codacy-url]: https://www.codacy.com/app/Messageflow/@messageflow/clean-cli?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Messageflow/@messageflow/clean-cli&amp;utm_campaign=Badge_Grade
