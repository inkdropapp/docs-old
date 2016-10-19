/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import './markdown-cheatsheet.scss';
import Link from '../../components/Link';
import hljs from 'highlight.js';

export default class ManualPage extends Component {
  static title = 'Markdown Cheatsheet';

  render() {
    // const md = require('./accessing-data-in-the-cloud.md');
    return (
      <div className='ui container main-content'>
        <div className='doc-content'>
          <div className='ui breadcrumb'>
            <Link to='/' className='section'>Docs</Link>
            <i className='right chevron icon divider'></i>
            <Link to='/manual/' className='section'>Inkdrop Manual</Link>
            <i className='right chevron icon divider'></i>
            <div className='active section'>{ ManualPage.title }</div>
          </div>
          <div className='ui divider'></div>

          <h1>{ ManualPage.title }</h1>
          <div className='ui two column stackable grid'>
            <div className='row'>
              <div className='sixteen wide column'>
                This is intended as a quick reference and showcase.
                For more complete info, see <a href='http://daringfireball.net/projects/markdown/' target='_blank'>John Gruber's original spec</a> and the <a href='https://help.github.com/categories/writing-on-github/' target='_blank'>Github-flavored Markdown info page</a>.

                <h3>Table of Contents</h3>
                <ul>
                  <li>
                    <a href='#headers'>Headers</a>
                  </li>
                  <li>
                    <a href='#emphasis'>Emphasis</a>
                  </li>
                  <li>
                    <a href='#lists'>Lists</a>
                  </li>
                  <li>
                    <a href='#links'>Links</a>
                  </li>
                  <li>
                    <a href='#images'>Images</a>
                  </li>
                  <li>
                    <a href='#code'>Code and Syntax Highlighting</a>
                  </li>
                  <li>
                    <a href='#tables'>Tables</a>
                  </li>
                  <li>
                    <a href='#blockquotes'>Blockquotes</a>
                  </li>
                  <li>
                    <a href='#inline'>Inline HTML</a>
                  </li>
                  <li>
                    <a href='#hr'>Horizontal Rule</a>
                  </li>
                  <li>
                    <a href='#linebreaks'>Link Breaks</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='row'>
              <div className='sixteen wide column'>
                <h2>
                  <a name='headers' className='anchor'><i className='linkify icon'></i></a>
                  Headers
                </h2>
              </div>
            </div>
            <div className='row'>
              <div className='column'>
                <pre><code className='lang-markdown'>{`# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
`}</code></pre>
              </div>
              <div className='column'>
                <h1>H1</h1>
                <h2>H2</h2>
                <h3>H3</h3>
                <h4>H4</h4>
                <h5>H5</h5>
                <h6>H6</h6>
                <p>Alternatively, for H1 and H2, an underline-ish style:</p>
                <h1>Alt-H1</h1>
                <h2>Alt-H2</h2>
              </div>
            </div>

            <div className='row'>
              <div className='sixteen wide column'>
                <h2>
                  <a name='emphasis' className='anchor'><i className='linkify icon'></i></a>
                  Emphasis
                </h2>
              </div>
            </div>
            <div className='row'>
              <div className='column'>
                <pre><code className='lang-markdown'>{`Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
`}</code></pre>
              </div>
              <div className='column'>
                <p>Emphasis, aka italics, with <i>asterisks</i> or <i>underscores</i>.</p>
                <p>Strong emphasis, aka bold, with <strong>asterisks</strong> or <strong>underscores</strong>.</p>
                <p>Combined emphasis with <strong>asterisks or <i>underscores</i></strong>.</p>
                <p>Strikethrough uses two tildes. <del>Scratch this</del>.</p>
              </div>
            </div>

            <div className='row'>
              <div className='sixteen wide column'>
                <h2>
                  <a name='lists' className='anchor'><i className='linkify icon'></i></a>
                  Lists
                </h2>
                (In this example, leading and trailing spaces are shown with with dots: ⋅)
              </div>
            </div>
            <div className='row'>
              <div className='column'>
                <pre><code className='lang-markdown'>{`1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

- [ ] Checkbox
- [x] Task
`}</code></pre>
              </div>
              <div className='column'>
                <ol>
                  <li>First ordered list item</li>
                  <li>
                    Another item
                    <ul>
                      <li>Unordered sub-list. </li>
                    </ul>
                  </li>
                  <li>
                    Actual numbers don't matter, just that it's a number
                    <ol>
                      <li>Ordered sub-list</li>
                    </ol>
                  </li>
                  <li>
                    <p>And another item.</p>
                    <p>You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).</p>
                    <p>
                      To have a line break without a paragraph, you will need to use two trailing spaces.<br />
                      Note that this line is separate, but within the same paragraph.<br />
                      (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)
                    </p>
                  </li>
                  </ol>
                  <ul>
                    <li>Unordered list can use asterisks</li>
                    <li>Or minuses</li>
                    <li>Or pluses</li>
                  </ul>
                  <ul>
                    <li>
                      <div className='ui checkbox'>
                        <input type='checkbox' className='hidden' />
                        <label>Checkbox</label>
                      </div>
                    </li>
                    <li>
                      <div className='ui checkbox'>
                        <input type='checkbox' className='hidden' defaultChecked />
                        <label>Task</label>
                      </div>
                    </li>
                  </ul>
              </div>
            </div>

            <div className='row'>
              <div className='sixteen wide column'>
                <h2>
                  <a name='links' className='anchor'><i className='linkify icon'></i></a>
                  Links
                </h2>
                There are two ways to create links.
              </div>
            </div>
            <div className='row'>
              <div className='column'>
                <pre><code className='lang-markdown'>{`[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com`}</code></pre>
              </div>
              <div className='column'>
                <p><a href='https://www.google.com'>I'm an inline-style link</a></p>
                <p><a href='https://www.google.com' title='Google&apos;s Homepage'>I'm an inline-style link with title</a></p>
                <p><a href='https://www.mozilla.org'>I'm a reference-style link</a></p>
                <p><a href='../blob/master/LICENSE'>I'm a relative reference to a repository file</a></p>
                <p><a href='http://slashdot.org'>You can use numbers for reference-style link definitions</a></p>
                <p>Or leave it empty and use the <a href='http://www.reddit.com'>link text itself</a>.</p>
                <p>
                  URLs and URLs in angle brackets will automatically get turned into links.<br />
                  <a href='http://www.example.com'>http://www.example.com</a> or <a href='http://www.example.com'>http://www.example.com</a> and sometimes
                  example.com (but not on Github, for example).
                </p>
                <p>Some text to show that the reference links can follow later.</p>
              </div>
            </div>

            <div className='row'>
              <div className='sixteen wide column'>
                <h2>
                  <a name='images' className='anchor'><i className='linkify icon'></i></a>
                  Images
                </h2>
              </div>
            </div>
            <div className='row'>
              <div className='column'>
                <pre><code className='lang-markdown'>{`Here's our logo (hover to see the title text):

Inline-style: ![alt text](http://doc.inkdrop.info/icon-w64.png "Logo Title Text 1")

Reference-style: ![alt text][logo]

[logo]: http://doc.inkdrop.info/icon-w64.png "Logo Title Text 2"`}</code></pre>
              </div>
              <div className='column'>
                <p>Here's our logo (hover to see the title text):</p>

                <p>
                  Inline-style: <img src='/icon-w64.png' alt='alt text' title='Logo Title Text 1' />
                </p>

                <p>
                  Reference-style: <img src='/icon-w64.png' alt='alt text' title='Logo Title Text 2' />
                </p>

                <p><a name='user-content-code'></a></p>
              </div>
            </div>

            <div className='row'>
              <div className='sixteen wide column'>
                <h2>
                  <a name='code' className='anchor'><i className='linkify icon'></i></a>
                  Code and Syntax Highlighting
                </h2>
                <p>
                  Code blocks are part of the Markdown spec, but syntax highlighting isn't.
                  However, many renderers -- like Github's and <strong>Inkdrop</strong> -- support syntax highlighting.
                  Which languages are supported and how those language names should be written will vary from renderer to renderer.
                  Inkdrop supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the <a href='http://softwaremaniacs.org/media/soft/highlight/test.html' target='_blank'>highlight.js demo page</a>.
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='column'>
                <pre><code className='lang-markdown'>{`Inline \`code\` has \`back-ticks around\` it.`}</code></pre>
              </div>
              <div className='column'>
                <p>Inline <code>code</code> has <code>back-ticks around</code> it.</p>
              </div>
            </div>
            <div className='row'>
              <div className='sixteen wide column'>
                <p>
                  Blocks of code are either fenced by lines with three back-ticks ```, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='column'>
                <pre><code className='lang-markdown'>{`\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

\`\`\`python
s = "Python syntax highlighting"
print s
\`\`\`

\`\`\`
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
\`\`\``}</code></pre>
              </div>
              <div className='column'>
                <pre><code className='lang-javascript' dangerouslySetInnerHTML={ { __html: hljs.highlight('javascript', `var s = "JavaScript syntax highlighting";
alert(s);`).value } }></code></pre>
                <pre><code className='lang-python' dangerouslySetInnerHTML={ { __html: hljs.highlight('python', `s = "Python syntax highlighting"
print s`).value } }></code></pre>
                <pre><code>{`No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.`}</code></pre>
              </div>
            </div>

