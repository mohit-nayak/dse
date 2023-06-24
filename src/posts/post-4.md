---
title: "Fourth Post!"
date: 2021-09-04
published: false
readTime: 3 minutes
preview: blog-preview-placeholder.png
slug: post-en-4
tags: ['test', 'DevOps']
---

## Hello, world!

Thanks to MDX, It is now possible to add JSX in Markdown! Below is an example of JSX embedded in Markdown. <br />

> MDX is an authorable format that lets you seamlessly write JSX in your Markdown documents. You can import components, such as interactive charts or alerts, and embed them within your content. This makes writing long-form content with components a blast 🚀.


**Example:**

<div style={{ padding: '20px', backgroundColor: 'tomato' }}>
  <h3>This is JSX in Markdown</h3>
  {console.log('hello MDX')}
</div>

Code:

```jsx
<div style={{ padding: '20px', backgroundColor: 'tomato' }}>
  <h3>This is JSX in Markdown</h3>
  {console.log('hello MDX')}
</div>
```


## How-to?

```jsx{5}
import MySuperComponent from '../path/to/MySuperComponent'

# Some text in Markdown

<MySuperComponent></MySuperComponent>


other text in markdown
```

## Read more

👉 https://mdxjs.com
