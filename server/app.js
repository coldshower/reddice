import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev.js';
import webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';

import users from './routes/users';

const app = express();

const compiler = webpack(webpackConfig);

app.use(bodyParser.json());
app.use('/api/users', users);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});