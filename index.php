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

/**
 * Initiates the plugin class.
 * 
 * @package Alpha-Block
 */
class AlphaObjQuestions
{
    function __construct(){
        add_action('init', array($this, 'block_assets'));
    }

    /**
     * This function enqueues the plugin assets(scripts and styles) for backend.
     * 
     * @package Alpha-Block
    */
    function block_assets(){
        wp_register_style('block-style', plugin_dir_url( __FILE__ ) . 'build/index.css', array(), 'all');

        wp_register_script('block-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));

        register_block_type('alpha-plugin/alpha-obj', array(
            'editor_script' => 'block-script',
            'editor_style' => 'block-style',
            'render_callback' => array($this, 'blockHTML')
        ));
    }

    function blockHTML($attributes){
        ob_start(); ?>
        <p>Today the sky is <?php echo esc_html($attributes['skyColor']); ?> and the grass is <?php echo esc_html($attributes['grassColor']); ?> </p>
        <?php return ob_get_clean();
    }
}

$alphaObj = new AlphaObjQuestions;
