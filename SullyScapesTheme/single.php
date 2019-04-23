<?php
get_header();
Echo '<div class="singleBG">';
Echo '<div class="singlePostBody">';

if (have_posts()) :
      
   while (have_posts()) :
      Echo '<div class="singlePostCard">';
      if ( has_post_thumbnail() ) {
            Echo '<div class="singlePostThumbnail">';
            the_post_thumbnail();
            Echo '</div>';
        }
      the_post();
            Echo '<div class="postTitle">';
            the_title();
            Echo '</div>';
            Echo '<div class="postAuthor">By: ';
            the_author();
            Echo '</div>';
            Echo '<div class="postContent">';
            
            the_content(sprintf(
			__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'twentyseventeen' ),
			get_the_title()
		) );
            Echo '</div>';
   endwhile;
   the_posts_pagination();
endif;
Echo '</div>';

Echo '<div class="singleSideBar">';
get_sidebar();
Echo '</div>';

Echo '</div>';
Echo '</div>';
get_footer(); 
?>