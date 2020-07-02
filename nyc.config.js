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
