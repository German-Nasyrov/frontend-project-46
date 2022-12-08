import yaml from 'js-yaml';

export default (fileContent, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(fileContent);
    case 'yml':
    case 'yaml':
      return yaml.load(fileContent);
    default:
      throw new Error(`Wrong file extension: '${format}'! Try other formats.`);
  }
};
