/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80020
Source Host           : localhost:3306
Source Database       : mydb

Target Server Type    : MYSQL
Target Server Version : 80020
File Encoding         : 65001

Date: 2020-06-26 17:04:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_dep
-- ----------------------------
DROP TABLE IF EXISTS `t_dep`;
CREATE TABLE `t_dep` (
  `did` int NOT NULL AUTO_INCREMENT,
  `dname` varchar(150) DEFAULT NULL,
  `dtype` varchar(255) DEFAULT NULL,
  `dsex` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`did`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_dep
-- ----------------------------
INSERT INTO `t_dep` VALUES ('1', 'aa', '人力资源部', '男');
INSERT INTO `t_dep` VALUES ('2', 'bb', '人力资源部', '女');
INSERT INTO `t_dep` VALUES ('3', 'cc', '人力资源部', '男');
INSERT INTO `t_dep` VALUES ('4', 'dd', '开发部', '女');
INSERT INTO `t_dep` VALUES ('5', 'ee', '后勤保障部', '男');
INSERT INTO `t_dep` VALUES ('6', 'ff', '后勤保障部', '女');

-- ----------------------------
-- Table structure for t_goods
-- ----------------------------
DROP TABLE IF EXISTS `t_goods`;
CREATE TABLE `t_goods` (
  `goodsId` int NOT NULL AUTO_INCREMENT,
  `goodsName` varchar(255) DEFAULT NULL,
  `goodsPrice` decimal(10,2) DEFAULT NULL,
  `goodsStock` int DEFAULT NULL,
  `goodsInfo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goodsId`),
  KEY `goodsId` (`goodsId`,`goodsName`,`goodsPrice`),
  KEY `goodsName` (`goodsName`),
  KEY `goodsPrice` (`goodsPrice`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_goods
-- ----------------------------
INSERT INTO `t_goods` VALUES ('19', 'aa', '66.00', '300', 'd');
INSERT INTO `t_goods` VALUES ('26', 'hi', '123.00', '222', '66');

-- ----------------------------
-- Table structure for t_news
-- ----------------------------
DROP TABLE IF EXISTS `t_news`;
CREATE TABLE `t_news` (
  `NewsId` int NOT NULL AUTO_INCREMENT,
  `NewsTitle` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `NewsTime` timestamp NULL DEFAULT NULL,
  `NewsWriter` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `NewsContent` varchar(2550) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`NewsId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_news
-- ----------------------------
INSERT INTO `t_news` VALUES ('1', 'news1', '2020-06-10 12:12:12', 'Ariel', '今天星期二');
INSERT INTO `t_news` VALUES ('2', 'news2', '2020-06-13 00:00:00', 'Martin', '今天星期三');
INSERT INTO `t_news` VALUES ('12', 'news3', '2020-06-09 23:10:20', 'Chan', '2020/6/9 23:10');
INSERT INTO `t_news` VALUES ('14', 'news4', '2020-06-09 23:33:07', 'Yeol', '报时:2020/6/9 23:33');

-- ----------------------------
-- Table structure for t_order
-- ----------------------------
DROP TABLE IF EXISTS `t_order`;
CREATE TABLE `t_order` (
  `orderId` int NOT NULL AUTO_INCREMENT,
  `goodsId` int DEFAULT NULL,
  `goodsNum` int DEFAULT NULL,
  PRIMARY KEY (`orderId`),
  KEY `goodsId` (`goodsId`),
  CONSTRAINT `t_order_ibfk_1` FOREIGN KEY (`goodsId`) REFERENCES `t_goods` (`goodsId`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_order
-- ----------------------------
INSERT INTO `t_order` VALUES ('25', '19', '2');

-- ----------------------------
-- Table structure for t_ordermana
-- ----------------------------
DROP TABLE IF EXISTS `t_ordermana`;
CREATE TABLE `t_ordermana` (
  `orderId` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `userPhone` varchar(255) DEFAULT NULL,
  `userAdress` varchar(255) DEFAULT NULL,
  `orderGoods` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_ordermana
-- ----------------------------
INSERT INTO `t_ordermana` VALUES ('1', '杨千嬅', '123456789101', '香港湾仔', 'Meta纤维粉');

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `UserId` int NOT NULL AUTO_INCREMENT,
  `UserName` varchar(50) DEFAULT NULL,
  `UserPwd` varchar(1500) DEFAULT NULL,
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', 'Ariel', '17');

-- ----------------------------
-- Table structure for t_usermana
-- ----------------------------
DROP TABLE IF EXISTS `t_usermana`;
CREATE TABLE `t_usermana` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_usermana
-- ----------------------------
INSERT INTO `t_usermana` VALUES ('1', 'aa', '12345', '用户');
INSERT INTO `t_usermana` VALUES ('2', '啊啊', '1234567', '管理员');
INSERT INTO `t_usermana` VALUES ('3', 'cc', '4567', '用户');
INSERT INTO `t_usermana` VALUES ('4', 'dd', '55555555', '管理员');
INSERT INTO `t_usermana` VALUES ('11', 'bb', '1234567', '用户');
INSERT INTO `t_usermana` VALUES ('12', 'ee', '7987987', '用户');
INSERT INTO `t_usermana` VALUES ('13', 'ff', '635616543416', '用户');
INSERT INTO `t_usermana` VALUES ('14', 'gg', '4653416415', '用户');
INSERT INTO `t_usermana` VALUES ('15', 'hh', '6454196', '用户');
INSERT INTO `t_usermana` VALUES ('16', 'ii', '16541968516', '用户');
INSERT INTO `t_usermana` VALUES ('17', 'jj', '222266', '用户');

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phoneNum` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `rName` varchar(255) DEFAULT NULL,
  `rAddress` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('1', '1', '1', '1', '1', '1', '1');
INSERT INTO `userinfo` VALUES ('2', 'yang', '12345', '13531234567', '133694267@qq.com', '小杨', '广东省 珠海市 香洲区 唐家湾镇 金凤路18号北京师范大学珠海分校');
INSERT INTO `userinfo` VALUES ('3', '', '', '', '', '', '');
INSERT INTO `userinfo` VALUES ('4', '', '', '', '', '', '');
INSERT INTO `userinfo` VALUES ('5', '', '', '', '', '', '');
