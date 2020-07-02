# nuxt-cypress-coverage-sample

## Samples

```
npm install

npm run dev

npx cypress open

covrage/lcov-report/index.html
```

## How create

### package install

```bash
npm install --save-dev @cypress/code-coverage nyc istanbul-lib-coverage babel-plugin-istanbul cypress
```

### cypress

Run the cypress once in the beginning.

```bash
npx cypress open
```

### config files

* ./nuxt.config.js

```
  build: {
    babel: {
      plugins: [['babel-plugin-istanbul']],
    },
  },
```

* ./.babelrc

```
{
  "env": {
    "test": {
      "plugins": ["istanbul"],
      "presets": [
        [
          "@babel/preset-env",
          {
            "targets": {
              "node": "current"
            }
          }
        ]
      ]
    }
  }
}
```

* ./nyc.config.js

```
module.exports = {
  all: true,
  extension: ['.js', '.vue'],
  exclude: ['**/*.{spec,test}.{js,ts}'],
  include: [
    'pages/**/*.{vue,ts}',
    'layouts/**/*.{vue,ts}',
    'components/**/*.{vue,ts}',
    'module/**/*.js',
    'mixin/**/*.js',
    'store/**/*.js',
  ],
}
```

* ./cypress/support/index.js

```
import './commands'
import '@cypress/code-coverage/support'
```

* ./cypress/plugins/index.js

```
module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config)
  on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))
  return config
}
```
