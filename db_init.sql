CREATE DATABASE IF NOT EXISTS `craftracker`;

USE `craftracker`;

CREATE TABLE IF NOT EXISTS `inventory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mfr` varchar(25) NOT NULL,
  `num` varchar(16) NOT NULL,
  `qty` int(15) NOT NULL,
  `owner` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `num` (`num`,`owner`) USING BTREE,
  KEY `owner` (`owner`)
) ENGINE=InnoDB AUTO_INCREMENT=173 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `dmc` varchar(12) DEFAULT '-1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQUE_USERNAME` (`username`),
  UNIQUE KEY `UNIQUE_EMAIL` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;