<?php 

    add_theme_support( 'post-thumbnails', array( 'post' ) );

    function new_excerpt_more($more) {
        global $post;
     return '<a class="moretag" href="'. get_permalink($post->ID) . '"> Read the full article...</a>';
 }
 add_filter('excerpt_more', 'new_excerpt_more');

// Add Toolbar Menus
function custom_toolbar() {
	global $wp_admin_bar;

}
add_action( 'wp_before_admin_bar_render', 'custom_toolbar', 999 );


function wcs_post_thumbnails_in_feeds( $content ) {
    global $post;
    if( has_post_thumbnail( $post->ID ) ) {
        $content = '<p>' . get_the_post_thumbnail( $post->ID ) . '</p>' . $content;
    }
    return $content;
}
add_filter( 'the_excerpt_rss', 'wcs_post_thumbnails_in_feeds' );
add_filter( 'the_content_feed', 'wcs_post_thumbnails_in_feeds' );