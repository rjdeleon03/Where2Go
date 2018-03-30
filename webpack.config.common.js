var webpack = require("webpack");

module.exports = {
    entry: {
        "app": "./assets/app/main.ts"
    },
    resolve: {
        "extensions": [".js", ".ts"]
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    "awesome-typescript-loader",
                    "angular-template-loader",
                    "angular-router-loader"
                ]
            },
            {
                test: /\.html$/,
                loaders: "html"
            },
            {
                test: /\.css$/,
                loaders: "raw"
            }
        ]
    }
};