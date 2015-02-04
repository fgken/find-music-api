<?php defined('COREPATH') or exit('No direct script access allowed'); ?>

ERROR - 2015-02-04 10:06:08 --> Fatal Error - Class 'PDO' not found in /var/www/find-music-api/fuel/core/classes/database/pdo/connection.php on line 81
ERROR - 2015-02-04 10:07:30 --> Fatal Error - Class 'PDO' not found in /var/www/find-music-api/fuel/core/classes/database/pdo/connection.php on line 81
ERROR - 2015-02-04 14:12:03 --> Error - Related model not found by Has_One relation "artist": Model_Artist in /var/www/find-music-api/fuel/packages/orm/classes/hasone.php on line 41
ERROR - 2015-02-04 14:16:12 --> Error - SQLSTATE[42S22]: Column not found: 1054 Unknown column 'artist.name' in 'where clause' with query: "SELECT `t0`.`id` AS `t0_c0`, `t0`.`name` AS `t0_c1`, `t0`.`artist_id` AS `t0_c2`, `t0`.`fl` AS `t0_c3`, `t0`.`ob` AS `t0_c4`, `t0`.`cl` AS `t0_c5`, `t0`.`fg` AS `t0_c6`, `t0`.`tp` AS `t0_c7`, `t0`.`tb` AS `t0_c8`, `t0`.`hr` AS `t0_c9`, `t0`.`tu` AS `t0_c10`, `t0`.`timp` AS `t0_c11`, `t0`.`others` AS `t0_c12` FROM `songs` AS `t0` WHERE `t0`.`fl` = '3' AND `artist`.`name` LIKE '%bldb%'" in /var/www/find-music-api/fuel/core/classes/database/pdo/connection.php on line 237
