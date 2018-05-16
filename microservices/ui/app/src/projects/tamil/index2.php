<!DOCTYPE HTML>
<html lang="en" class="js">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="icon" href="favicon.ico" type="image/ico">

    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"> 
    <link href="https://fonts.googleapis.com/css?family=Libre+Franklin:400,500,600" rel="stylesheet">
             
    <!-- jQuery UI styles -->
    <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/themes/dark-hive/jquery-ui.css" id="theme">

    <!--[if lte IE 8]>
    <link rel="stylesheet" href="css/demo-ie8.css">
    <![endif]-->
   
   
    <!-- blueimp Gallery styles -->
    <link rel="stylesheet" href="//blueimp.github.io/Gallery/css/blueimp-gallery.min.css">
    <!-- CSS to style the file input field as button and adjust the Bootstrap progress bars -->
    <link rel="stylesheet" href="css/jquery.fileupload.css">
    <link rel="stylesheet" href="css/jquery.fileupload-ui.css">
     <link rel="stylesheet" href="css/style.css">
    <!-- CSS adjustments for browsers with JavaScript disabled -->
    <noscript><link rel="stylesheet" href="css/jquery.fileupload-noscript.css"></noscript>
    <noscript><link rel="stylesheet" href="css/jquery.fileupload-ui-noscript.css"></noscript>


    <!--[if lte IE 9]>
      <script async src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script async src="js/placeholder.js"></script>
    <![endif]-->

     <title>Konversai</title>

</head>
<body>
    <header>
    
      
    </header>
    <main class="container-fluid">

      <section class="row">
        <header class="header">
          <h1 class=header-text>Business profile set up</h1>
        </header>

        <div class="business-photos line">

          <div class="sub-header">

              <h2>Photos</h2><span>(Add your logo, photos of your staff or other pictures to help seekers learn about your business.)<span class="arrow">&#x0203A;</span></span>
              <p class="hint">Click “Select Image” to browse and find the image you want.<br>
