# jhekasoft

> Site

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# deploy (after commits)
$ npm run deploy
```

## Generate and deploy with local API

1\. Copy API content to the `static/api` directory.

2\. In `.env` set:

``` markdown
API_BASE_URL=/api/
```

3\. Run dev (don't stop):

``` bash
$ npm run dev
```

4\. Generate and deploy:

``` bash
$ npm run generate-and-deploy
```

5\. In `.env` set:

``` markdown
API_BASE_URL=https://jhekasoft.github.io/api/
```

6\. Generate and deploy again:

``` bash
$ npm run generate-and-deploy
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
