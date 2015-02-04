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
            foreach ($artists as $_artist) {
                $responseData{$_artist->id}[] = $_artist;
            }
        }

        return $this->response($responseData);
    }
}