Your image will appear in the box.<br>
Click “Upload Image” and your image will be uploaded and move over to the right.<br>
You can select up to 6 images to add to your business profile.<br>
Select one image as your profile picture by clicking on the box that appears below it.</p>

          </div>

          <div class="photo-select row">


          <!-- The file upload form used as target for the file upload widget -->
      <form id="fileupload" action="server/php" method="POST" enctype="multipart/form-data" >
          <!-- Redirect browsers with JavaScript disabled to the origin page -->
          <noscript><input type="hidden" name="redirect" value="https://blueimp.github.io/jQuery-File-Upload/"></noscript>
          <!-- The fileupload-buttonbar contains buttons to add/delete files and start/cancel the upload -->
          <div class="fileupload-buttonbar">
              <div class="fileupload-buttons col-xs-12 col-md-3">
                  <!-- The fileinput-button span is used to style the file input field as button -->
                  <span class="fileinput-button">
                      <span>Select image</span>
                      <input type="file" name="files[]" accept="image/png, image/jpg">
                  </span>
                  <p>File Format: jpeg or png<br>
                      preferably < 100KB</p>
                  <p>Upload up to 6 images</p>

                   <!-- The global progress state -->
                  <div class="fileupload-progress fade" style="display:none">
                                <!-- The global progress bar -->
                        <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                <!-- The extended global progress state -->
                        <div class="progress-extended">&nbsp;</div>
                  </div>

                  
              </div>

              <div class="img-plhd col-xs-12 col-md-9">

              <div class="row">

                <div class="col-xs-12 col-md-3">
                    <div role="presentation">
                        <div class="preview-files">
                            <img id="target" src="images/plus.png">
                            <span id="hidden-input-img" class="fileinput-button">
                            <input type="file" name="files[]" accept="image/png, image/jpg">
                        </div>
                  </span>
                    </div>
                   
                    <button type="submit" class="start">Upload Image</button>
                </div>

                <div class="col-xs-12 col-md-9">
                  
                   <div role="presentation">
                      <div class="files row"></div>
                  </div>

                </div>

              </div>

              </div>

          </div>
             
      </form>
          

          
        </div>

       

        <div class="row">

          <div class="col-xs-12 col-sm-3 col-md-2 enter-links">
              <p>Enter video links</p>
          </div>

          <div class="col-xs-12 col-sm-9 col-md-10">

              <input type="text" class="form-control" name="enter-video-links" id="enter-video-links" placeholder="Enter video links to videos that describe your business">
          </div>

        </div>

        </div><!--end budiness photos-->


        <div class="business-about line">
          <div class="row">

            <div class="col-xs-12 col-sm-1 sub-header">
                <h2>About</h2>
             
            </div>
            <div class="col-xs-12 col-sm-11">
              <textarea class="form-control" rows="5">Enter a description for your business profile</textarea>
            </div>


          </div>
        </div>
        
        </section>

        <section class="fileupload" class="section">
          <h2>Account</h2>

          <div class="row>">

        <div class="col-xs-12 col-md-6">

        <div class="small-container">
            <div class="row"> 


                <div class="col-xs-12 col-sm-offset-3 col-sm-1">&nbsp;</div>
           <div class="col-xs-12 col-sm-8"><h3>Contact</h3></div>
           </div>

           

          <div class="form-group row">
            <label for="business-name" class="col-xs-12 col-sm-4 col-form-label">*Business Name</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="text" value="Enter Business Name" id="business-name" required >
            </div>
          </div>
          <div class="form-group row">
            <label for="business-user-name" class="col-xs-12 col-sm-4 col-form-label">*Business User Name</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="text" value="Enter Business User Name" id="business-user-name" placeholder="Business User Name" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="business-email" class="col-xs-12 col-sm-4 col-form-label">*Business Email</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="email" value="Enter Business Email" id="business-email" required>
            </div>
          </div>
           <div class="form-group row">
            <label for="business-address" class="col-xs-12 col-sm-4 col-form-label">Business Address</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="text" value="Enter Street" id="business-address">
            </div>
          </div>
          <div class="form-group row">
            <label for="enter-etreet" class="col-xs-12 col-sm-4 col-form-label"></label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="text" value="Enter Street" id="enter-etreet">
            </div>
          </div>

          <div class="form-group row">
            <label for="City" class="col-xs-12 col-sm-4 col-form-label">City</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="text" value="Enter City" id="city">
            </div>
          </div>

          <div class="form-group row">
           <label class="State col-xs-12 col-sm-4" for="State">State</label>
             <div class="col-xs-12 col-sm-8">
                <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="State">
                  <option selected>Select State</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
            </div>
          </div>

           <div class="form-group row">
           <label class="State col-xs-12 col-sm-4" for="State">Country</label>
             <div class="col-xs-12 col-sm-8">
                <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="State">
                  <option selected>Select A Country</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
            </div>
          </div>

           <div class="form-group row">
            <label for="City" class="col-xs-12 col-sm-4 col-form-label">Zip</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="text" value="Enter zip code" id="zip"  pattern="\d{5,5}(-\d{4,4})">
            </div>
          </div>
         
         </div>

         <div class="small-container">
         <div class="row">
           

           <div class="col-xs-12 col-sm-offset-3 col-sm-1">&nbsp;</div>
           <div class="col-xs-12 col-sm-8"><h3>Authorized Contacts</h3></div>
           </div>

           <div class="form-group row">
            <label for="authorized-contact-name" class="col-xs-12 col-sm-4 col-form-label">*Authorized
Contact Name</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="text" value="Enter Authorized Contact Name" id="authorized-contact-name" required>
            </div>
          </div>


            <div class="form-group row">
            <label for="Phone2" class="col-xs-12 col-sm-4 col-form-label">Phone</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="tel" value="Enter Phone" id="Phone2">
            </div>
          </div>

          <div class="form-group row">
            <label for="email2" class="col-xs-12 col-sm-4 col-form-label">*Email</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="email" value="Enter Business Email" id="email2" required>
            </div>
          </div>

          <div class="form-group row">
            <label for="2-authorized-contact-name" class="col-xs-12 col-sm-4 col-form-label">2nd Authorized
