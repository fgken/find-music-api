<?php

namespace Fuel\Migrations;

class Create_artists
{
	public function up()
	{
		\DBUtil::create_table('artists', array(
			'id' => array('constraint' => 11, 'type' => 'int', 'auto_increment' => true, 'unsigned' => true),
			'name' => array('constraint' => 64, 'type' => 'varchar'),

		), array('id'));
	}

	public function down()
	{
		\DBUtil::drop_table('artists');
	}
}