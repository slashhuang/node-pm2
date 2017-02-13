/*
 * built by slashhuang
 * 2017.2.13
 * 主程序入口
 */

 const http = require('http');

const PORT = 3000;

 http.createServer((req,res)=>{
    res.write('hello world\n');
    res.end('response stream done')
 }).listen(PORT);
 console.log(`app starting on port ${PORT}`)
