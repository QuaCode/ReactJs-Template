1. Ejecutar `npm init —yes`
2. `npm i -D webpack webpack-cli`
3. Crear carpeta src
4. Dentro de la carpeta src crear index.html y index.js
5. Crear plantila html:5 y colocar un div con un “id=root”
6. Crear archivo en raiz de webpack.confid.js
7. Dentro de webpack colocar  

```jsx
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
```

1. Colocar el scrip `"build": "webpack --mode production",`
2. Instalar  `@babel/core babel-loader @babel/preset-env @babel/preset-react`
3. Agregar a la configuracion de webpack

```jsx
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }
  ]
}
```

1. Instalar `npm i -D html-webpack-plugin`
2. Agregar al webpack

```jsx
const HtmlWebpackPlugin = require('html-webpack-plugin')

...
plugins: [
  new HtmlWebpackPlugin({
   template: path.join(__dirname, './src/index.html'),
  }),
 ],
...
```

1. Instalar `npm i -D webpack-dev-server`
2. Agregar a webpack

```jsx
devServer: {
  static: {
   directory: path.join(__dirname, 'dist'),
  },
  compress: true,
  port: 3000,
 },
```

1. Agregar el script `"dev": "webpack serve --mode development"`
2. Instalar `npm i -D sass sass-loader style-loader css-loader`
3. Agregar a webpack

```jsx
   {
    use: ['style-loader', 'css-loader', 'sass-loader'],
    test: /.(.css|sass|scss)$/,
   },

   {
    type: 'asset',
    test: /\.(png|jpe?g|gif|svg)$/,
   },
```
