import fs from 'fs';
import path from 'path';
import makeTree from './makeTree.js';
import parse from './parsers.js';
import formatOutput from './formatters/index.js';

const getAbsolutePath = (file) => path.resolve(process.cwd(), file);
const getFormats = (file) => path.extname(file).slice(1);

const getContentFromFile = (file) => {
  const absolutePath = getAbsolutePath(file);
  const fileContent = fs.readFileSync(absolutePath, 'utf8');
  const format = getFormats(file);

  return parse(fileContent, format);
};

const gendiff = (filePath1, filePath2, format = 'stylish') => {
  const data1 = getContentFromFile(filePath1);
  const data2 = getContentFromFile(filePath2);
  const diffInfo = makeTree(data1, data2);
  const formattedTree = formatOutput(diffInfo, format);

  return formattedTree;
};

export default gendiff;