            <div className='row'>
              <div className='sixteen wide column'>
                <h2>
                  <a name='tables' className='anchor'><i className='linkify icon'></i></a>
                  Tables
                </h2>
                <p>
                  Tables aren't part of the core Markdown spec, but they are part of GFM and <strong>Inkdrop</strong> supports them.
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='column'>
                <pre><code className='lang-markdown'>{`Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3`}</code></pre>
              </div>
              <div className='column'>
                <p>Colons can be used to align columns.</p>

                <table className='ui celled table'>
                  <thead>
                    <tr>
                      <th>Tables</th>
                      <th className='center aligned'>Are</th>
                      <th className='right aligned'>Cool</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>col 3 is</td>
                      <td className='center aligned'>right-aligned</td>
                      <td className='right aligned'>$1600</td>
                    </tr>
                    <tr>
                      <td>col 2 is</td>
                      <td className='center aligned'>centered</td>
                      <td className='right aligned'>$12</td>
                    </tr>
                    <tr>
                      <td>zebra stripes</td>
                      <td className='center aligned'>are neat</td>
                      <td className='right aligned'>$1</td>
                    </tr>
                  </tbody>
                </table>

                <p>There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.</p>

                <table className='ui celled table'>
                  <thead>
                    <tr>
                      <th>Markdown</th>
                      <th>Less</th>
                      <th>Pretty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><em>Still</em></td>
                      <td><code>renders</code></td>
                      <td><strong>nicely</strong></td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='row'>
              <div className='sixteen wide column'>
                <h2>
                  <a name='blockquotes' className='anchor'><i className='linkify icon'></i></a>
                  Blockquotes
                </h2>
              </div>
            </div>
            <div className='row'>
              <div className='column'>
                <pre><code className='lang-markdown'>{`> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.
> > Nexted quote`}</code></pre>
              </div>
              <div className='column'>

