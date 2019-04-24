CREATE DATABASE IF NOT EXISTS `hit_the_offers` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE 'hit_the_offers';

/* ability table  */
CREATE TABLE IF NOT EXISTS `t_ability` (
    `abi_id` INT(11) NOT NULL AUTO_INCREMENT,
    `abi_name` VARCHAR(55) NOT NULL,
    `abi_priority` INT(3) NOT NULL,
    `abi_description` VARCHAR(3) NOT NULL,
    PRIMARY KEY (`abi_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/* card table */
CREATE TABLE IF NOT EXISTS `t_cardmodel` (
    `cmo_id` INT(11) NOT NULL AUTO_INCREMENT,
    `cmo_name` VARCHAR(75) NOT NULL,
    `cmo_attack` INT(3),
    `cmo_health` VARCHAR(3),
    `cmo_mana` VARCHAR(2),
    `cmo_description` TEXT (2040) NOT NULL,
    `cmo_amount` INT(2) NOT NULL,
    PRIMARY KEY (`cmo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/* rel card-ability */
CREATE TABLE IF NOT EXISTS `r_cmo_abi` (
    `cmo_id_fk` INT(11) NOT NULL,
    `abi_id_fk` INT(11) NOT NULL,
    PRIMARY KEY (`cmo_id_fk`, `abi_id_fk`),
    KEY ( `cmo_id_fk`),
    KEY ( `abi_id_fk`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/* category table */
CREATE TABLE IF NOT EXISTS `t_category` (
    `cat_id` INT(11) NOT NULL AUTO_INCREMENT,
    `cat_name` VARCHAR(50) NOT NULL,
    `cat_description` TEXT (2040) NOT NULL,
    PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/* rel card-category */
CREATE TABLE IF NOT EXISTS `r_cmo_cat` (
    `cmo_id_fk` INT(11) NOT NULL,
    `cat_id_fk` INT(11) NOT NULL,
    PRIMARY KEY (`cmo_id_fk`, `cat_id_fk`),
    KEY ( `cmo_id_fk`),
    KEY ( `cat_id_fk`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Creation table camps
-- clée primaire : cam_id
-- aucune clée étrangaire

CREATE TABLE IF NOT EXISTS `t_camps` (
  `cam_id` int(11) NOT NULL,
  `cam_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Creation table entitée deck model
-- clée primaire : dmo_id
-- clée étrangaire : cam_id

CREATE TABLE IF NOT EXISTS `t_deckmodel` (
  `dmo_id` int(11) NOT NULL,
  `dmo_name` varchar(50) NOT NULL,
  `dmo_camps_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Création table relation entre user et deck model
-- deck model id et user id qui forment toute deux une clée primaire

CREATE TABLE IF NOT EXISTS `r_use_dmo` (
  `dmo_id_fk` int(11) NOT NULL,
  `use_id_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Création table relation entre camps et card model
-- camps id et card model id qui forment toute deux une clée primaire

CREATE TABLE IF NOT EXISTS `r_cam_cmo` (
  `cam_id_fk` int(11) NOT NULL,
  `cmo_id_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Création table relation entre deck model et card model
-- deck model id et card model id qui forment toute deux une clée primaire

CREATE TABLE IF NOT EXISTS `r_dmo_cmo` (
  `dmo_id_fk` int(11) NOT NULL,
  `cmo_id_fk` int(11) NOT NULL,
  `rdc_amount` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Structure de la table `t_authorization`
 
CREATE TABLE IF NOT EXISTS `t_authorization`(
    `aut_id` INT(11) NOT NULL,
    `aut_libel` VARCHAR(50) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Structure de la table `t_authorization`

CREATE TABLE IF NOT EXISTS  `t_role`(
    `rol_id` INT(11) NOT NULL,
    `rol_power` INT(3) NOT NULL,
    `rol_label` VARCHAR(50) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Structure de la table `r_rol_aut`

CREATE TABLE IF NOT EXISTS `r_rol_aut`(
    `rol_id_fk` INT(11) NOT NULL,
    `aut_id_fk` INT(11) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Structure de la table `t_authorization`

CREATE TABLE IF NOT EXISTS `t_user`(
    `use_id` INT(11) NOT NULL,
    `use_lastname` VARCHAR(50) NOT NULL,
    `use_firstname` VARCHAR(50) NOT NULL,
    `use_password` VARCHAR(255) NOT NULL,
    `use_username` VARCHAR(50) NOT NULL,
    `use_email` VARCHAR(255) NOT NULL,
    `use_country` VARCHAR(100) NOT NULL,
    `use_role_fk`  INT(11) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Structure de la table `t_game`

CREATE TABLE IF NOT EXISTS `t_game` (
    `gam_id` INT(11) NOT NULL,
    `gam_key` INT(11) NOT NULL,
    `gam_enemy` INT(11) NOT NULL,
    `gam_hero_hp` INT(11) NOT NULL,
    `gam_deck_clone_fk` INT(11) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Structure de la table `r_use_gam`

CREATE TABLE IF NOT EXISTS `r_use_gam`(
    `use_id_fk` INT(11) NOT NULL,
    `gam_id_fk` INT(11) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- CREATION TABLE GAME  

CREATE TABLE IF NOT EXISTS `t_move` (
    `mov_id` INT(11) NOT NULL AUTO_INCREMENT,
    `mov_action` VARCHAR (50) NOT NULL,
    `mov_timestamp` DATETIME NOT NULL,
    `mov_nbturn` INT(11) NOT NULL,
    `mov_game_fk` INT(11) NOT NULL,
    `mov_card_fk` INT(11) NOT NULL,
    PRIMARY KEY (`mov_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- CREATION TABLE DECK_CLONE 

CREATE TABLE IF NOT EXISTS `t_deckclone` (
    `dcl_id` INT(11) NOT NULL AUTO_INCREMENT,
    `dcl_deck_fk` INT(11) NOT NULL,
    PRIMARY KEY (`dcl_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- CREATION TABLE CARD_CLONE

CREATE TABLE IF NOT EXISTS `t_cardclone` (
    `ccl_id` INT(11) NOT NULL AUTO_INCREMENT,
    `ccl_attack` INT(3) NOT NULL,
    `ccl_health`INT(3) NOT NULL,
    `ccl_state` INT(11) NOT NULL,
    `ccl_deckclone_fk` INT(11) NOT NULL,
    `ccl_cardmodel_fk` INT(11) NOT NULL,
    PRIMARY KEY (`ccl_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


--- A mettre apres la création des tables

ALTER TABLE `t_camps`
  ADD PRIMARY KEY (`cam_id`);

ALTER TABLE `t_deckmodel`
  ADD PRIMARY KEY (`dmo_id`),
  ADD KEY `dmo_camps_fk` (`dmo_camps_fk`);

ALTER TABLE `r_use_dmo`
  ADD PRIMARY KEY (`use_id_fk`, `dmo_id_fk`);

ALTER TABLE `r_cam_cmo`
  ADD PRIMARY KEY (`cam_id_fk`, `cmo_id_fk`);

ALTER TABLE `r_dmo_cmo`
  ADD PRIMARY KEY (`dmo_id_fk`, `cmo_id_fk`);

ALTER TABLE `t_camps`
  MODIFY `cam_id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `t_deckmodel`
  MODIFY `dmo_id` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `t_role`
    ADD PRIMARY KEY (`rol_id`);

ALTER TABLE `t_role`
   MODIFY `rol_id` INT(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `t_user`
    ADD PRIMARY KEY (`use_id`),
    ADD KEY `use_role_fk`(`use_role_fk`),
    ADD CONSTRAINT `constraint_user_role` FOREIGN KEY (`use_role_fk`) REFERENCES `t_role` (`rol_id`) ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE `t_user`
   MODIFY `use_id` INT(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `t_authorization`
    ADD PRIMARY KEY (`aut_id`);

ALTER TABLE `t_authorization`
   MODIFY `aut_id` INT(11) NOT NULL AUTO_INCREMENT;



ALTER TABLE `t_deckmodel`
  ADD CONSTRAINT `constraint_deckmodel_camps` FOREIGN KEY (`dmo_camps_fk`) REFERENCES `t_camps` (`cam_id`) ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE `r_use_dmo`
  ADD CONSTRAINT `constraint_user_deckmodel` FOREIGN KEY (`use_id_fk`) REFERENCES `t_user` (`use_id`) ON UPDATE CASCADE ON DELETE RESTRICT, 
  ADD CONSTRAINT `constraint_deckmodel_user` FOREIGN KEY (`dmo_id_fk`) REFERENCES `t_deckmodel` (`dmo_id`) ON UPDATE CASCADE ON DELETE RESTRICT; 

ALTER TABLE `r_cam_cmo`
  ADD CONSTRAINT `constraint_camps_cardmodel` FOREIGN KEY (`cam_id_fk`) REFERENCES `t_camps` (`cam_id`) ON UPDATE CASCADE ON DELETE RESTRICT, 
  ADD CONSTRAINT `constraint_cardmodel_camps` FOREIGN KEY (`cmo_id_fk`) REFERENCES `t_cardmodel` (`cmo_id`) ON UPDATE CASCADE ON DELETE RESTRICT; 

ALTER TABLE `r_dmo_cmo`
  ADD CONSTRAINT `constraint_deckmodel_cardmodel` FOREIGN KEY (`dmo_id_fk`) REFERENCES `t_deckmodel` (`dmo_id`) ON UPDATE CASCADE ON DELETE RESTRICT, 
  ADD CONSTRAINT `constraint_cardmodel_deckmodel` FOREIGN KEY (`cmo_id_fk`) REFERENCES `t_cardmodel` (`cmo_id`) ON UPDATE CASCADE ON DELETE RESTRICT; 

ALTER TABLE `r_cmo_abi`
  ADD CONSTRAINT `constraint_cardmodel_ability` FOREIGN KEY (`cmo_id_fk`) REFERENCES `t_cardmodel` (`cmo_id`) ON UPDATE CASCADE ON DELETE RESTRICT,
  ADD CONSTRAINT `constraint_ability_cardmodel` FOREIGN KEY (`abi_id_fk`) REFERENCES `t_ability` (`abi_id`) ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE `r_cmo_cat`
  ADD CONSTRAINT `constraint_cardmodel_category` FOREIGN KEY (`cmo_id_fk`) REFERENCES `t_cardmodel` (`cmo_id`) ON UPDATE CASCADE ON DELETE RESTRICT,
  ADD CONSTRAINT `constraint_category_cardmodel` FOREIGN KEY (`cat_id_fk`) REFERENCES `t_category` (`cat_id`) ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE `r_rol_aut`
    ADD KEY `rol_id_fk` (`rol_id_fk`),
    ADD KEY `aut_id_fk` (`aut_id_fk`),
    ADD CONSTRAINT `constraint_role_authorization` FOREIGN KEY (`rol_id_fk`) REFERENCES `t_role` (`rol_id`) ON UPDATE CASCADE ON DELETE RESTRICT,
    ADD CONSTRAINT `constraint_authorization_role` FOREIGN KEY (`aut_id_fk`) REFERENCES `t_authorization` (`aut_id`) ON UPDATE CASCADE ON DELETE RESTRICT;


ALTER TABLE `t_game`
    ADD PRIMARY KEY (`gam_id`), 
    ADD KEY `gam_deck_clone_fk`(`gam_deck_clone_fk`),
    ADD CONSTRAINT `constraint_game_deck_clone` FOREIGN KEY (`gam_deck_clone_fk`) REFERENCES `t_deckclone` (`dcl_id`) ON UPDATE CASCADE ON DELETE RESTRICT;

ALTER TABLE `t_game`
   MODIFY `gam_id` INT(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `r_use_gam`
    ADD KEY `use_id_fk`(`use_id_fk`),
    ADD KEY `gam_id_fk`(`gam_id_fk`),
    ADD CONSTRAINT `constraint_user_game` FOREIGN KEY (`use_id_fk`) REFERENCES `t_user` (`use_id`) ON UPDATE CASCADE ON DELETE RESTRICT,
    ADD CONSTRAINT `constraint_game_user` FOREIGN KEY (`gam_id_fk`) REFERENCES `t_game` (`gam_id`) ON UPDATE CASCADE ON DELETE RESTRICT;

    -- Rajout a la table MOVE
ALTER TABLE `t_move`
 ADD KEY `mov_game_fk` (`mov_game_fk`),
 ADD KEY `mov_card_fk` (`mov_card_fk`),
 ADD CONSTRAINT `constraint_move_game` FOREIGN KEY (`mov_game_fk`) REFERENCES `t_game` (`gam_id`) ON UPDATE CASCADE ON DELETE RESTRICT,
 ADD CONSTRAINT `constraint_move_cardclone` FOREIGN KEY (`mov_game_fk`) REFERENCES `t_cardclone` (`ccl_id`) ON UPDATE CASCADE ON DELETE RESTRICT;


-- Rajout a la table DECKCLONE
ALTER TABLE  `t_deckclone`
 ADD KEY `dcl_deck_fk` (`dcl_deck_fk`),
 ADD CONSTRAINT `constraint_deckclone_deckmodel` FOREIGN KEY (`dcl_deck_fk`) REFERENCES `t_deckmodel` (`dmo_id`) ON UPDATE CASCADE ON DELETE RESTRICT;

-- Rajout a la table CARDCLONE
ALTER TABLE `t_cardclone`
 ADD KEY `ccl_deckclone_fk` (`ccl_deckclone_fk`),
 ADD KEY `ccl_cardmodel_fk` (`ccl_cardmodel_fk`),
 ADD CONSTRAINT `constraint_cardclone_card` FOREIGN KEY (`ccl_cardmodel_fk`) REFERENCES `t_cardmodel` (`cmo_id`) ON UPDATE CASCADE ON DELETE RESTRICT,
 ADD CONSTRAINT `constraint_cardclone_deckclone` FOREIGN KEY (`ccl_deckclone_fk`) REFERENCES `t_deckclone` (`dcl_id`) ON UPDATE CASCADE ON DELETE RESTRICT;



-- JEUX DE DONNEES 
INSERT INTO `t_cardmodel` ( `cmo_id`,`cmo_name`,`cmo_attack`,`cmo_health`,`cmo_mana`,`cmo_description`,`cmo_amount`) VALUES
(1, 'placeholder', NULL, 20, NULL, 'placeholder', 1 ),
(2, 'placeholder', 9, 9, 9, 'placeholder', 1 ),
(3, 'placeholder', 1, NULL, 1, 'placeholder', 3 ),
(4, 'placeholder', 3, NULL, 4, 'placeholder', 3 ),
(5, 'placeholder', 5, NULL, 6, 'placeholder', 3 ),
(6, 'placeholder', 1, 3, 1, 'placeholder', 4 ),
(7, 'placeholder', 3, 6, 3, 'placeholder', 4 ),
(8, 'placeholder', 1, 1, 2, 'placeholder', 12 ),
(9, 'placeholder', 2, 3, 2, 'placeholder', 12 ),
(10, 'placeholder', 3, 3, 5, 'placeholder', 12 ),
(11, 'placeholder', 4, 4, 2, 'placeholder', 12 ),
(12, 'placeholder', 5, 5, 7, 'placeholder', 12 ),
(13, 'placeholder', 7, 6, 8, 'placeholder', 12 ),
(14, 'placeholder', NULL, 20, NULL, 'placeholder', 1 ),
(15, 'placeholder', 9, 9, 9, 'placeholder', 1 ),
(16, 'placeholder', 1, NULL, 2, 'placeholder', 3 ),
(17, 'placeholder', 3, NULL, 5, 'placeholder', 3 ),
(18, 'placeholder', 5, NULL, 7, 'placeholder', 3 ),
(19, 'placeholder', 1, 3, 1, 'placeholder', 4 ),
(20, 'placeholder', 3, 6, 3, 'placeholder', 4 ),
(21, 'placeholder', 1, 1, 1, 'placeholder', 12 ),
(22, 'placeholder', 2, 3, 2, 'placeholder', 12 ),
(23, 'placeholder', 3, 3, 4, 'placeholder', 12 ),
(24, 'placeholder', 4, 4, 5, 'placeholder', 12 ),
(25, 'placeholder', 5, 5, 6, 'placeholder', 12 ),
(26, 'placeholder', 7, 6, 8, 'placeholder', 12 );

INSERT INTO `t_role` (`rol_id`, `rol_power`, `rol_label`) VALUES     
(1, 100, "superadmin"),     
(2, 75, "admin"),     
(3, 10, "user"),     
(4, 1, "guest");

INSERT INTO `t_category` (`cat_name`, `cat_description`) VALUES
('hero', 'user presenting his camp'),
('special', 'the only and the strongest card in the deck'),
('curse', 'a card without health points and it is active once it is on the tray'),
('shield', 'a card that attract all the attacks'),
('creature', 'basic card with health points');

INSERT INTO `t_user`(`use_id`,`use_lastname`, `use_firstname`, `use_password`,  `use_username`, `use_email`, `use_country`, `use_role_fk`) VALUES
(1, '3W', 'Objectif', 'user1@pwd', 'User1', 'admin@stone_quest.fr', 'France', 1),
(2, '3W', 'Objectif', 'user2@pwd', 'User2', 'admin@stone_quest.misere', 'Congo', 1);