jQuery(document).ready(function($) {
    function setImagePreview(button, inputField, previewContainer) {
        var custom_uploader = wp.media({
            title: 'Select Image',
            library: { type: 'image' },
            button: { text: 'Use this Image' },
            multiple: false
        }).on('select', function() {
            var attachment = custom_uploader.state().get('selection').first().toJSON();
            inputField.val(attachment.id); // Set the image ID in the hidden field
            previewContainer.html('<img src="' + attachment.url + '" style="max-width: 150px; max-height: 150px;" />'); // Update the preview
        }).open();
    }

    $('#category_image_upload').on('click', function(e) {
        e.preventDefault();
        setImagePreview($(this), $('#category_image'), $('#category_image_preview'));
    });

    $('#category_image_small_upload').on('click', function(e) {
        e.preventDefault();
        setImagePreview($(this), $('#category_image_small'), $('#category_image_small_preview'));
    });
});
