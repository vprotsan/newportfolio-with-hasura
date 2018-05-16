/*
 * jQuery File Upload Plugin JS Example
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global $, window */

$(function () {
    'use strict';


     // Initialize the jQuery File Upload widget:
    $('#fileupload').fileupload({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: 'server/php/',
        maxFileSize: 100000,
        acceptFileTypes: /(\.|\/)(jpe?g|png)$/i,
        disableImagePreview: true,
        //uploadTemplateId: 'template-upload',
        downloadTemplateId: 'template-download',
        maxNumberOfFiles: 6,
        imageMaxWidth: 800,
        imageMaxHeight: 600,
        previewMaxWidth: 350,
        previewMaxHeight: 350,
        previewCanvas: false,
        previewOrientation: false,
        previewCrop: true,
        disableImageResize: false,
        //previewMinWidth: 200,
    }).bind('fileuploadprocessalways', function (e, data) {
        var fileType = data.files[0].name.split('.').pop(), allowdtypes = 'jpeg,jpg,png';      
        if ( allowdtypes.indexOf(fileType) < 0) {
            alert('Invalid file type');
            $('#target').attr('src', 'images/plus.png');
            return false;

        }  else  {

            if ((data.files && data.files[0]) && !(data.files[data.index].error)){
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#target').attr('src', e.target.result);
                }
                reader.readAsDataURL(data.files[0]);
                $('.fileupload-buttonbar .start').addClass('active');
                //data.submit();
            }
        }

     }).bind('fileuploadcompleted', function (e, data) {
            $('#target').attr('src', 'images/plus.png');
            $('.fileupload-buttonbar .start').removeClass('active');
    
     }).bind('fileuploadfailed', function (e, data) {
                $('#target').attr('src', 'images/plus.png');
                $('.fileupload-buttonbar .start').removeClass('active');
                return false;


     }).bind('fileuploadprocessfail', function (e, data) {
                
                alert(data.files[data.index].error);
                $('#target').attr('src', 'images/plus.png');
                $('.fileupload-buttonbar .start').removeClass('active');
                return false;

      }).bind('fileuploadstopped', function (e) {
                 $('#target').attr('src', 'images/plus.png');
                 return false;
      });



    // Enable iframe cross-domain access via redirect option:
    $('#fileupload').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );


    // Load existing files:
        $('#fileupload').addClass('fileupload-processing');
        $.ajax({
            // Uncomment the following to send cross-domain cookies:
            //xhrFields: {withCredentials: true},
            url: $('#fileupload').fileupload('option', 'url'),
            dataType: 'json',
            context: $('#fileupload')[0]
        }).always(function () {
            $(this).removeClass('fileupload-processing');
        }).done(function (result) {
            $(this).fileupload('option', 'done')
                .call(this, $.Event('done'), {result: result});
        });
});