Contact Name</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="text" value="Enter Authorized Contact Name" id="2-authorized-contact-name">
            </div>
          </div>


            <div class="form-group row">
            <label for="Phone3" class="col-xs-12 col-sm-4 col-form-label">Phone</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="tel" value="Enter Phone" id="Phone3">
            </div>
          </div>

          <div class="form-group row">
            <label for="Email3" class="col-xs-12 col-sm-4 col-form-label">Email</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="email" value="Enter Email" id="Email3">
            </div>
          </div>


         </div> 


        </div>
        <div class="col-xs-12 col-md-6">
          <div class="small-container">
          <div class="row">

          <div class="col-xs-12 col-sm-offset-3 col-sm-1">&nbsp;</div>
           <div class="col-xs-12 col-sm-8"><h3>Social</h3></div>
           </div>
           

            <div class="form-group row">
            <label for="Website" class="col-xs-12 col-sm-4 col-form-label">Website</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="url" value="Enter Website" id="Website">
            </div>
          </div>

          <div class="form-group row">
            <label for="Linkedin" class="col-xs-12 col-sm-4 col-form-label">Linkedin</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="url" value="Enter Linkedin URL" id="Linkedin">
            </div>
          </div>

          <div class="form-group row">
            <label for="Facebook" class="col-xs-12 col-sm-4 col-form-label">Facebook</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="url" value="Enter Facebook URL" id="Facebook">
            </div>
          </div>

          <div class="form-group row">
            <label for="Instagram" class="col-xs-12 col-sm-4 col-form-label">Instagram</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="url" value="Enter Instagram URL" id="Instagram">
            </div>
          </div>

          <div class="form-group row">
            <label for="Twitter" class="col-xs-12 col-sm-4 col-form-label">Twitter</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="url" value="Enter Twitter URL" id="Twitter">
            </div>
          </div>

          <div class="form-group row">
            <label for="Instagram" class="col-xs-12 col-sm-4 col-form-label">Snapchat</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="url" value="Enter Snapchat URL" id="Snapchat">
            </div>
          </div>

          <div class="form-group row">
            <label for="Tumbler" class="col-xs-12 col-sm-4 col-form-label">Tumbler</label>
            <div class="col-xs-12 col-sm-8">
              <input class="form-control" type="url" value="Enter Tumbler URL" id="Tumbler">
            </div>
          </div>


          </div>

           <div class="small-container">
           <div class="row">

           <div class="col-xs-12 col-sm-offset-3 col-sm-1">&nbsp;</div>
           <div class="col-xs-12 col-sm-8"><h3>Preferences</h3></div>
           </div>

             <div class="form-group row">
               <label class="State col-xs-12 col-sm-4" for="live-video">*Live Video</label>
                 <div class="col-xs-12 col-sm-8">
                    <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="live-video" required>
                      <option selected value="select">Select</option> 
                      <option value="skype">Skype</option> 
                      <option value="facetime">Facetime</option>
                      <option value="s&f">Both skype and facetime</option>
                     
                    </select>
                </div>
              </div>

               <div class="form-group row else-hide">
                <label for="Tumbler" class="col-xs-12 col-sm-4 col-form-label">*Skype</label>
                <div class="col-xs-12 col-sm-8">
                  <input class="form-control" type="url" value="Enter Your Skype ID" id="Tumbler">
                </div>
              </div>

               <div class="form-group row else-hide">
                <label for="Tumbler" class="col-xs-12 col-sm-4 col-form-label">*Facetime</label>
                <div class="col-xs-12 col-sm-8">
                  <input class="form-control" type="url" value="Enter Apple ID, email or phone number" id="Tumbler">
                </div>
              </div>

              <div class="form-group row">
               <label class="State col-xs-12 col-sm-4" for="time-zone">*Time Zone</label>
                 <div class="col-xs-12 col-sm-8">
                    <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="time-zone" required>
                      <option selected>Select A Video Platform</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                </div>
              </div>


              <div class="form-group row">
               <label class="State col-xs-12 col-sm-4" for="session-preference">Session Preference</label>
                 <div class="col-xs-12 col-sm-8">
                    <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="session-preference">
                      <option selected>Select A Time Zone</option>
                      <option value="1">Skype</option>
                      <option value="2">Facetime</option>
                      <option value="3">Both Skype and Facetime</option>
                    </select>
                </div>
              </div>

              <div class="form-group row">
                <label for="session-preference" class="col-xs-12 col-sm-4 col-form-label">Session
Preference</label>
                <div class="col-xs-12 col-sm-8">
                  <input class="form-control" type="text" value="Enter Best Availability Times" id="session-preference">
                </div>
              </div>



            </div><!--end small container-->

        </div><!--end col-xs-6-->

        </div>
        </section>
        <div class="clearfix"></div>
        <section id="attachments">
          <h2>Attachments<span>(Attach files for your sessions)</span></h2>  
          <div class="row">      
         
          
              <div class="col-xs-12 col-md-6">
                  
                    <form class="attachment-upload" action="server/php" method="POST" enctype="multipart/form-data">
                      <!-- Redirect browsers with JavaScript disabled to the origin page -->
                      <noscript><input type="hidden" name="redirect" value="https://blueimp.github.io/jQuery-File-Upload/"></noscript>
                      <!-- The fileupload-buttonbar contains buttons to add/delete files and start/cancel the upload -->
                      <div class="fileupload-buttonbar row">
                          <div class="fileupload-buttons col-xs-12 col-md-offset-3 col-md-9">
                              <!-- The fileinput-button span is used to style the file input field as button -->
                              <span class="fileinput-button">
                                  <span>Select File For Sessions</span>
                                  <input type="file" name="files[]">
                              </span>
                              <button type="submit" class="start">Upload Files</button>
                              
                              <!-- The global file processing state -->
                              <span class="fileupload-process"></span>
                          </div>
                          <!-- The global progress state -->
                          <div class="fileupload-progress fade" style="display:none">
                              <!-- The global progress bar -->
                              <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                              <!-- The extended global progress state -->
                              <div class="progress-extended">&nbsp;</div>
                          </div>
                      </div>
                     
                  </form>

                  </div>

                   <div class="col-xs-12 col-md-6">
                     
                   
                      <div role="presentation" class="attachments"></div>
                   </div>

          


              </div>
            </div>
