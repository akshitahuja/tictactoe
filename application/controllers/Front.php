<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Front extends CI_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index() {
        $this->load->view('index');
    }

    public function game() {
        setcookie('sign', 'cross', time() + (86400 * 30), "/");
        $this->load->view('game');
    }
}
