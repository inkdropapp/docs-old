---
index: 140
category: "usage"
path: "/manual/resizing-images"
title: "Resizing Images"
---

Inkdrop basically follows GitHub-flavored Markdown which does not support specifying image size.
To change image sizes in your notes, you have to define [custom stylesheet](/manual/style-tweaks).
Add a following rules to your `styles.less`:

```less
.editor {
  .mde-cm-wrapper .CodeMirror .CodeMirror-linewidget, .mde-preview {
    img[alt$='#small'] {
      max-width: 75% !important;
      min-width: 200pt !important;
    }

    img[alt$='#x-small'] {
      max-width: 50% !important;
      min-width: 100pt !important;
    }

    img[alt$='#xx-small'] {
      max-width: 25% !important;
      min-width: 50pt !important;
    }

  }
}
```

With these rules defined, your images with `alt` attribute ending with `#small` will be rendered in small size.
You can insert images in Markdown as following:

```md
![image.jpg](inkdrop://file:srPsQH8nx)
![image.jpg #small](inkdrop://file:srPsQH8nx)
![image.jpg #x-small](inkdrop://file:srPsQH8nx)
![image.jpg #xx-small](inkdrop://file:srPsQH8nx)
```

The app will render like so:

![example](resizing-images-example.png)
