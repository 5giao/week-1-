/*
 * @Author: your name
 * @Date: 2020-11-15 17:21:20
 * @LastEditTime: 2020-11-15 19:32:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week\app\Mock\data.js
 */
const Mock = require('mockjs');
module.exports=Mock.mock({
    "list|4-7":[{
        "title":'@ctitle',
        "img":'@image(70x70,@color)',
        "id":'@id',
        "desc":'@cword(5,8)'
    }]
})


