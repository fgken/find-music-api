<?php

class Model_Artists extends \Orm\Model
{
    protected static $_belongs_to = array(
        'song' => array(
            'key_from' => 'id',
            'model_to' => 'Model_Songs',
            'key_to'   => 'artist_id',
            'cascade_save'   => false,
            'cascade_delete' => false,
        ),
    );
}

