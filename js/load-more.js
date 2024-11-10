jQuery(document).ready(function ($) {
    $('#load-more').on('click', function () {
        let button = $(this);
        let page = button.data('page');
        let newPage = page + 1;

        // Change button text to "Loading..."
        button.text('Loading...');

        $.ajax({
            url: ajax_url,
            type: 'POST',
            data: {
                action: 'load_more_posts',
                page: newPage,
            },
            success: function (data) {
                if (data) {
                    $('#post-container').append(data);
                    button.data('page', newPage);

                    // Revert button text back to "Load More"
                    button.text('Load More');
                } else {
                    // Remove the button if no more posts
                    button.remove();
                }
            },
            error: function () {
                alert('Something went wrong, please try again.');
                // Revert button text back to "Load More" in case of error
                button.text('Load More');
            }
        });
    });
});
