var mysql = require('mysql');
var dbconfig = require("./database");
//使用连接池
var pool = mysql.createPool(dbconfig.mysql);

//管理员登录
exports.Insert_manager = function(name,pwd,type,callback) {
    var  addSql = 'INSERT INTO t_usermana(userName,password,type) VALUES(?,?,?)';
    var  addSqlParams = [name,pwd,type];
    console.log("name-function" + name);
    pool.getConnection(function(err, connection) {
        //定义添加语句
        connection.query(addSql, addSqlParams, function(err,result) {
            console.log(result);
            // 释放连接
            callback(err, JSON.stringify(result));
            connection.release();
        });
    });
}

//用户管理
//用户管理全部
exports.showAll_usermana = function(callback) {
    pool.getConnection(function(err, connection) {
        //定义查询语句
        var sql = "SELECT * FROM t_usermana";
        connection.query(sql,function(err,result) {
            result = JSON.stringify(result);
            //console.log(result);
            // 释放连接
            callback(err,result);
            connection.release();    
        });
    });
}
//用户管理更新用
exports.getDetail_usermana = function(id,callback) {
    pool.getConnection(function(err, connection) {
        //定义查询语句
        //console.log(id);
        var sql = "SELECT * FROM t_usermana where userId=" + id;
        connection.query(sql,function(err,result) {
            result = JSON.stringify(result);
            //console.log(result);
            // 释放连接
            callback(err,result);
            connection.release();    
        });
    });
}
//用户管理查找
exports.select_usermana = function(userName,callback) {
    pool.getConnection(function(err, connection) {
        //定义查询语句
       //console.log(userName);
        var sql = "SELECT * FROM t_usermana where userName=" + userName ;
        connection.query(sql,function(err,result) {
            result = JSON.stringify(result);
            //console.log(result);
            // 释放连接
            callback(err,result);
            connection.release();    
        });
    });
}
//用户管理删除
exports.delete_usermana = function(id, callback) {
    pool.getConnection(function(err, connection) {
        //定义删除语句
        console.log(id);
        var sql = "delete FROM t_usermana where userId=" + id;
        connection.query(sql,function(err,result) {
            result = JSON.stringify(result);
            console.log(result);
            // 释放连接
            callback(err,result);
            connection.release();  
      });
    });
  }
//用户管理增加
exports.Insert_usermana = function(name,pwd,type,callback) {
    var  addSql = 'INSERT INTO t_usermana(userName,password,type) VALUES(?,?,?)';
    var  addSqlParams = [name,pwd,type];
    console.log("name-function" + name);
    pool.getConnection(function(err, connection) {
        //定义添加语句
        connection.query(addSql, addSqlParams, function(err,result) {
            console.log(result);
            // 释放连接
            callback(err, JSON.stringify(result));
            connection.release();
        });
    });
}


//用户管理更新
exports.update_usermana = function(name,pwd,id,callback) {
    console.log(name);
    console.log(pwd);
    console.log(id);
      var  modSql = 'UPDATE t_usermana SET userName=?, `password`=? WHERE userId=?;';
      var  modSqlParams = [name,pwd,parseInt(id)]; 
      pool.getConnection(function(err, connection) {
        //定义查询语句
        connection.query(modSql, modSqlParams, function(err,result) {
        console.log(err);
        callback(err, JSON.stringify(result));
        connection.release();
        });
    });
}

//订单管理
//订单管理全部
exports.showAll_ordermana = function(callback) {
    pool.getConnection(function(err, connection) {
        //定义查询语句
        var sql = "SELECT * FROM t_ordermana";
        connection.query(sql,function(err,result) {
            result = JSON.stringify(result);
            //console.log(result);
            // 释放连接
            callback(err,result);
            connection.release();    
        });
    });
}
//订单管理查找
exports.select_ordermana = function(userName,callback) {
    pool.getConnection(function(err, connection) {
        //定义查询语句
        console.log(userName);
        var sql = "SELECT * FROM t_ordermana where userName=" + userName;
        connection.query(sql,function(err,result) {
            result = JSON.stringify(result);
            //console.log(result);
            // 释放连接
            callback(err,result);
            connection.release();    
        });
    });
}
//订单管理删除
exports.delete_ordermana = function(id, callback) {
    pool.getConnection(function(err, connection) {
        //定义删除语句
        console.log(id);
        var sql = "delete FROM t_ordermana where orderId=" + id;
        connection.query(sql,function(err,result) {
            result = JSON.stringify(result);
            console.log(result);
            // 释放连接
            callback(err,result);
            connection.release();  
      });
    });
  }
//订单管理更新
exports.update_ordermana = function(name,pho,adr,good,id,callback) {
    console.log(name);
    console.log(pho);
    console.log(adr);
    console.log(good);
    console.log(id);
      var  modSql = 'UPDATE t_ordermana SET userName=?, userPhone=?,userAdress=?,orderGoods=? WHERE orderId=?;';
      var  modSqlParams = [name,pho,adr,good,parseInt(id)]; 
      pool.getConnection(function(err, connection) {
        //定义查询语句
        connection.query(modSql, modSqlParams, function(err,result) {
        console.log(err);
        callback(err, JSON.stringify(result));
        connection.release();
        });
    });
}
