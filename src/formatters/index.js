import makePlain from './plain.js';
import makeStylish from './stylish.js';
import makeJson from './json.js';

export default (data, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(data);
    case 'plain':
      return makePlain(data);
    case 'json':
      return makeJson(data);
    default:
      throw new Error('Something went wrong, try again!');
  }
};
