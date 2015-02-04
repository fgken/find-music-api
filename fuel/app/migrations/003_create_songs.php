<?php

namespace Fuel\Migrations;

class Create_songs
{
	public function up()
	{
		\DBUtil::create_table('songs', array(
			'id' => array('constraint' => 11, 'type' => 'int', 'auto_increment' => true, 'unsigned' => true),
			'name' => array('constraint' => 128, 'type' => 'varchar'),
			'artist_id' => array('constraint' => 11, 'type' => 'int'),
			'fl' => array('constraint' => 11, 'type' => 'int'),
			'ob' => array('constraint' => 11, 'type' => 'int'),
			'cl' => array('constraint' => 11, 'type' => 'int'),
			'fg' => array('constraint' => 11, 'type' => 'int'),
			'tp' => array('constraint' => 11, 'type' => 'int'),
			'tb' => array('constraint' => 11, 'type' => 'int'),
			'hr' => array('constraint' => 11, 'type' => 'int'),
			'tu' => array('constraint' => 11, 'type' => 'int'),
			'timp' => array('constraint' => 11, 'type' => 'int'),
			'others' => array('type' => 'text'),

		), array('id'));
	}

	public function down()
	{
		\DBUtil::drop_table('songs');
	}
}