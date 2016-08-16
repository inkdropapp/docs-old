import marked from 'marked';
import hljs from 'highlight.js';

const renderer = new marked.Renderer();

renderer.image = function image(href, title, text) {
  return `<img class="ui image" src="${href}" title="${title}" alt="${text}" />`;
};


marked.setOptions({
  highlight(code, lang) {
    try {
      if (lang/* && hljs.getLanguage(lang)*/) {
        return hljs.highlight(lang, code).value;
      }
      return code;
      // return hljs.highlightAuto(code).value;
    } catch (__) {
      return code; // use external default escaping
    }
  },
});


export default renderer;
