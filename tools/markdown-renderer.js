import marked from 'marked';
import hljs from 'highlight.js';

const renderer = new marked.Renderer();

renderer.image = function image(href, title, text) {
  return `<img class="ui image" src="${href}" title="${title || ''}" alt="${text || ''}" />`;
};


renderer.heading = function heading(text, level) {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

  return '<h' + level + '><a name="' +
    escapedText +
    '" class="anchor" href="#' +
    escapedText +
    '"><i class="linkify icon"></i></a>' +
    text + '</h' + level + '>';
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
