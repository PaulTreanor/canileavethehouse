// vue.config.js
module.exports = {
    // options...
    
    publicPath: "",
    chainWebpack: config => {
    config.plugin("html").tap(args => {
        args[0].title = "My Vue App";
        return args;
    });
}
}