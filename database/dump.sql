-- MySQL dump 10.16  Distrib 10.1.23-MariaDB, for debian-linux-gnueabihf (armv7l)
--
-- Host: localhost    Database: CoffeeTimeDB
-- ------------------------------------------------------
-- Server version	10.1.23-MariaDB-9+deb9u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `CoffeeTimeDB`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `CoffeeTimeDB` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `CoffeeTimeDB`;

--
-- Table structure for table `Automat`
--

DROP TABLE IF EXISTS `Automat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Automat` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `art` tinyint(4) NOT NULL,
  `oeffnungszeit` varchar(50) DEFAULT NULL,
  `standortlg` decimal(10,7) NOT NULL,
  `standortbg` decimal(10,7) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Automat`
--

LOCK TABLES `Automat` WRITE;
/*!40000 ALTER TABLE `Automat` DISABLE KEYS */;
INSERT INTO `Automat` VALUES (3,'Kölner Dom',0,'Mo-Fr 10-12h',50.9410000,6.9580000),(4,'Kölner Dom',0,'Mo-Fr 10-12h',50.9430000,6.9580000),(12,'Eismann',0,'altijd',6.2340000,55.3450000),(19,'Schokoladenmuseum',0,'Mo-Fr 10-12h',50.9310000,6.9640000),(22,'Hard Rock Café',0,'immer geöffnet',50.9373278,6.9568749),(23,'Jugend hackt',0,'8-23 Uhr',50.9460000,6.9580000),(24,'Park mit Eisverkäufer',0,'8-23 Uhr',50.9440000,6.9500000),(25,'Café Fromme',0,'8:30-19:00 Sonntag 10:30-18:00',50.9388111,6.9457412),(26,'Coffee Time',0,'immer',50.2000000,6.9000000),(28,'Extrablatt Düren',0,'8:00 Uhr bis 23:00',50.8022401,6.4843981),(29,'Kaffee',0,'nie',50.9000000,6.9000000);
/*!40000 ALTER TABLE `Automat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Bewertung`
--

DROP TABLE IF EXISTS `Bewertung`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Bewertung` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `kommentar` text,
  `qualitaet` tinyint(4) DEFAULT NULL,
  `heissgetreankid` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bewertung`
--

LOCK TABLES `Bewertung` WRITE;
/*!40000 ALTER TABLE `Bewertung` DISABLE KEYS */;
INSERT INTO `Bewertung` VALUES (1,'Dies ist ein Kommentar',5,1),(2,'Cooler Kaffee, aber zu teuer',2,1),(3,'Gratis Wasser!',5,12),(4,'Cool',3,19),(5,'Toller Kakao!',4,14),(6,'',4,20),(7,'Schöner Automat am Dom',4,3),(8,'Schöner Automat am Dom',4,4),(9,'Lecker geschmeckt',4,15);
/*!40000 ALTER TABLE `Bewertung` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Heissgetraenke`
--

DROP TABLE IF EXISTS `Heissgetraenke`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Heissgetraenke` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `preis` decimal(10,2) DEFAULT NULL,
  `automatid` int(255) DEFAULT NULL,
  `art` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Heissgetraenke`
--

LOCK TABLES `Heissgetraenke` WRITE;
/*!40000 ALTER TABLE `Heissgetraenke` DISABLE KEYS */;
INSERT INTO `Heissgetraenke` VALUES (1,'Kaffee',30.00,4,0),(2,'Kakao',2.50,4,1),(3,'Zitronentee',0.75,22,2),(5,'Schwarzer Kaffee',5.00,2,0),(6,'Schwarzer Kaffee',5.00,3,0),(7,'Goldener Kaffee',7.99,3,0),(8,'Lieblingskaffee',12.99,2,0),(9,'Eiskaffee',12.99,12,0),(10,'Kaffee',4.00,22,1),(11,'Café',4.00,25,0),(13,'Café',5.00,26,0),(14,'Kakao',1.00,27,1),(15,'Frischer Pfefferminztee',2.00,28,2),(16,'Kaffee',1.00,29,0),(17,'Eistee',1.99,12,2),(18,'Kakao aus der Region',5.99,19,1),(19,'Kaffae aus der Region',3.99,19,1),(20,'',0.00,30,0);
/*!40000 ALTER TABLE `Heissgetraenke` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-13 11:15:44
