import {EXT_VER} from '../constants.js';

let currentScript;

export default {
  setCurrentScript(newCurrentScript) {
    currentScript = newCurrentScript;
  },
  url(path, breakCache = false) {
    if (!currentScript) {
      return null;
    }
    const url = new URL(path, currentScript.src);
    return `${url.toString()}${breakCache ? `?v=${EXT_VER}` : ''}`;
  },
};
