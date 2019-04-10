<div class="searchFormSideBar"><?php get_search_form(TRUE) ?></div>
<li id="categories"><span class="sideTitle"><?php _e('Categories:'); ?></span>
	<ul>
<?php wp_list_cats(); ?>
	</ul>
 </li>

 <li id="archives"><span class="sideTitle"><?php _e('Archives:'); ?></span>
     <ul>
<?php wp_get_archives('type=monthly'); ?>
     </ul>