                <blockquote>
                  <p>
                    Blockquotes are very handy in email to emulate reply text.
                    This line is part of the same quote.
                  </p>
                </blockquote>

                <p>Quote break.</p>

                <blockquote>
                  <p>This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can <em>put</em> <strong>Markdown</strong> into a blockquote.</p>
                  <blockquote>
                    <p>Nested quote</p>
                  </blockquote>
                </blockquote>

              </div>
            </div>

            <div className='row'>
              <div className='sixteen wide column'>
                <h2>
                  <a name='blockquotes' className='anchor'><i className='linkify icon'></i></a>
                  Inline HTML
                </h2>
                <p>
                  You can also use raw HTML in your Markdown, and it'll mostly work pretty well.
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='column'>
                <pre><code className='lang-markdown'>{`<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>`}</code></pre>
              </div>
              <div className='column'>
                <dl>
                  <dt>Definition list</dt>
                  <dd>Is something people use sometimes.</dd>

                  <dt>Markdown in HTML</dt>
                  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
                </dl>
              </div>
            </div>

            <div className='row'>
              <div className='sixteen wide column'>
                <h2>
                  <a name='hr' className='anchor'><i className='linkify icon'></i></a>
                  Horizontal Rule
                </h2>
              </div>
            </div>
            <div className='row'>
              <div className='column'>
                <pre><code className='lang-markdown'>{`Three or more...

---

Hyphens

***

Asterisks

___

Underscores`}</code></pre>
              </div>
              <div className='column'>
                <p>Three or more...</p>
                <hr />
                <p>Hyphens</p>
                <hr />
                <p>Asterisks</p>
                <hr />
                <p>Underscores</p>
              </div>
            </div>

            <div className='row'>
              <div className='sixteen wide column'>
                <h2>
                  <a name='linebreaks' className='anchor'><i className='linkify icon'></i></a>
                  Line Breaks
                </h2>
                <p>
                  My basic recommendation for learning how line breaks work is to experiment and discover -- hit &lt;Enter&gt; once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens.
                  You can view the editor and preview panel side-by-side on Inkdrop.
                </p>
                <p>
                  Here are some things to try out:
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='column'>
                <pre><code className='lang-markdown'>{`Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.`}</code></pre>
              </div>
              <div className='column'>
                <p>Here's a line for us to start with.</p>
                <p>This line is separated from the one above by two newlines, so it will be a <em>separate paragraph</em>.</p>
                <p>This line is also begins a separate paragraph, but...<br />
                  This line is only separated by a single newline, so it's a separate line in the <em>same paragraph</em>.</p>
              </div>
            </div>
            <div className='row'>
              <div className='sixteen wide column'>
                <div className='ui message'>
                  <div className='header'>
                    Technical note
                  </div>
                  <p>
                    <em>Inkdrop</em> uses GFM line breaks, so there's no need to use MD's two-space line breaks.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

}
