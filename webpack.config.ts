const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "single-spa-config.ts"),
    cache: false,
    mode: "development",
    devtool: "source-map",
    optimization: {
        minimize: false
    },
    output: {
        publicPath: "http://localhost:3002/"
    },
    resolve: {
        extensions: [".jsx", ".js", ".json", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            ['@babel/preset-typescript']
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "madrox",
            library: { type: "var", name: "madrox" },
            filename: "madrox.js",
            exposes: {
                Madrox: "./single-spa-config.ts"
            },
            remotes: {
                mf: "mf",
                saturn: "saturn",
            },
            shared: ["single-spa-react"]
        }),
        // new HtmlWebpackPlugin({
        //     template: "./index.html"
        // })
    ]
};