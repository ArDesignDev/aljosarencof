// postcss.config.js
module.exports = {
    plugins: [
      require('autoprefixer')({
        overrideBrowserslist: [
          '> 0.1%',
          'last 15 versions',
          'ie >= 9',
          'iOS >= 8',
          'Android >= 4.4'
        ]
      })
    ]
  };
  