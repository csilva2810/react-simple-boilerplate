module.exports = {
  presets: [
    ['babel-preset-react-app', { NODE_ENV: process.env.NODE_ENV }],
  ],
  plugins: [
    'react-hot-loader/babel',
  ],
};
