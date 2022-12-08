/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

const expectedStylish = readFile('correct-stylish.txt');
const expectedPlain = readFile('correct-plain.txt');
const expectedJson = readFile('correct-json.txt');

const formats = ['json', 'yaml', 'yml'];

describe('Positives cases', () => {
  describe.each(formats)('Format %s', (format) => {
    const file1 = `${process.cwd()}/__fixtures__/file1.${format}`;
    const file2 = `${process.cwd()}/__fixtures__/file2.${format}`;

    test('Correct stylish', () => {
      expect(gendiff(file1, file2, 'stylish')).toEqual(expectedStylish);
    });
    test('Correct plain', () => {
      expect(gendiff(file1, file2, 'plain')).toEqual(expectedPlain);
    });
    test('Correct json', () => {
      expect(gendiff(file1, file2, 'json')).toEqual(expectedJson);
    });
  });
});

describe('Negative cases', () => {
  test('Check wrong file extension', () => {
    const error = new Error("Wrong file extension: 'txt'! Try other formats.");

    expect(() => {
      gendiff(getFixturePath('file1-wrong.txt'), getFixturePath('file2-wrong.txt'));
    }).toThrow(error);
  });
});
