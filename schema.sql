CREATE DATABASE fantasy_db;
USE fantasy_db;

CREATE TABLE quarterbacks
(
	id int NOT NULL AUTO_INCREMENT,
	player varchar(255),
	team varchar(255),
	comp varchar(255),
	att varchar(255),
	yards varchar(255),
	tds varchar(255),
	interceptions varchar(255),
	PRIMARY KEY (id)
);


CREATE TABLE runningbacks
(
	id int NOT NULL AUTO_INCREMENT,
	player varchar(255),
	team varchar(255),
	rushydsgm varchar(255),
	attgm varchar(255),
	rushatt varchar(255),
	rushyds varchar(255),
	rushtds varchar(255),
    rec varchar(255),
    recyds varchar(255),
    rectds varchar(255),
	PRIMARY KEY (id)
);


CREATE TABLE widereceivers
(
	id int NOT NULL AUTO_INCREMENT,
	player varchar(255),
	team varchar(255),
	recydsgm varchar(255),
	rectgtgm varchar(255),
	recgm varchar(255),
	recyds varchar(255),
	rectds varchar(255),
    games varchar(255),
	PRIMARY KEY (id)
);