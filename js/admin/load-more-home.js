jQuery(document).ready(function ($) {
  loadMorePosts();
});

function loadMorePosts() {
  const ajaxurl = ajax_object.ajax_url;

  // Event listener for the Load More button
  jQuery(document).on('click', '#load-more', function() {
    var nextPage = parseInt(jQuery(this).data('page'), 10) + 1; // Increment the page number

    jQuery.ajax({
      url: ajaxurl,
      type: 'POST',
      data: {
        action: 'filter_posts_by_category',
        page: nextPage
      },
      beforeSend: function() {
        jQuery('#load-more').text('Loading...'); // Show loading text
      },
      success: function(response) {
        
        if (response.trim() !== '') {
          // If the response has content, append the new posts
          var newItems = jQuery('<div/>').html(response).find('.post-item').hide();
          jQuery('#posts-container').append(newItems);
          
          // Add 'active' class to the first new item and fade it in immediately
          newItems.first().show().addClass('active');
          
          // Fade in the rest of the items with delay
          newItems.slice(1).each(function(i) {
            jQuery(this).delay(i * 300).fadeIn(600);
          });

          // Update the 'Load More' button with the new page number
          jQuery('#load-more').text('Load More').data('page', nextPage);
        } else {
          // If the response is empty, hide the Load More button
          jQuery('#load-more').text('No more projects');
        }

      },
      error: function() {
        // In case of an error, reset the Load More button text
        jQuery('#load-more').text('Load More');
      }
    });
  });
}
