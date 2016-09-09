DROP SCHEMA cms;
CREATE SCHEMA cms;

CREATE TABLE `cms`.`companytbl` (
  `companyid` INT NOT NULL AUTO_INCREMENT,
  `companyname` VARCHAR(45) NOT NULL,
  `active` INT(1) NULL,
  PRIMARY KEY (`companyid`));
  
ALTER TABLE `cms`.`companytbl` 
CHANGE COLUMN `active` `active` INT(1) NULL DEFAULT 1 ,
ADD UNIQUE INDEX `companyid_UNIQUE` (`companyid` ASC);


INSERT INTO cms.companytbl (companyname) VALUE ("Cubic");
INSERT INTO cms.companytbl (companyname) VALUE ("Breign");


CREATE TABLE `cms`.`classtbl` (
  `classid` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NOT NULL,
  `active` INT(1) NULL DEFAULT 1,
  PRIMARY KEY (`classid`),
  UNIQUE INDEX `classid_UNIQUE` (`classid` ASC));
  
INSERT INTO `cms`.`classtbl` (`description`) VALUES ('Basic Java');
INSERT INTO `cms`.`classtbl` (`description`) VALUES ('Advanced Java');
INSERT INTO `cms`.`classtbl` (`description`) VALUES ('Angular JS');
INSERT INTO `cms`.`classtbl` (`description`) VALUES ('.NET');
INSERT INTO `cms`.`classtbl` (`description`) VALUES ('VM Ware');

CREATE TABLE `cms`.`categorytypetbl` (
  `categorytypeid` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NOT NULL,
  `active` INT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`categorytypeid`),
  UNIQUE INDEX `categorytypeid_UNIQUE` (`categorytypeid` ASC));

INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('System Admin');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('CEO');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('COO');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('CTO');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('HR');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('VC');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('Instructor');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('Call Taker');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('Sales');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('Applier');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('Recruiter');

