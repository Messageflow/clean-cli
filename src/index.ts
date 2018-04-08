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
  dryRun: boolean;
}

/** Import project dependencies */
import { clean, CleanOptions } from '@messageflow/clean';
import meow from 'meow';
import path from 'path';
import updateNotifier from 'update-notifier';

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
      dryRun: flags.d != null || flags.dryRun != null,
      force: flags.f != null || flags.force != null,
    },
  };
}

function hasInvalidCliFlag(cliFlags: object) {
  return Object.keys(cliFlags)
    .some(n => !/(i|file|p|path|f|force|d|dryRun|h|help|debug)/i.test(n));
}

function showError() {
  console.error(
    'Please specify a path to working directory, a path to `.gitignore`, or a glob pattern'
  );
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
    $ clean -i ./.gitignore -d
    $ clean -p "**/src/**/*.js,**/src/**/*.d.ts,!gulpfile.js"
`, {
  string: [
    'file',
    'path',
  ],
  boolean: [
    'debug',
    'dry-run',
    'force',
    'help',
  ],
  alias: {
    d: 'dry-run',
    f: 'force',
    h: 'help',
    i: 'file',
    p: 'path',
  },
});
const cleanConfig = getCleanConfig(cli);

/** NOTE: Check for update of the CLI */
updateNotifier({ pkg: cli.pkg }).notify();

/** NOTE: Hidden debugging feature */
if (cli.flags.debug) {
  console.debug({ input: cli.input, flags: cli.flags });
}

switch (true) {
  case (cli.flags.h || cli.flags.help): {
    cli.showHelp();
    break;
  }
  case (cli.input.length >= 0 && !hasInvalidCliFlag(cli.flags)): {
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
    break;
  }
  default: {
    showError();
  }
}
