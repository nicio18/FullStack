//configuracion de webPack, que es webpack: tiene la funcion de convertir todo el codigo de frontEnd a codigo estandar HTml CSS Js a otra carpeta.

const path = require("path");
const HtmlWebPluging =require("html-webpack-plugin");
const MiniExtracCss= require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";




module.exports = {
    entry: "./frontend/app.js",
    output:{
        path: path.join(__dirname, "backend/public"),
        filename: "js/bundle.js"
    },
    mode: "development",

    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    devMode ? "style-loader" : MiniExtracCss.loader,
                    "css-loader"
                ]
            }
        ]
    },
    //Arreglo de obketos [],
    plugins: [
        new HtmlWebPluging({
            template: './frontend/index.html',
            minify:{
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes:true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes:true,
                useShortDoctype:true
            
            }
            
        }),
        new MiniExtracCss({
            filename: "css/bundle.css"
        })

    ],
    //para ver en que linea cometo un error cuando estoy desarollando 
    devtool: "source-map"
};