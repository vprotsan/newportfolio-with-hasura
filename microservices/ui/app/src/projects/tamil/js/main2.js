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
    $('.attachment-upload').fileupload({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: 'server/php/',
        maxFileSize: 9999000,
        acceptFileTypes: /(\.|\/)(pdf|txt|doc)$/i,
        disableImagePreview: true,
        //uploadTemplateId: 'template-upload',
        //downloadTemplateId: 'template-download',

        filesContainer: $('div.attachments'),
        uploadTemplateId: null,
        downloadTemplateId: null,

        uploadTemplate: function (o) {

                        var rows = $();
                        $.each(o.files, function (index, file) {
                            var row = $('<div class="template-upload fade">' +
                                // '<p class="name">' +
                                // '<div class="error"></div>' +
                                '<div class="invisible-upload-btn"'+
                                '<button class="start" disabled>Start</button>'+

                                (!index && !o.options.autoUpload ?
                                    '<button class="start invisible-upload-btn" disabled>Start</button>' : '') +
                                 (!index ? '<button class="cancel">Cancel</button>' : '') +
                                 '</div>'+
                               
                                '</div>');
                            row.find('.name').text(file.name);
                            row.find('.size').text(o.formatFileSize(file.size));
                            if (file.error) {
                                row.find('.error').text(file.error);
                            }
                            rows = rows.add(row);
                        });
                        return rows;
    },
    downloadTemplate: function (o) {
                        var rows = $();
                        $.each(o.files, function (index, file) {
                            var row = $('<div class="template-download fade">' +
                                '<button class="delete">X</button>' +
                                '<span class="preview"></span>' +
                                '<p class="name"></p>' +
                                (file.error ? '<div class="error"></div>' : '') +
                                '</div>');
                            row.find('.size').text(o.formatFileSize(file.size));
                            if (file.error) {
                                row.find('.name').text(file.name);
                                row.find('.error').text(file.error);
                            } else {
                                row.find('.name').append($('<a></a>').text(file.name));
                                if (file.thumbnailUrl) {
                                    row.find('.preview').append(
                                        $('<a></a>').append(
                                            $('<img>').prop('src', file.thumbnailUrl)
                                        )
                                    );
                                }
                                row.find('a')
                                    .attr('data-gallery', '')
                                    .prop('href', file.url);
                                row.find('button.delete')
                                    .attr('data-type', file.delete_type)
                                    .attr('data-url', file.delete_url);
                            }
                            rows = rows.add(row);
                        });
                        return rows;
    }
        
    }).bind('fileuploadadd', function (e, data) {

            // var fileName = "";

            // $.each(data.files, function (index, file) {
            // fileName = file.name;
            // $('.ui-button-text-only span.ui-button-text').text(fileName);
            // });

    }).bind('fileuploadprocessalways', function (e, data) {

       


             if (!(data.files[data.index].error)){
                 var fileName = "";

                $.each(data.files, function (index, file) {
                fileName = file.name;
                $('#attachments .fileinput-button span.ui-button-text').text(fileName);
                });

                 
                $('#attachments .fileupload-buttonbar .start').addClass('active-btn-attachment');
            
            }


        

     }).bind('fileuploadcompleted', function (e, data) {
                $('#attachments .fileupload-buttonbar .start').removeClass('active-btn-attachment');
                $('#attachments .fileinput-button span.ui-button-text').text('Select File For Session');
    
     }).bind('fileuploadfailed', function (e, data) {
                $('#attachments .fileupload-buttonbar .start').removeClass('active-btn-attachment');
                $('#attachments .fileinput-button span.ui-button-text').text('Select File For Session');
                return false;


     }).bind('fileuploadprocessfail', function (e, data) {
                
                alert(data.files[data.index].error);
                $('#attachments .fileupload-buttonbar .start').removeClass('active-btn-attachment');
                $('#attachments .fileinput-button span.ui-button-text').text('Select File For Session');
                return false;

      }).bind('fileuploadstopped', function (e) {
        $('#attachments .fileinput-button span.ui-button-text').text('Select File For Session');
                return false;
      });



    // Enable iframe cross-domain access via redirect option:
    $('.attachment-upload').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );


    // Load existing files:
        $('.attachment-upload').addClass('fileupload-processing');
        $.ajax({
            // Uncomment the following to send cross-domain cookies:
            xhrFields: {withCredentials: true},
            url: $('.attachment-upload').fileupload('option', 'url'),
            dataType: 'json',
            context: $('.attachment-upload')[0]
        }).always(function () {
            $(this).removeClass('fileupload-processing');
        }).done(function (result) {
            $(this).fileupload('option', 'done')
                .call(this, $.Event('done'), {result: result});
        });
});
