const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    open:true,  
    proxy:{
      '/api':{
        target:'http://1.116.64.64:5004/api2',
        pathRewrite:{'^/api':''},
        secure: false,
        changeOrigin: true
      }
    }
  }
 
})
