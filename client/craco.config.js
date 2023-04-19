import path from 'path';

export default {
  style: {
    modules: {
      localIdentName: '[name]__[local]___[hash:base64:5]',
    },
    sass: {
      loaderOptions: {
        sassOptions: {
          includePaths: [path.join(__dirname, 'src', 'sass')],
        },
      },
    },
  },
};
