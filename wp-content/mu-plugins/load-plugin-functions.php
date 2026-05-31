<?php
/**
 * Fix Elementor: carrega is_plugin_active() no frontend
 */
if ( ! function_exists( 'is_plugin_active' ) ) {
    require_once ABSPATH . 'wp-admin/includes/plugin.php';
}