CREATE TABLE `cms`.`employeetbl` (
  `employeeid` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(20) NOT NULL,
  `lastname` VARCHAR(20) NOT NULL,
  `address` VARCHAR(45) NULL,
  `phone` VARCHAR(15) NULL,
  `email` VARCHAR(45) NOT NULL,
  `companyid` INT NULL,
  `active` INT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`employeeid`),
  UNIQUE INDEX `employeeid_UNIQUE` (`employeeid` ASC),
  INDEX `companyid_idx` (`companyid` ASC),
  CONSTRAINT `companyid`
    FOREIGN KEY (`companyid`)
    REFERENCES `cms`.`companytbl` (`companyid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
INSERT INTO `cms`.`employeetbl` (`firstname`, `lastname`, `address`, `phone`, `email`, `companyid`, `active`) VALUES ('Abhishek', 'KC', '4248 Club house Circle', '413-345-1499', 'kcabhish@gmail.com', '1', '1');
INSERT INTO `cms`.`employeetbl` (`firstname`, `lastname`, `phone`, `email`, `companyid`, `active`) VALUES ('Biplab', 'Wagle', '214-730-3703', 'bob@cubicit.net', '1', '1');
INSERT INTO `cms`.`employeetbl` (`firstname`, `lastname`, `phone`, `email`, `companyid`, `active`) VALUES ('Manan', 'Sapkota', '510-717-1286', 'manan@breign.net', '2', '1');

CREATE TABLE `cms`.`sessiontbl` (
  `sessionid` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `classid` INT NOT NULL,
  `startdate` DATE NULL,
  `enddate` DATE NULL,
  `starttime` VARCHAR(15) NULL,
  `endtime` VARCHAR(15) NULL,
  `capacity` INT(2) NULL,
  `active` INT(1) NOT NULL DEFAULT 1,
  `instructor` INT NOT NULL,
  PRIMARY KEY (`sessionid`),
  UNIQUE INDEX `sessionid_UNIQUE` (`sessionid` ASC),
  INDEX `classid_idx` (`classid` ASC),
  CONSTRAINT `classid`
    FOREIGN KEY (`classid`)
    REFERENCES `cms`.`classtbl` (`classid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

ALTER TABLE `cms`.`sessiontbl` 
ADD INDEX `instructor_idx` (`instructor` ASC);
ALTER TABLE `cms`.`sessiontbl` 
ADD CONSTRAINT `instructor`
  FOREIGN KEY (`instructor`)
  REFERENCES `cms`.`employeetbl` (`employeeid`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


CREATE TABLE `cms`.`logintbl` (
  `loginid` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `employeeid` INT NOT NULL,
  PRIMARY KEY (`loginid`),
  UNIQUE INDEX `loginid_UNIQUE` (`loginid` ASC),
  INDEX `employeeid_idx` (`employeeid` ASC),
  CONSTRAINT `employeeid`
    FOREIGN KEY (`employeeid`)
    REFERENCES `cms`.`employeetbl` (`employeeid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
ALTER TABLE `cms`.`logintbl` 
ADD UNIQUE INDEX `employeeid_UNIQUE` (`employeeid` ASC);


INSERT INTO `cms`.`logintbl` (`username`, `password`, `employeeid`) VALUES ('avsek007', '1234', '1');
INSERT INTO `cms`.`logintbl` (`username`, `password`, `employeeid`) VALUES ('bob007', '1234', '2');
INSERT INTO `cms`.`logintbl` (`username`, `password`, `employeeid`) VALUES ('manan', '1234', '3');


CREATE TABLE `cms`.`employeecategorytbl` (
  `employeeid` INT NOT NULL,
  `categoryid` INT NOT NULL,
  INDEX `employeeid_idx` (`employeeid` ASC),
  INDEX `categoryid_idx` (`categoryid` ASC),
  CONSTRAINT `empid`
    FOREIGN KEY (`employeeid`)
    REFERENCES `cms`.`employeetbl` (`employeeid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `categoryid`
    FOREIGN KEY (`categoryid`)
    REFERENCES `cms`.`categorytypetbl` (`categorytypeid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

INSERT INTO `cms`.`employeecategorytbl` (`employeeid`, `categoryid`) VALUES ('1', '1');
INSERT INTO `cms`.`employeecategorytbl` (`employeeid`, `categoryid`) VALUES ('1', '4');
INSERT INTO `cms`.`employeecategorytbl` (`employeeid`, `categoryid`) VALUES ('1', '9');
INSERT INTO `cms`.`employeecategorytbl` (`employeeid`, `categoryid`) VALUES ('2', '1');
INSERT INTO `cms`.`employeecategorytbl` (`employeeid`, `categoryid`) VALUES ('2', '6');
INSERT INTO `cms`.`employeecategorytbl` (`employeeid`, `categoryid`) VALUES ('1', '7');

CREATE TABLE `cms`.`educationtbl` (
  `educationid` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`educationid`),
  UNIQUE INDEX `educationid_UNIQUE` (`educationid` ASC));

INSERT INTO `cms`.`educationtbl` (`description`) VALUES ('High School');
INSERT INTO `cms`.`educationtbl` (`description`) VALUES ('Bachelors');
INSERT INTO `cms`.`educationtbl` (`description`) VALUES ('Masters');
INSERT INTO `cms`.`educationtbl` (`description`) VALUES ('Phd');


CREATE TABLE `cms`.`workstatustbl` (
  `statusid` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NOT NULL,
  `active` INT(1) NULL DEFAULT 1,
  PRIMARY KEY (`statusid`),
  UNIQUE INDEX `statusid_UNIQUE` (`statusid` ASC));

INSERT INTO `cms`.`workstatustbl` (`description`) VALUES ('US Citizen');
INSERT INTO `cms`.`workstatustbl` (`description`) VALUES ('Green Card');
INSERT INTO `cms`.`workstatustbl` (`description`) VALUES ('Work Permit');
INSERT INTO `cms`.`workstatustbl` (`description`) VALUES ('EAD(Green Card)');
INSERT INTO `cms`.`workstatustbl` (`description`) VALUES ('EAD(OPT)');
INSERT INTO `cms`.`workstatustbl` (`description`) VALUES ('EAD(CPT)');
