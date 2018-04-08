// @ts-check

import { IGNORE_PATH } from '@messageflow/clean';
import execa from 'execa';
import {
  mkdir,
  writeFile,
  existsSync,
} from 'fs';
import { sep } from 'path';
import tempy from 'tempy';
import { promisify } from 'util';

function writeTo(filePath, fileContent) {
  return promisify(writeFile)(filePath, fileContent);
}

function touchDir(dirPath) {
  return promisify(mkdir)(dirPath);
}

async function tempFileDir() {
  try {
    const tempDir = tempy.directory();

    await Promise.all([
      'node_modules',
      'dist',
      'test',
      'demo',
    ].map(async (folderName) => {
      return touchDir(`${tempDir}/${folderName}`);
    }));

    await Promise.all([
      'index.js',
      'index.d.ts',
      'gulpfile.js',

      'test-one.js',
      'test-one.d.ts',

      'test-two.js',
      'test-two.d.ts',

      'test-three.js',
      'test-three.d.ts',
    ].map(async (fileName) => {
      return writeTo(`${tempDir}/${fileName}`, '# To be deleted');
    }));

    await writeTo(`${tempDir}/.gitignore`, IGNORE_PATH.join('\n'));

    return tempDir;
  } catch (e) {
    console.error('Failed to setup temp -', e);
  }
}

