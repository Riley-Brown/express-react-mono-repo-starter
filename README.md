# Starter template for Express TypeScript and React TypeScript development

## Getting started

## Install dependencies

```sh
npm i && npm i ./front-end
```

## Running locally

```sh
npm run dev
```

This will start up a node.js express server on port `9999` and run create-react-app on port `3000`

Nodemon will auto hot-reload on any changes in the server directory, while create-react-app will auto hot-reload any changes in front-end directory

`http://localhost:3000` will display a basic landing page with routing using `react-router` v6 and form example communicating with the express server

## Building Server

```sh
npm run build:server
```

This will compile the server TypeScript code into a `dist` directory in the root directory

## Building front-end

```sh
npm run build:front-end
```
