---
title: "Hello World"
subtitle: "This is the first article on my website!
From now on, I will write here some stuff from time to time.
I didn't create admin or editor panels yet, so articles are parsed from markdown folder and translated into JSX"
date: "2021-08-14"
---

# Introduction

This is the first article on my website!

From now on, I will write here some stuff from time to time.

I didn't create admin or editor panels yet, so articles are parsed from markdown folder and translated into JSX

## Table of Contents

# Testing

## Code blocks

```javascript
import React from 'react'
import ReactDom from 'react-dom'
// Loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong
const name = 'ronycage'
ReactDom.render(
  <div>
  <h1>{`Hello, ${name}!`}
  </div>,
  document.body
)
```

```python
print("hello world!")
```

## Headers

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Emphasis

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

<details ><summary >Click me to expand</summary>HAHA</details>

## Lists (NUMBER SORT DOESN'T WORK YET)

1. Actual numbers don't matter, just that it's a number
2. Ordered sub-list
3. And another item.

- Unordered list can use asterisks

  Some text that should be aligned with the above item.

* Or minuses

- Or pluses

## Links

[I'm an inline-style link](https://www.google.com)

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

## Images

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

## Tables

Colons can be used to align columns.

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

## Blockqoutes

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

## Horizontal Rule

Three or more...

---

Hyphens

---

Asterisks

---

Underscores

## YouTube Videos (ADD MITIGATIONS)

<!--
<div onmouseover="alert('alpha')">
  <a href="jAva script:alert('bravo')">delta</a>
  <img src="x" onerror="alert('charlie')">
  <iframe src="javascript:alert('delta')"></iframe>
  <math>
    <mi xlink:href="data:x,<script>alert('echo')</script>"></mi>
  </math>
</div>
<script>
require('child_process').spawn('echo', ['hack!']);
</script> -->

<iframe width="560" height="315" src="https://www.youtube.com/embed/VC-taMPUOk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## TeX Mathematical Formulae (broken square root)

$-b \pm \sqrt{b^2 - 4ac} \over 2a$
$x = a_0 + \frac{1}{a_1 + \frac{1}{a_2 + \frac{1}{a_3 + a_4}}}$
$\forall x \in X, \quad \exists y \leq \epsilon$
$x^n + y^n = z^n$