</div>
        </section>

        
    </main>

   <!-- The blueimp Gallery widget -->
<div id="blueimp-gallery" class="blueimp-gallery blueimp-gallery-controls" data-filter=":even">
    <div class="slides"></div>
    <h3 class="title"></h3>
    <a class="prev">‹</a>
    <a class="next">›</a>
    <a class="close">×</a>
    <a class="play-pause"></a>
    <ol class="indicator"></ol>
</div>
<!-- The template to display files available for upload -->
<script id="template-upload" type="text/x-tmpl">

{% for (var i=0, file; file=o.files[i]; i++) { %}
    <div class="template-upload fade col-xs-12 col-sm-6 col-md-4">
        <div>
            <div class="preview"></div>
        </div>
        
        <div class="invisible-upload-btn">
            {% if (!i && !o.options.autoUpload) { %}
                <button class="start " disabled>Start</button>
            {% } %}
           
        </div>
    </div>
{% } %}
</script>


<!-- The template to display files available for download -->
<script id="template-download" type="text/x-tmpl">



{% for (var i=0, file; file=o.files[i]; i++) { %}
    <div class="template-download fade col-xs-12 col-sm-6 col-md-4">
        <div>
            <div class="preview">
                {% if (file.thumbnailUrl) { %}
                    <a href="{%=file.url%}" title="{%=file.name%}" download="{%=file.name%}" data-gallery><img src="{%=file.thumbnailUrl%}"></a>
                {% } %}

                {% if (file.error) { %}
                  alert (file.error);
                    <!-- <div><span class="error">Error</span> {%=file.error%}</div> -->
                {% } %}
            </div>

            <button class="delete" data-type="{%=file.deleteType%}" data-url="{%=file.deleteUrl%}"{% if (file.deleteWithCredentials) { %} data-xhr-fields='{"withCredentials":true}'{% } %}>X</button>

            <div class="prof-photo">
                <label for="profile-photo">profile photo</label>
                <input type="checkbox" name="profile-photo" value="1" is="profile-photo" class="prof-photo">
            </div>

        </div>
    </div>
{% } %}
</script>



<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<!-- The Templates plugin is included to render the upload/download listings -->
<script src="//blueimp.github.io/JavaScript-Templates/js/tmpl.min.js"></script>
<!-- The Load Image plugin is included for the preview images and image resizing functionality -->
<script src="//blueimp.github.io/JavaScript-Load-Image/js/load-image.all.min.js"></script>
<!-- The Canvas to Blob plugin is included for image resizing functionality -->
<script src="//blueimp.github.io/JavaScript-Canvas-to-Blob/js/canvas-to-blob.min.js"></script>
<!-- blueimp Gallery script -->
<script src="//blueimp.github.io/Gallery/js/jquery.blueimp-gallery.min.js"></script>
<!-- The Iframe Transport is required for browsers without support for XHR file uploads -->
<script src="js/jquery.iframe-transport.js"></script>
<!-- The basic File Upload plugin -->
<script src="js/jquery.fileupload.js"></script>
<!-- The File Upload processing plugin -->
<script src="js/jquery.fileupload-process.js"></script>
<!-- The File Upload image preview & resize plugin -->
<script src="js/jquery.fileupload-image.js"></script>
<!-- The File Upload validation plugin -->
<script src="js/jquery.fileupload-validate.js"></script>
<!-- The File Upload user interface plugin -->
<script src="js/jquery.fileupload-ui.js"></script>
<!-- The File Upload jQuery UI plugin -->
<script src="js/jquery.fileupload-jquery-ui.js"></script>
<!-- The main application script -->
<script src="js/main.js"></script>
<script src="js/main2.js"></script>


<script>
  $('.arrow').on('click', function(){
      $('.hitn').slideToggle();
      $(this).toggleClass('down');
  })


  $('#live-video').change(function(){

  if ($(this).val() == 's&f'){
    $('.else-hide').show();
  }else{
    $('.else-hide').hide();
  }
});

// $('p select[name=Browser]').change(function(){
//   if ($('form select option:selected').val() == 'otheros'){
//     $('#osother').show();
//   }else{
//     $('#osother').hide();
//   }
// });


</script>


</body>
</html>
