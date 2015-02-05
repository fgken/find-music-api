<?php

namespace Fuel\Migrations;

class Add_status_to_songs
{
	public function up()
	{
		\DBUtil::add_fields('songs', array(
			'status' => array('constraint' => 11, 'type' => 'int'),

		));
	}

	public function down()
	{
		\DBUtil::drop_fields('songs', array(
			'status'

		));
	}
}