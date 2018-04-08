#!/usr/bin/env node

// @ts-check

export declare interface CleanCliFlags {
  i: string;
  file: string;

  p: string;
  path: string;

  f: boolean;
  force: boolean;

  d: boolean;
  'dry-run': boolean;
}

/** Import project dependencies */
import { clean, CleanOptions } from '@messageflow/clean';
import meow from 'meow';
import path from 'path';

function getCleanConfig({ input, flags }): CleanOptions {
  const rootPath = Array.isArray(input) && input.length > 0
    ? input[0]
    : '.';
  const gitIgnoreFilePath = flags.i || flags.file || './.gitignore';
  const globFilePaths = flags.p == null && flags.path == null
    ? null
    : (flags.p || flags.path).split(/\s*\,\s*/gi);

  return {
    gitConfig: path.resolve(rootPath, gitIgnoreFilePath),
    ...(
      globFilePaths == null ? {} : { path: globFilePaths }
    ),
    options: {
      // dryRun: flags.d != null || flags['dry-run'] != null,
      force: flags.f != null || flags.force != null,
      dryRun: true,
    },
  };
}

const cli = meow(`
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
    $ clean -p "**/src/**/*.js,**/src/**/*.d.ts,!gulpfile.js"
`, {
  string: [
    'file',
    'path',
    '_',
  ],
  boolean: [
    'force',
    'dry-run',
  ],
  alias: {
    i: 'file',
    p: 'path',
    f: 'force',
    d: 'dry-run',
  },
});
const cleanConfig = getCleanConfig(cli);

clean({ ...cleanConfig })
  .then((files) => {
    if (cleanConfig.options.dryRun) {
      console.log(`${files.length} files/ folders to be deleted:\n`);

      if (files.length > 0) {
        console.log(`${files.join('\n')}\n`);
      }
    }

    console.log('👍 The working directory is now clean again!\n');
  })
  .catch(e => console.error('Failed to clean -', e));
