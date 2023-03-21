-- inquery.GuestInfo definition

CREATE TABLE `GuestInfo` (
  `guid` mediumint NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `PhNum` varchar(100) NOT NULL,
  `Org_Name` varchar(100) DEFAULT NULL,
  `NRC` varchar(100) NOT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `City` varchar(100) DEFAULT NULL,
  `Country` varchar(100) DEFAULT NULL,
  `Visited_Reason` varchar(255) NOT NULL,
  PRIMARY KEY (`guid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



--နောက်မှထည့်မယ်
  `images` varchar(100) DEFAULT NULL,
  `visited_date` varchar(100) NOT NULL,
  `visited_time` varchar(100) DEFAULT NULL,