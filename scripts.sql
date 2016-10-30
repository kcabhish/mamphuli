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


CREATE TABLE `cms`.`classtbl` (
  `classid` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NOT NULL,
  `active` INT(1) NULL DEFAULT 1,
  PRIMARY KEY (`classid`),
  UNIQUE INDEX `classid_UNIQUE` (`classid` ASC));

CREATE TABLE `cms`.`categorytypetbl` (
  `categorytypeid` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NOT NULL,
  `active` INT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`categorytypeid`),
  UNIQUE INDEX `categorytypeid_UNIQUE` (`categorytypeid` ASC));


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



CREATE TABLE `cms`.`educationtbl` (
  `educationid` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`educationid`),
  UNIQUE INDEX `educationid_UNIQUE` (`educationid` ASC));



CREATE TABLE `cms`.`workstatustbl` (
  `statusid` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NOT NULL,
  `active` INT(1) NULL DEFAULT 1,
  PRIMARY KEY (`statusid`),
  UNIQUE INDEX `statusid_UNIQUE` (`statusid` ASC));


CREATE TABLE `cms`.`consultantstatustbl` (
  `statusid` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`statusid`),
  UNIQUE INDEX `statusid_UNIQUE` (`statusid` ASC));


CREATE TABLE `cms`.`consultantstbl` (
  `consultantsid` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `middlename` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(15) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `address` VARCHAR(80) NULL,
  `city` VARCHAR(20) NULL,
  `zip` VARCHAR(10) NULL,
  `dob` DATE NULL,
  `ssn` VARCHAR(11) NULL,
  `workstatus` INT NULL,
  `licensenumber` VARCHAR(45) NULL,
  `licensestate` VARCHAR(45) NULL,
  `recruiter` INT NULL,
  `skypeid` VARCHAR(45) NULL,
  `consultantstatus` INT NULL,
  `active` INT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`consultantsid`),
  UNIQUE INDEX `consultantsid_UNIQUE` (`consultantsid` ASC),
  INDEX `workstatus_idx` (`workstatus` ASC),
  INDEX `recruiter_idx` (`recruiter` ASC),
  INDEX `consultantstatusid_idx` (`consultantstatus` ASC),
  CONSTRAINT `workstatus`
    FOREIGN KEY (`workstatus`)
    REFERENCES `cms`.`workstatustbl` (`statusid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `recruiter`
    FOREIGN KEY (`recruiter`)
    REFERENCES `cms`.`employeetbl` (`employeeid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `consultantstatusid`
    FOREIGN KEY (`consultantstatus`)
    REFERENCES `cms`.`consultantstatustbl` (`statusid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);



CREATE TABLE `cms`.`consultanteducationtbl` (
  `consultantid` INT NOT NULL,
  `educationid` INT NOT NULL,
  `schoolname` VARCHAR(45) NULL,
  `startdate` DATE NULL,
  `enddate` DATE NULL,
  `major` VARCHAR(45) NULL,
  INDEX `consultantid_idx` (`consultantid` ASC),
  INDEX `educationid_idx` (`educationid` ASC),
  CONSTRAINT `consultantid`
    FOREIGN KEY (`consultantid`)
    REFERENCES `cms`.`consultantstbl` (`consultantsid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `educationid`
    FOREIGN KEY (`educationid`)
    REFERENCES `cms`.`educationtbl` (`educationid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `cms`.`classlisttbl` (
  `sessionid` INT NOT NULL,
  `consultantid` INT NOT NULL,
  INDEX `sessionid_idx` (`sessionid` ASC),
  INDEX `consultantid_idx` (`consultantid` ASC),
  CONSTRAINT `sessionid`
    FOREIGN KEY (`sessionid`)
    REFERENCES `cms`.`sessiontbl` (`sessionid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `consid`
    FOREIGN KEY (`consultantid`)
    REFERENCES `cms`.`consultantstbl` (`consultantsid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE `cms`.`attendancetbl` (
  `sessionid` INT NOT NULL,
  `consultantid` INT NOT NULL,
  `date` DATE NOT NULL,
  INDEX `sessionid_idx` (`sessionid` ASC),
  INDEX `consultantid_idx` (`consultantid` ASC),
  CONSTRAINT `sessidatt`
    FOREIGN KEY (`sessionid`)
    REFERENCES `cms`.`sessiontbl` (`sessionid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `considatt`
    FOREIGN KEY (`consultantid`)
    REFERENCES `cms`.`consultantstbl` (`consultantsid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `cms`.`marketingtbl` (
  `marketingid` INT NOT NULL AUTO_INCREMENT,
  `consultantid` INT NOT NULL,
  `phone` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `skype` VARCHAR(45) NULL,
  `skypepassword` VARCHAR(45) NULL,
  `vc` INT NULL,
  `comments` VARCHAR(45) NULL,
  `active` VARCHAR(45) NULL,
  PRIMARY KEY (`marketingid`),
  UNIQUE INDEX `marketingid_UNIQUE` (`marketingid` ASC),
  INDEX `vcid_idx` (`vc` ASC),
  INDEX `conid_idx` (`consultantid` ASC),
  CONSTRAINT `vcid`
    FOREIGN KEY (`vc`)
    REFERENCES `cms`.`employeetbl` (`employeeid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `conid`
    FOREIGN KEY (`consultantid`)
    REFERENCES `cms`.`consultantstbl` (`consultantsid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


#Inserts below here

INSERT INTO cms.companytbl (companyname) VALUE ("Cubic");
INSERT INTO cms.companytbl (companyname) VALUE ("Breign");


INSERT INTO `cms`.`classtbl` (`description`) VALUES ('Basic Java');
INSERT INTO `cms`.`classtbl` (`description`) VALUES ('Advanced Java');
INSERT INTO `cms`.`classtbl` (`description`) VALUES ('Angular JS');
INSERT INTO `cms`.`classtbl` (`description`) VALUES ('.NET');
INSERT INTO `cms`.`classtbl` (`description`) VALUES ('VM Ware');

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

INSERT INTO `cms`.`employeetbl` (`firstname`, `lastname`, `address`, `phone`, `email`, `companyid`, `active`) VALUES ('Abhishek', 'KC', '4248 Club house Circle', '413-345-1499', 'ui@cubicit.net', '1', '1');
INSERT INTO `cms`.`employeetbl` (`firstname`, `lastname`, `phone`, `email`, `companyid`, `active`) VALUES ('Biplab', 'Wagle', '214-730-3703', 'bob@cubicit.net', '1', '1');
INSERT INTO `cms`.`employeetbl` (`firstname`, `lastname`, `phone`, `email`, `companyid`, `active`) VALUES ('Ramitha', 'Khadka', '214-730-3703', 'ramita007@gmail.com', '1', '1');
INSERT INTO `cms`.`employeetbl` (`firstname`, `lastname`, `phone`, `email`, `companyid`, `active`) VALUES ('Subash', 'Khadka', '214-499-4294', 'sbshkhadka@gmail.com', '1', '1');
INSERT INTO `cms`.`employeetbl` (`firstname`, `lastname`, `phone`, `email`, `companyid`, `active`) VALUES ('Nabin', 'Koirala', '682-433-9680', 'koiralabaje@hotmail.com', '1', '1');
INSERT INTO `cms`.`employeetbl` (`firstname`, `lastname`, `phone`, `email`, `companyid`, `active`) VALUES ('Azeem', 'Marediya', '469-412-1985', 'azeem@cubicit.net', '1', '1');


INSERT INTO `cms`.`sessiontbl` (`name`, `classid`, `startdate`, `enddate`, `starttime`, `endtime`, `capacity`, `active`, `instructor`) VALUES ('UIKC082016', '3', '2016-08-02', '2016-09-15', '10am', '12pm', '20', '1', '1');
INSERT INTO `cms`.`sessiontbl` (`name`, `classid`, `startdate`, `enddate`, `starttime`, `endtime`, `capacity`, `active`, `instructor`) VALUES ('JAVAKC082016', '2', '2016-08-01', '2016-09-15', '5pm', '7pm', '20', '1', '2');

INSERT INTO `cms`.`logintbl` (`username`, `password`, `employeeid`) VALUES ('avsek007', '1234', '1');
INSERT INTO `cms`.`logintbl` (`username`, `password`, `employeeid`) VALUES ('bob007', '1234', '2');
INSERT INTO `cms`.`logintbl` (`username`, `password`, `employeeid`) VALUES ('manan', '1234', '3');

INSERT INTO `cms`.`employeecategorytbl` (`employeeid`, `categoryid`) VALUES ('1', '1');
INSERT INTO `cms`.`employeecategorytbl` (`employeeid`, `categoryid`) VALUES ('1', '4');
INSERT INTO `cms`.`employeecategorytbl` (`employeeid`, `categoryid`) VALUES ('1', '9');
INSERT INTO `cms`.`employeecategorytbl` (`employeeid`, `categoryid`) VALUES ('2', '1');
INSERT INTO `cms`.`employeecategorytbl` (`employeeid`, `categoryid`) VALUES ('2', '6');
INSERT INTO `cms`.`employeecategorytbl` (`employeeid`, `categoryid`) VALUES ('1', '7');


INSERT INTO `cms`.`educationtbl` (`description`) VALUES ('High School');
INSERT INTO `cms`.`educationtbl` (`description`) VALUES ('Bachelors');
INSERT INTO `cms`.`educationtbl` (`description`) VALUES ('Masters');
INSERT INTO `cms`.`educationtbl` (`description`) VALUES ('Phd');


INSERT INTO `cms`.`workstatustbl` (`description`) VALUES ('US Citizen');
INSERT INTO `cms`.`workstatustbl` (`description`) VALUES ('Green Card');
INSERT INTO `cms`.`workstatustbl` (`description`) VALUES ('Work Permit');
INSERT INTO `cms`.`workstatustbl` (`description`) VALUES ('EAD(Green Card)');
INSERT INTO `cms`.`workstatustbl` (`description`) VALUES ('EAD(OPT)');
INSERT INTO `cms`.`workstatustbl` (`description`) VALUES ('EAD(CPT)');

INSERT INTO `cms`.`consultantstatustbl` (`description`) VALUES ('Not Recruited');
INSERT INTO `cms`.`consultantstatustbl` (`description`) VALUES ('Recruited');
INSERT INTO `cms`.`consultantstatustbl` (`description`) VALUES ('Marketing');
INSERT INTO `cms`.`consultantstatustbl` (`description`) VALUES ('Placed');
INSERT INTO `cms`.`consultantstatustbl` (`description`) VALUES ('Benched');

INSERT INTO `cms`.`consultantstbl` (`firstname`, `middlename`, `lastname`, `phone`, `email`, `address`, `city`, `zip`, `dob`, `ssn`, `workstatus`, `licensenumber`, `licensestate`, `recruiter`, `skypeid`, `consultantstatus`, `active`) VALUES ('Rubin', '', 'Buddhacharya', '123-456-7891', 'rubin@gmail.com', '1234', 'Irving', '56456', '2012-12-12', '123-32-3214', '3', '#asdf1234', 'ND', '3', 'rubin007', '2', '1');

INSERT INTO `cms`.`consultantstbl` (`firstname`, `lastname`, `phone`, `email`, `address`, `city`, `zip`, `dob`, `ssn`, `workstatus`, `licensenumber`, `licensestate`, `recruiter`, `skypeid`, `consultantstatus`, `active`) VALUES ('Anish', 'KC', '123-123-1234', 'anish.kc@gmail.com', '1234', 'Irving', '12345', '1985-12-29', '123-12-1233', '4', '#asdfasdf', 'MD', '3', 'anish007', '3', '1');
INSERT INTO `cms`.`consultantstbl` (`firstname`, `lastname`, `phone`, `email`, `address`, `city`, `zip`, `dob`, `ssn`, `workstatus`, `licensenumber`, `licensestate`, `recruiter`, `skypeid`, `consultantstatus`, `active`) VALUES ('Drona', 'Baral', '123-123-1233', 'drona@gmail.com', '1234', 'Dallas', '54678', '1982-12-31', '123-34-1234', '1', '#asdffdasf', 'MN', '3', 'drona123', '1', '1');
