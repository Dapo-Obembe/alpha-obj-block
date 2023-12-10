<?php
/**
 * Plugin Name: Alpha OBJ Questions Block
 * Plugin Author: Dapo Obembe
 * Plugin URI: https://github.com/Dapo-Obembe/alpha-obj-question-block
 * Description: This is a plugin for adding inline OBJ questions and answers to your WordPress Posts.
 * Version: 1.0.0
 * text-domain: alpha-obj-questions
 */

if ( ! defined('ABSPATH') ) {

    exit();
}

class AlphaObjQuestions
{
    function __construct(){
        add_action('enqueue_block_editor_assets', array($this, 'block_assets'));
    }

    function block_assets(){
        wp_enqueue_script('block-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array('wp-blocks', 'wp-element'));
    }
}

$alphaObj = new AlphaObjQuestions;
