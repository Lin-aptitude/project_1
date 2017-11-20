/*
Navicat MySQL Data Transfer

Source Server         : project
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mmx

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-20 19:19:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '商品名称',
  `nprice` float(10,2) unsigned NOT NULL COMMENT '现价',
  `cprice` float(10,2) unsigned NOT NULL COMMENT '原价',
  `imgurl` varchar(255) NOT NULL COMMENT '图片路径',
  `dec` varchar(255) DEFAULT NULL COMMENT '商品描述',
  `hot` varchar(255) DEFAULT NULL,
  `til` varchar(255) DEFAULT NULL,
  `reg_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('43', 'SULWHASOO 雪花秀', '289.00', '399.00', '../img/zm11.jpg', '采淡致美气垫粉底液', '', null, '2017-11-20 18:36:37');
INSERT INTO `goods` VALUES ('44', 'Holika Holika \n', '222.00', '299.00', '../img/zm12.jpg', '采淡致美气垫粉底液', null, null, '2017-11-20 17:46:38');
INSERT INTO `goods` VALUES ('45', 'SULWHASOO 雪花秀', '234.00', '311.00', '../img/zm13.jpg', '采淡致美气垫粉底液', null, null, '2017-11-20 17:46:41');
INSERT INTO `goods` VALUES ('46', 'SULWHASOO 雪花秀', '214.00', '303.00', '../img/zm14.jpg', '采淡致美气垫粉底液', 'hot', null, '2017-11-20 18:55:22');
INSERT INTO `goods` VALUES ('47', 'SULWHAS', '265.00', '380.00', '../img/zm15.jpg', '采淡致美气垫粉底液', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:55:22');
INSERT INTO `goods` VALUES ('48', 'SULWHASOO 雪花秀', '253.00', '380.00', '../img/zm16.jpg', '采淡致美气垫粉底液', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:55:22');
INSERT INTO `goods` VALUES ('50', 'SULWHAS ', '189.00', '343.00', '../img/zm17.jpg', '采淡致美气垫粉底液', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:55:22');
INSERT INTO `goods` VALUES ('51', 'SULWHASOO 雪花秀', '225.00', '300.00', '../img/zm18.jpg', '采淡致美气垫粉底液', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:55:26');
INSERT INTO `goods` VALUES ('52', 'SULW', '200.00', '398.00', '../img/zm19.jpg', '采淡致美气垫粉底液', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:55:26');
INSERT INTO `goods` VALUES ('53', 'SULWHASOO 雪花秀', '267.00', '340.00', '../img/zm20.jpg', '采淡致美气垫粉底液', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:55:26');
INSERT INTO `goods` VALUES ('54', 'SULWHASOO 雪花秀', '270.00', '345.00', '../img/zm21.jpg', '采淡致美气垫粉底液', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:55:26');
INSERT INTO `goods` VALUES ('55', 'SULWHASOO 雪花秀', '198.00', '299.00', '../img/zm22.jpg', '采淡致美气垫粉底液', '', null, '2017-11-20 18:36:34');
INSERT INTO `goods` VALUES ('56', 'SULWHASOO 雪花秀', '179.00', '289.00', '../img/zm23.jpg', '采淡致美气垫粉底液', null, null, '2017-11-20 17:47:35');
INSERT INTO `goods` VALUES ('57', 'SULWHASOO 雪花秀', '199.00', '289.00', '../img/zm24.jpg', '采淡致美气垫粉底液', null, null, '2017-11-20 17:47:38');
INSERT INTO `goods` VALUES ('58', 'SULWHASOO 雪花秀', '243.00', '389.00', '../img/zm25.jpg', '采淡致美气垫粉底液', null, null, '2017-11-20 17:47:41');
INSERT INTO `goods` VALUES ('59', 'SULWHASOO 雪花秀', '249.00', '389.00', '../img/zm26.jpg', '采淡致美气垫粉底液', null, null, '2017-11-20 17:47:45');
INSERT INTO `goods` VALUES ('60', 'SULWHASOO 雪花秀', '259.00', '339.00', '../img/zm17.jpg', '采淡致美气垫粉底液', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:55:53');
INSERT INTO `goods` VALUES ('61', 'SULWHASOO 雪花秀', '219.00', '379.00', '../img/zm18.jpg', '采淡致美气垫粉底液', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:55:53');
INSERT INTO `goods` VALUES ('62', 'SULWHASOO 雪花秀', '209.00', '389.00', '../img/zm19.jpg', '采淡致美气垫粉底液', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:55:53');
INSERT INTO `goods` VALUES ('63', 'SULWHASOO 雪花秀', '280.00', '380.00', '../img/zm20.jpg', '采淡致美气垫粉底液', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:55:53');
INSERT INTO `goods` VALUES ('64', 'SULWHASOO 雪花秀', '189.00', '343.00', '../img/zm17.jpg', '采淡致美气垫粉底液', null, null, '2017-11-20 17:48:09');
INSERT INTO `goods` VALUES ('65', 'SULWHASOO 雪花秀', '219.00', '379.00', '../img/zm18.jpg', '采淡致美气垫粉底液', null, null, '2017-11-20 17:48:12');
INSERT INTO `goods` VALUES ('66', 'SULWHASOO 雪花秀', '179.00', '362.00', '../img/zm18.jpg', '采淡致美气垫粉底液', '', null, '2017-11-20 18:36:30');
INSERT INTO `goods` VALUES ('67', 'SULWHASOO 雪花秀', '256.00', '290.00', '../img/zm18.jpg', '采淡致美气垫粉底液', null, null, '2017-11-20 17:48:17');
INSERT INTO `goods` VALUES ('68', 'SULWHASOO 雪花秀', '321.00', '345.00', '../img/zm14.jpg', '采淡致美气垫粉底液', '', null, '2017-11-20 18:36:28');
INSERT INTO `goods` VALUES ('69', 'SULWHASOO 雪花秀', '234.00', '300.00', '../img/zm15.jpg', '采淡致美气垫粉底液', null, null, '2017-11-20 17:48:23');
INSERT INTO `goods` VALUES ('70', 'SULWHASOO 雪花秀', '245.00', '332.00', '../img/zm16.jpg', '采淡致美气垫粉底液', '', null, '2017-11-20 18:36:26');
INSERT INTO `goods` VALUES ('71', 'SULWHASOO 雪花秀', '267.00', '381.00', '../img/zm12.jpg', '采淡致美气垫粉底液', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:56:28');
INSERT INTO `goods` VALUES ('72', 'SULWHASOO 雪花秀', '283.00', '326.00', '../img/zm17.jpg', '采淡致美气垫粉底液', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:56:28');
INSERT INTO `goods` VALUES ('73', 'SULWHASOO 雪花秀', '364.00', '420.00', '../img/zm18.jpg', '采淡致美气垫粉底液', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:56:28');
INSERT INTO `goods` VALUES ('74', 'SULWHASOO 雪花秀', '268.00', '369.00', '../img/zm19.jpg', '采淡致美气垫粉底液', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:56:28');
INSERT INTO `goods` VALUES ('75', 'SULWHASOO 雪花秀', '256.00', '373.00', '../img/zm20.jpg', '采淡致美气垫粉底液', null, null, '2017-11-20 17:49:18');
INSERT INTO `goods` VALUES ('76', 'SULWHASOO 雪花秀', '254.00', '354.00', '../img/zm21.jpg', '采淡致美气垫粉底液', null, null, '2017-11-20 17:49:24');
INSERT INTO `goods` VALUES ('77', 'SULWHASOO 雪花秀', '223.00', '354.00', '../img/zm22.jpg', '采淡致美气垫粉底液', null, null, '2017-11-20 17:49:27');
INSERT INTO `goods` VALUES ('78', 'SULWHASOO 雪花秀', '243.00', '376.00', '../img/zm23.jpg', '采淡致美气垫粉底液', null, null, '2017-11-20 17:49:29');
INSERT INTO `goods` VALUES ('79', 'SULWHASOO 雪花秀', '254.00', '379.00', '../img/zm24.jpg', '采淡致美气垫粉底液', null, null, '2017-11-20 17:49:32');
INSERT INTO `goods` VALUES ('80', 'SULWHASOO 雪花秀', '210.00', '380.00', '../img/zm25.jpg', '采淡致美气垫粉底液', null, null, '2017-11-20 17:49:35');
INSERT INTO `goods` VALUES ('81', 'SULWHASOO 雪花秀', '219.00', '359.00', '../img/zm26.jpg', '采淡致美气垫粉底液', 'hot', '挥洒丢我和武汉', '2017-11-20 18:59:19');
INSERT INTO `goods` VALUES ('1', 'MEDIHEAL 美迪惠尔', '64.00', '153.00', 'img/zm1.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:48:03');
INSERT INTO `goods` VALUES ('2', 'MEDIHEAL 美迪惠尔', '45.00', '78.00', 'img/zm2.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:43:06');
INSERT INTO `goods` VALUES ('3', 'MEDIHEAL 美迪惠尔', '97.00', '235.00', 'img/zm3.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:48:17');
INSERT INTO `goods` VALUES ('4', 'MEDIHEAL 美迪惠尔', '86.00', '178.00', 'img/zm4.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:48:24');
INSERT INTO `goods` VALUES ('5', 'MEDIHEAL 美迪惠尔', '145.00', '178.00', 'img/zm5.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:48:30');
INSERT INTO `goods` VALUES ('6', 'MEDIHEAL 美迪惠尔', '56.00', '189.00', 'img/zm6.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:48:38');
INSERT INTO `goods` VALUES ('7', 'MEDIHEAL 美迪惠尔', '230.00', '345.00', 'img/zm7.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:48:48');
INSERT INTO `goods` VALUES ('8', 'MEDIHEAL 美迪惠尔', '133.00', '278.00', 'img/zm8.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:48:57');
INSERT INTO `goods` VALUES ('9', 'MEDIHEAL 美迪惠尔', '95.00', '178.00', 'img/zm9.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:49:05');
INSERT INTO `goods` VALUES ('10', 'MEDIHEAL 美迪惠尔', '110.00', '278.00', 'img/zm10.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:49:16');
INSERT INTO `goods` VALUES ('11', 'MEDIHEAL 美迪惠尔', '87.00', '179.00', 'img/zm11.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:49:28');
INSERT INTO `goods` VALUES ('12', 'MEDIHEAL 美迪惠尔', '79.00', '280.00', 'img/zm12.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:49:35');
INSERT INTO `goods` VALUES ('13', 'MEDIHEAL 美迪惠尔', '84.00', '170.00', 'img/zm13.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:49:43');
INSERT INTO `goods` VALUES ('14', 'MEDIHEAL 美迪惠尔', '92.00', '271.00', 'img/zm14.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:49:52');
INSERT INTO `goods` VALUES ('15', 'MEDIHEAL 美迪惠尔', '84.00', '210.00', 'img/zm15.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:50:00');
INSERT INTO `goods` VALUES ('16', 'MEDIHEAL 美迪惠尔', '82.00', '291.00', 'img/zm16.jpg', '茶树舒缓洗面奶 170ml', 'hot', null, '2017-11-20 18:58:48');
INSERT INTO `goods` VALUES ('17', 'MEDIHEAL 美迪惠尔', '79.00', '230.00', 'img/zm17.jpg', '茶树舒缓洗面奶 170ml', 'hot', null, '2017-11-20 18:58:48');
INSERT INTO `goods` VALUES ('18', 'MEDIHEAL 美迪惠尔', '80.00', '139.00', 'img/zm18.jpg', '茶树舒缓洗面奶 170ml', 'hot', null, '2017-11-20 18:58:48');
INSERT INTO `goods` VALUES ('19', 'MEDIHEAL 美迪惠尔', '70.00', '148.00', 'img/zm19.jpg', '茶树舒缓洗面奶 170ml', 'hot', null, '2017-11-20 18:58:48');
INSERT INTO `goods` VALUES ('20', 'MEDIHEAL 美迪惠尔', '79.00', '230.00', 'img/zm21.jpg', '茶树舒缓洗面奶 170ml', 'hot', null, '2017-11-20 18:58:48');
INSERT INTO `goods` VALUES ('21', 'MEDIHEAL 美迪惠尔', '48.00', '149.00', 'img/zm20.jpg', '茶树舒缓洗面奶 170ml', '', null, '2017-11-20 18:58:48');
INSERT INTO `goods` VALUES ('22', 'MEDIHEAL 美迪惠尔', '69.00', '197.00', 'img/zm21.jpg', '茶树舒缓洗面奶 170ml', 'hot', null, '2017-11-20 18:58:48');
INSERT INTO `goods` VALUES ('23', 'MEDIHEAL 美迪惠尔', '92.00', '310.00', 'img/zm22.jpg', '茶树舒缓洗面奶 170ml', 'hot', null, '2017-11-20 18:58:48');
INSERT INTO `goods` VALUES ('24', 'MEDIHEAL 美迪惠尔', '79.00', '210.00', 'img/zm23.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:53:24');
INSERT INTO `goods` VALUES ('25', 'MEDIHEAL 美迪惠尔', '132.00', '278.00', 'img/zm24.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:53:16');
INSERT INTO `goods` VALUES ('26', 'MEDIHEAL 美迪惠尔', '210.00', '392.00', 'img/zm25.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:53:09');
INSERT INTO `goods` VALUES ('27', 'MEDIHEAL 美迪惠尔', '39.00', '97.00', 'img/zm26.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:52:45');
INSERT INTO `goods` VALUES ('28', 'MEDIHEAL 美迪惠尔', '59.00', '180.00', 'img/zm27.jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:52:55');
INSERT INTO `goods` VALUES ('29', 'MEDIHEAL 美迪惠尔', '172.00', '302.00', 'img/zm(1).jpg', '茶树舒缓洗面奶 170ml', '', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:54:53');
INSERT INTO `goods` VALUES ('30', 'MEDIHEAL 美迪惠尔', '145.00', '278.00', 'img/zm(2).jpg', '茶树舒缓洗面奶 170ml', '', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:54:53');
INSERT INTO `goods` VALUES ('31', 'MEDIHEAL 美迪惠尔', '127.00', '329.00', 'img/zm(3).jpg', '茶树舒缓洗面奶 170ml', '', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:54:53');
INSERT INTO `goods` VALUES ('32', 'MEDIHEAL 美迪惠尔', '179.00', '320.00', 'img/zm(4).jpg', '茶树舒缓洗面奶 170ml', '', '', '2017-11-20 18:55:09');
INSERT INTO `goods` VALUES ('33', 'MEDIHEAL 美迪惠尔', '79.00', '278.00', 'img/zm(5).jpg', '茶树舒缓洗面奶 170ml', '', '', '2017-11-20 18:55:09');
INSERT INTO `goods` VALUES ('34', 'MEDIHEAL 美迪惠尔', '90.00', '260.00', 'img/zm(6).jpg', '茶树舒缓洗面奶 170ml', 'hot', '', '2017-11-20 18:55:09');
INSERT INTO `goods` VALUES ('35', 'MEDIHEAL 美迪惠尔', '156.00', '297.00', 'img/zm(7).jpg', '茶树舒缓洗面奶 170ml', 'hot', '', '2017-11-20 18:55:09');
INSERT INTO `goods` VALUES ('36', 'MEDIHEAL 美迪惠尔', '78.00', '230.00', 'img/zm(8).jpg', '茶树舒缓洗面奶 170ml', 'hot', '', '2017-11-20 18:55:09');
INSERT INTO `goods` VALUES ('37', 'MEDIHEAL 美迪惠尔', '69.00', '178.00', 'img/zm(9).jpg', '茶树舒缓洗面奶 170ml', '', '', '2017-11-20 18:55:09');
INSERT INTO `goods` VALUES ('38', 'MEDIHEAL 美迪惠尔', '145.00', '290.00', 'img/zm(10).jpg', '茶树舒缓洗面奶 170ml', '', '', '2017-11-20 18:55:09');
INSERT INTO `goods` VALUES ('39', 'MEDIHEAL 美迪惠尔', '73.00', '210.00', 'img/zm(11).jpg', '茶树舒缓洗面奶 170ml', 'hot', '', '2017-11-20 18:55:09');
INSERT INTO `goods` VALUES ('40', 'MEDIHEAL 美迪惠尔', '120.00', '230.00', 'img/zm(12).jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:51:02');
INSERT INTO `goods` VALUES ('41', 'MEDIHEAL 美迪惠尔', '98.00', '279.00', 'img/zm(13).jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:50:55');
INSERT INTO `goods` VALUES ('42', 'MEDIHEAL 美迪惠尔', '148.00', '278.00', 'img/zm(14).jpg', '茶树舒缓洗面奶 170ml', 'hot', '猪鼻子去黑头收毛孔三部曲 1片×10件', '2017-11-20 18:50:45');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `password` varchar(255) NOT NULL COMMENT '密码',
  `phone` varchar(255) NOT NULL COMMENT '用户号码',
  `reg_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '654321', '15185601671', '2017-11-17 19:29:08');
INSERT INTO `user` VALUES ('2', '123456', '15285601671', '2017-11-17 19:29:11');
INSERT INTO `user` VALUES ('3', '654321', '15385601671', '2017-11-17 19:29:14');
INSERT INTO `user` VALUES ('4', '123456', '15485601671', '2017-11-17 19:29:54');
INSERT INTO `user` VALUES ('5', '654321', '15585601671', '2017-11-17 19:28:03');
INSERT INTO `user` VALUES ('6', '456789', '15685601671', '2017-11-17 19:30:22');
INSERT INTO `user` VALUES ('7', '654321', '15785601671', '2017-11-17 19:30:37');
INSERT INTO `user` VALUES ('8', '654321', '15885601671', '2017-11-17 19:28:03');
INSERT INTO `user` VALUES ('9', '654321', '15985601671', '2017-11-17 19:30:37');
INSERT INTO `user` VALUES ('10', '654321', '15085601671', '2017-11-17 19:31:29');
INSERT INTO `user` VALUES ('19', 'd41d8cd98f00b204e9800998ecf8427e', '', '2017-11-17 22:06:40');
INSERT INTO `user` VALUES ('18', 'e10adc3949ba59abbe56e057f20f883e', '18285601671', '2017-11-17 21:53:44');
INSERT INTO `user` VALUES ('17', '77ada4f938d1e7ba318b9ce164890b50', '13564334323', '2017-11-17 21:45:02');
SET FOREIGN_KEY_CHECKS=1;