describe('@messageflow/clean-cli', () => {
  describe('ok', () => {
    test('cli works', async () => {
      const oldCwd = process.cwd();
      const createdTemp = await tempFileDir();

      console.log('# createdTemp', oldCwd, createdTemp, existsSync(createdTemp));

      process.chdir(createdTemp);

      const d = await execa(`${oldCwd}/dist/index.js`, [createdTemp, '-d']);
      console.log(d.stdout);

      expect(d.stdout).toEqual([
        '12 files/ folders to be deleted:',
        '',
        `${createdTemp}${sep}dist`,
        `${createdTemp}${sep}node_modules`,
        `${createdTemp}${sep}test`,
        `${createdTemp}${sep}index.d.ts`,
        `${createdTemp}${sep}test-one.d.ts`,
        `${createdTemp}${sep}test-three.d.ts`,
        `${createdTemp}${sep}test-two.d.ts`,
        `${createdTemp}${sep}gulpfile.js`,
        `${createdTemp}${sep}index.js`,
        `${createdTemp}${sep}test-one.js`,
        `${createdTemp}${sep}test-three.js`,
        `${createdTemp}${sep}test-two.js`,
        '',
        '👍 The working directory is now clean again!',
        '',
      ].join('\n'));

      process.chdir(oldCwd);
    });

    test('cli works with defined `-i`', async () => {
      const oldCwd = process.cwd();
      const createdTemp = await tempFileDir();

      process.chdir(createdTemp);

      const d = await execa(`${oldCwd}/dist/index.js`, [
        '-i',
        './.gitignore',
        '-d',
      ]);

      expect(d.stdout).toEqual([
        '12 files/ folders to be deleted:',
        '',
        `${createdTemp}${sep}dist`,
        `${createdTemp}${sep}node_modules`,
        `${createdTemp}${sep}test`,
        `${createdTemp}${sep}index.d.ts`,
        `${createdTemp}${sep}test-one.d.ts`,
        `${createdTemp}${sep}test-three.d.ts`,
        `${createdTemp}${sep}test-two.d.ts`,
        `${createdTemp}${sep}gulpfile.js`,
        `${createdTemp}${sep}index.js`,
        `${createdTemp}${sep}test-one.js`,
        `${createdTemp}${sep}test-three.js`,
        `${createdTemp}${sep}test-two.js`,
        '',
        '👍 The working directory is now clean again!',
        '',
      ].join('\n'));

      process.chdir(oldCwd);
    });

    test('cli works with defined `--file`', async () => {
      const oldCwd = process.cwd();
      const createdTemp = await tempFileDir();

      process.chdir(createdTemp);

      const d = await execa(`${oldCwd}/dist/index.js`, [
        '--file',
        './.gitignore',
        '-d',
      ]);

      expect(d.stdout).toEqual([
        '12 files/ folders to be deleted:',
        '',
        `${createdTemp}${sep}dist`,
        `${createdTemp}${sep}node_modules`,
        `${createdTemp}${sep}test`,
        `${createdTemp}${sep}index.d.ts`,
        `${createdTemp}${sep}test-one.d.ts`,
        `${createdTemp}${sep}test-three.d.ts`,
        `${createdTemp}${sep}test-two.d.ts`,
        `${createdTemp}${sep}gulpfile.js`,
        `${createdTemp}${sep}index.js`,
        `${createdTemp}${sep}test-one.js`,
        `${createdTemp}${sep}test-three.js`,
        `${createdTemp}${sep}test-two.js`,
        '',
        '👍 The working directory is now clean again!',
        '',
      ].join('\n'));

      process.chdir(oldCwd);
    });

    test('cli works with defined `-p`', async () => {
      const oldCwd = process.cwd();
      const createdTemp = await tempFileDir();

      process.chdir(createdTemp);

      const d = await execa(`${oldCwd}/dist/index.js`, [
        '-p',
        '**/*.*,!gulpfile.js',
        '-d',
      ]);

      expect(d.stdout).toEqual([
        '8 files/ folders to be deleted:',
        '',
        `${createdTemp}${sep}index.d.ts`,
        `${createdTemp}${sep}index.js`,
        `${createdTemp}${sep}test-one.d.ts`,
        `${createdTemp}${sep}test-one.js`,
        `${createdTemp}${sep}test-three.d.ts`,
        `${createdTemp}${sep}test-three.js`,
        `${createdTemp}${sep}test-two.d.ts`,
        `${createdTemp}${sep}test-two.js`,
        '',
        '👍 The working directory is now clean again!',
        '',
      ].join('\n'));

      process.chdir(oldCwd);
    });

    test('cli works with defined `--path`', async () => {
      const oldCwd = process.cwd();
      const createdTemp = await tempFileDir();

      process.chdir(createdTemp);

      const d = await execa(`${oldCwd}/dist/index.js`, [
        '--path',
        '**/*.*,!gulpfile.js',
        '-d',
      ]);

      expect(d.stdout).toEqual([
        '8 files/ folders to be deleted:',
        '',
        `${createdTemp}${sep}index.d.ts`,
        `${createdTemp}${sep}index.js`,
        `${createdTemp}${sep}test-one.d.ts`,
        `${createdTemp}${sep}test-one.js`,
        `${createdTemp}${sep}test-three.d.ts`,
        `${createdTemp}${sep}test-three.js`,
        `${createdTemp}${sep}test-two.d.ts`,
        `${createdTemp}${sep}test-two.js`,
        '',
        '👍 The working directory is now clean again!',
        '',
      ].join('\n'));

      process.chdir(oldCwd);
    });

    test('cli works with defined `-df`', async () => {
      const oldCwd = process.cwd();
      const createdTemp = await tempFileDir();

      process.chdir(createdTemp);

      const d = await execa(`${oldCwd}/dist/index.js`, [
        '--path',
        '**/*.*,!gulpfile.js',
        '-df',
      ]);

      expect(d.stdout).toEqual([
        '8 files/ folders to be deleted:',
        '',
        `${createdTemp}${sep}index.d.ts`,
        `${createdTemp}${sep}index.js`,
        `${createdTemp}${sep}test-one.d.ts`,
        `${createdTemp}${sep}test-one.js`,
        `${createdTemp}${sep}test-three.d.ts`,
        `${createdTemp}${sep}test-three.js`,
        `${createdTemp}${sep}test-two.d.ts`,
        `${createdTemp}${sep}test-two.js`,
        '',
        '👍 The working directory is now clean again!',
        '',
      ].join('\n'));

      process.chdir(oldCwd);
    });

  });
});
