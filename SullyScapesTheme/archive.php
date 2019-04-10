<?php
get_header();
Echo '<div class="archiveDiv">';
Echo '<h1 class="blogArchiveTitle">SullyScapes Blog</h1>';
Echo '<div class="archiveBody">';
Echo '<div class="postArea">';
if (have_posts()) :
      
   while (have_posts()) :
      Echo '<div class="postCard">';
      the_post();
      if ( has_post_thumbnail() ) {
            Echo '<div class="postThumbnail">';
            the_post_thumbnail();
            Echo '</div>';
        }
            Echo '<div class="postText">';
            Echo '<div class="postTitle">';
            the_title();
            Echo '</div>';
            Echo '<span class="authorStyle">By: ';
            the_author_posts_link();
            Echo '</span>';
            Echo '<div class="postContent">';
            
            the_excerpt();
            Echo '</div>';
            Echo '</div>';
            Echo '</div>';
   endwhile;
   Echo '<div class="paginationFront">';
   the_posts_pagination( array(
         'screen_reader_text' => ' ',
   ));
   Echo '</div>';
endif;
Echo '</div>';

Echo '<div class="frontSideBar">';
get_sidebar();
Echo '</div>';
Echo '<div class="frontFooter">';
get_footer(); 
Echo '</div>';
Echo '</div>';
Echo '</div>';

?>