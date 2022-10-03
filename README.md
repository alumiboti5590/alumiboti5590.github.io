# Team Documentation Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Local Development

```
$ npm install --legacy-peer-deps
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Branching

The Docusaurus project is hosted on the `main` branch, and **all content changes should be merged here _only_**. The `gh-pages` branch is managed automatically whenever a change is made to `main`, as the `gh-pages` branch is what gets served.