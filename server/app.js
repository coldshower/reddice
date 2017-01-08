import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev.js';

const app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/*', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});