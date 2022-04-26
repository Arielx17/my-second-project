//数据库配置文件
module.exports = {  //封装为一个模块发布出来
    mysql: {
        host: 'localhost',
        user: 'root',
        password: 'a123',
        port:'3306',
        database: 'manager'
    }
}
/*通常exports方式使用方法是：
exports.[function name] = [function name]

moudle.exports方式使用方法是：
moudle.exports= [function name]

这样使用两者根本区别是

**exports **返回的是模块函数
**module.exports **返回的是模块对象本身，返回的是一个类

使用上的区别是
exports的方法可以直接调用
module.exports需要new对象之后才可以调用
*/