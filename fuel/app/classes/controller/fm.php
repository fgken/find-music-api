<?php
/**
 * Fuel is a fast, lightweight, community driven PHP5 framework.
 *
 * @package    Fuel
 * @version    1.7
 * @author     Fuel Development Team
 * @license    MIT License
 * @copyright  2010 - 2013 Fuel Development Team
 * @link       http://fuelphp.com
 */

/**
 * The Welcome Controller.
 *
 * A basic controller example.  Has examples of how to set the
 * response body and status.
 *
 * @package  app
 * @extends  Controller
 */
class Controller_Fm extends Controller_Rest
{
    public function get_artists()
    {
        $responseData = array();
        $artists = Model_Artists::find('all');
        if (is_array($artists))
        {
            foreach ($artists as $_artist)
            {
                $responseData{$_artist->id} = $_artist;
            }
        }

        return $this->response($responseData);
    }

    public function get_musics()
    {
        $responseData = array();
        $whereArray = array();

        $artist_id = Input::get('artist_id');
        if (isset($artist_id)) {
            $whereArray[] = array('artist_id', '=', $artist_id);
        }

        $fl = Input::get('fl');
        if (isset($fl)) {
            $whereArray[] = array('fl', '=', $fl);
        }

        $ob = Input::get('ob');
        if (isset($ob)) {
            $whereArray[] = array('ob', '=', $ob);
        }

        $cl = Input::get('cl');
        if (isset($cl)) {
            $whereArray[] = array('cl', '=', $cl);
        }

        $fg = Input::get('fg');
        if (isset($fg)) {
            $whereArray[] = array('fg', '=', $fg);
        }

        $tp = Input::get('tp');
        if (isset($tp)) {
            $whereArray[] = array('tp', '=', $tp);
        }

        $tb = Input::get('tb');
        if (isset($tb)) {
            $whereArray[] = array('tb', '=', $tb);
        }

        $hr = Input::get('hr');
        if (isset($hr)) {
            $whereArray[] = array('hr', '=', $hr);
        }

        $tuba = Input::get('tuba');
        if (isset($tuba)) {
            $whereArray[] = array('tuba', '=', $tuba);
        }

        $timp = Input::get('timp');
        if (isset($timp)) {
            $whereArray[] = array('timp', '=', $timp);
        }

        $name = Input::get('name');
        if (isset($name)) {
            $whereArray[] = array('name', 'like', "%$name%");
        }

        $artist = Input::get('artist');


        $songs = Model_Songs::find('all', array(
            'where' => $whereArray
            )
        );
        $_artists = Model_Artists::find('all');
        $artists = $this->_IdOrder($_artists, 'name');

        if (is_array($songs))
        {
            foreach ($songs as $_song)
            {
                if (isset($artist) && !strstr($artists[$_song->artist_id], $artist)) continue;

                if(!isset($responseData[$_song->artist_id])) {
                    $responseData[$_song->artist_id] = array();
                }
                $_song->artist;
                $responseData[$_song->artist_id][$_song->id] = $_song;
            }
        }

        
        return $this->response($responseData);
    }

    private function _IdOrder($_data, $key) {
        $retArray = array();
        foreach ($_data as $_d) {
            $retArray[$_d["id"]] = $_d[$key];
        }

        return $retArray;
    }
}
