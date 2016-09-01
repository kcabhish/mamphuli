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

CREATE TABLE `cms`.`employeetbl` (
  `employeeid` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(20) NOT NULL,
  `lastname` VARCHAR(20) NOT NULL,
  `phone` VARCHAR(15) NULL,
  `email` VARCHAR(45) NOT NULL,
  `companyid` INT NOT NULL,
  `active` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`employeeid`),
  UNIQUE INDEX `employeeid_UNIQUE` (`employeeid` ASC),
  INDEX `companyid_idx` (`companyid` ASC),
  CONSTRAINT `companyid`
    FOREIGN KEY (`companyid`)
    REFERENCES `cms`.`companytbl` (`companyid`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
	
INSERT INTO cms.employeetbl (firstname,lastname,phone,email,companyid) VALUE ("Abhishek","KC","123-456-1234","kcabhish@gmail.com","1");
INSERT INTO cms.employeetbl (firstname,lastname,phone,email,companyid) VALUE ("Biplab","Wagle","123-456-1234","biplabwagle@gmail.com","1");

CREATE TABLE `cms`.`categorytypetbl` (
  `categorytypeid` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NOT NULL,
  `active` INT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`categorytypeid`),
  UNIQUE INDEX `categorytypeid_UNIQUE` (`categorytypeid` ASC));
  
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('CEO');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('CTO');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('VC');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('HR');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('Instructor');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('Call Taker');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('Sales');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('Applier');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('Recruiter');
INSERT INTO `cms`.`categorytypetbl` (`description`) VALUES ('COO');

CREATE TABLE `cms`.`employeecategorytbl` (
  `employeecategoryid` INT NOT NULL AUTO_INCREMENT,
  `employeeid` INT NOT NULL,
  `categorytypeid` INT NOT NULL,
  PRIMARY KEY (`employeecategoryid`),
  UNIQUE INDEX `employeecategoryid_UNIQUE` (`employeecategoryid` ASC),
  INDEX `employeeid_idx` (`employeeid` ASC),
  INDEX `categorytypeid_idx` (`categorytypeid` ASC),
  CONSTRAINT `employeeid`
    FOREIGN KEY (`employeeid`)
    REFERENCES `cms`.`employeetbl` (`employeeid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `categorytypeid`
    FOREIGN KEY (`categorytypeid`)
    REFERENCES `cms`.`categorytypetbl` (`categorytypeid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
	
INSERT INTO `cms`.`employeecategorytbl` (`employeeid`, `categorytypeid`) VALUES ('1', '2');
INSERT INTO `cms`.`employeecategorytbl` (`employeeid`, `categorytypeid`) VALUES ('1', '5');
INSERT INTO `cms`.`employeecategorytbl` (`employeeid`, `categorytypeid`) VALUES ('1', '6');
INSERT INTO `cms`.`employeecategorytbl` (`employeeid`, `categorytypeid`) VALUES ('2', '2');
INSERT INTO `cms`.`employeecategorytbl` (`employeeid`, `categorytypeid`) VALUES ('2', '3');


