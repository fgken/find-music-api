<?php

class Model_Songs extends \Orm\Model
{
    protected static $_has_one = array(
        'artist' => array(
            'key_from' => 'artist_id',
            'model_to' => 'Model_Artists',
            'key_to'   => 'id',
            'cascade_save'   => false,
            'cascade_delete' => false,
         ),
    );
}

