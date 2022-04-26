var mysql  = require('mysql');  
var dbconfig = require("./database");
//使用连接池
var pool = mysql.createPool(dbconfig.mysql);

//查询
exports.showgoods = function(callback) {
  pool.getConnection(function(err, connection) {
    //定义查询语句
    var sql = 'SELECT goodsId,goodsName,goodsPrice,goodsInfo FROM t_goods';
    connection.query(sql,function(err,result) {
        result = JSON.stringify(result);
        console.log(result);
        // 释放连接
        callback(err,result);
        connection.release();  
    })
  });
}



exports.getDetail=function (id,callback) {
  pool.getConnection(function(err,connection){
    var sql = 'SELECT * FROM t_goods where goodsId=' + id;
    connection.query(sql,function (err, result) {
      if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
      }
      result=JSON.stringify(result);
      console.log(result);
      //释放连接
      callback(err,result);
      connection.release();  
    });
  })
}
 
//删除
exports.deletegoods = function(id, callback) {
  pool.getConnection(function(err, connection) {
    //定义查询语句
    console.log(id);
    var sql = "delete FROM t_goods where goodsId=" + id;
    connection.query(sql,function(err,result) {
        result = JSON.stringify(result);
        console.log(result);
        // 释放连接
        callback(err,result);
        connection.release();
    })
  });
}
//增加
exports.insertgoods = function(name,price,stock,info,callback) {
  var  addSql = 'INSERT INTO t_goods(goodsName,goodsPrice,goodsStock,goodsInfo) VALUES(?,?,?,?)';
  var  addSqlParams = [name,price,stock,info]; 
  pool.getConnection(function(err, connection) {
    //定义查询语句
    connection.query(addSql, addSqlParams, function(err,result) {
        console.log(result.insertId);
        // 释放连接
        callback(err, JSON.stringify(result));
        connection.release();
    })
  });
}

//更新
exports.updategoods = function(name,price,stock,info,id,callback) {
  var  updateSql = 'update t_goods set goodsName=?,goodsPrice=?,goodsStock=?,goodsInfo=? where goodsId='+id;
  var  updateSqlParams = [name,price,stock,info]; 
  pool.getConnection(function(err, connection) {
    //定义查询语句
    connection.query(updateSql, updateSqlParams, function(err,result) {
      console.log(result.affectedRows);
      callback(err, JSON.stringify(result));
      connection.release();
    })
  });
}

//加入购物车
exports.addcart = function(id,num,callback) {
  var sql = 'SELECT goodsNum FROM t_order where goodsId='+id;
  pool.getConnection(function(err, connection) {
    connection.query(sql,function(err,result) {
        result = JSON.stringify(result);
        console.log(result);
        if(result=="[]")
        {
          var  addSql = 'INSERT INTO t_order(goodsId,goodsNum) VALUES(?,?)';
          var  addSqlParams = [id,num]; 
            connection.query(addSql, addSqlParams, function(err,result) {
              console.log(result.affectedRows);
              // 释放连接
              callback(err, JSON.stringify(result));
              connection.release();
            })
        }
        else
        {
          var  updateSql = 'update t_order set goodsNum=goodsNum+? where goodsId='+id;
          var  updateSqlParams = [num]; 
            connection.query(updateSql, updateSqlParams, function(err,result) {
              console.log(result.affectedRows);
              callback(err, JSON.stringify(result));
              connection.release();
            })
        }
    })
        
    });
}
