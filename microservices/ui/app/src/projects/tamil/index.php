
<!doctype html>
<html lang="en" class="js">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="icon" href="favicon.ico" type="image/ico">


    <link href="https://fonts.googleapis.com/css?family=Libre+Franklin:400,500,600" rel="stylesheet">
             
    <!-- build:css css/combined.css -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"> 
    <link rel="stylesheet" type="text/css" href="css/style.css"> 
    
    <!-- endbuild -->  

    <!-- build:js js/combined.js async-->
    <script type="text/javascript" src="js/jquery-1.11.3.min.js"></script> 
    <script type="text/javascript" src="js/jquery.validate.min.js"></script>
    <!--<script type="text/javascript" src="js/image.js"></script>-->
   
     <!-- endbuild -->

     <!-- Latest compiled and minified JavaScript -->
    <link href="css/fine-uploader-new.css" rel="stylesheet">

    <!-- Fine Uploader jQuery JS file
    ====================================================================== -->
    <script src="js/jquery.fine-uploader.js"></script>

    <!-- Fine Uploader Thumbnails template w/ customization
    ====================================================================== -->
    <script type="text/template" id="qq-template-manual-trigger">
        <div class="qq-uploader-selector qq-uploader">
            <div class="qq-total-progress-bar-container-selector qq-total-progress-bar-container">
                <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-total-progress-bar-selector qq-progress-bar qq-total-progress-bar"></div>
            </div>
            <!-- <div class="qq-upload-drop-area-selector qq-upload-drop-area" qq-hide-dropzone>
                <span class="qq-upload-drop-area-text-selector"></span>
            </div> -->
            <div id="buttons" class="buttons">
                <div class="col-xs-6 col-sm-4 col-md-2">

                  <div class="qq-upload-button-selector qq-upload-button">
                      <div>Select files</div>
                  </div>

                   <p>File Format: jpeg or png <br>preferably < 100KB </p>
                   <p>Uload up to 6 images</p>

                </div>

                <div class="col-xs-6 col-sm-8 col-md-10">
              

                <div class="fake-img col-xs-4" style="width:200px; height: auto;">
                    <img src="images/placeholder-image.jpg" id="previewing" alt="#" style="width: 100%; height: auto;">
                   s
                </div>

                <ul id="list" class="qq-upload-list-selector qq-upload-list row" aria-live="polite" aria-relevant="additions removals">

                    <li class="col-xs-4"> 
                        
                        <div class="imge-holder">

                            <div class="qq-progress-bar-container-selector">
                                <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-progress-bar-selector qq-progress-bar"></div>
                            </div>

                            <span class="qq-upload-spinner-selector qq-upload-spinner"></span>
                            <img class="qq-thumbnail-selector" qq-max-size="100" qq-server-scale>
                        </div>

                        <div class="img-action">
                            <button type="button" class="qq-btn qq-upload-delete-selector qq-upload-delete">X</button>

                            <div class="profile-pic">
                              <label for="profile-picture">profile picture</label>
                              <input type="checkbox" id="profile-picture" name="profile-picture">

                            </div>
                        </div>
                        
                        <span role="status" class="qq-upload-status-text-selector qq-upload-status-text"></span>
                    </li>
                </ul>


                <button type="button" id="trigger-upload" class="btn btn-primary">
                    <i class="icon-upload icon-white"></i> Upload
                </button>

                </div>
            </div>
                        

            <dialog class="qq-alert-dialog-selector">
                <div class="qq-dialog-message-selector"></div>
                <div class="qq-dialog-buttons">
                    <button type="button" class="qq-cancel-button-selector">Close</button>
                </div>
            </dialog>

            <dialog class="qq-confirm-dialog-selector">
                <div class="qq-dialog-message-selector"></div>
                <div class="qq-dialog-buttons">
                    <button type="button" class="qq-cancel-button-selector">No</button>
                    <button type="button" class="qq-ok-button-selector">Yes</button>
                </div>
            </dialog>

            <dialog class="qq-prompt-dialog-selector">
                <div class="qq-dialog-message-selector"></div>
                <input type="text">
                <div class="qq-dialog-buttons">
                    <button type="button" class="qq-cancel-button-selector">Cancel</button>
                    <button type="button" class="qq-ok-button-selector">Ok</button>
                </div>
            </dialog>
        </div>
    </script>
    <style>

        .profile-pic {
          display: none;
        }

       .qq-uploader {
          border-radius: 0;
          border: 0;
          background: none;
          padding: 0;
          max-height: auto;
          min-height: auto;
      }

      .qq-upload-button {
        width: 100%;
      }

      #trigger-upload {
        width: 200px;
      }

      #previewing {
        width: 150px;
        height: auto;
      }

    </style>

  
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

              <h2>Photos</h2><span>(Add your logo, photos of your staff or other pictures to help seekers learn about your business.)</span>

          </div>

          <div class="photo-select row">

           <div id="fine-uploader-manual-trigger"></div>

           <script>

            var element = $('ul.qq-upload-list li:last-child').find('img');

            var observer = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                                  
                  var imgUrl = $(element).attr('src');
                 
                  $('#previewing').attr('src', imgUrl);
                  //alert('in mutation');
                  $(element).css('display', 'none');
                
              
            });});

            var target = document.body;

            observer.observe(target, {
                childList: true
              , subtree: true
              , attributes: false
              , characterData: false
            })


            var fileCount = 0;
            var addedFiles = 0;
            var fileLimit = 6;


            $('#fine-uploader-manual-trigger').fineUploader({
                debug: true,
                template: 'qq-template-manual-trigger',
                request: {
                    endpoint: 'endpoint.php'
                },

                deleteFile: {
                  enabled: true, // defaults to false
                  endpoint: 'endpoint.php'
                },

                autoUpload: false,
                success: true,

                validation: {
                  allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
                },

                callbacks: {
                      onSubmit: function(id, fileName) {
                        fileCount ++;
                        if(fileCount > fileLimit) {
                          $('#filelimit-fine-uploader .qq-upload-button').hide();
                          $('#filelimit-fine-uploader .qq-upload-drop-area').hide();
                          return false;
                        }
                      },
                      onCancel: function(id, fileName) {
                        fileCount --;
                        if(fileCount <= fileLimit) {
                          $('#filelimit-fine-uploader .qq-upload-button').show();
                        }
                      },
                      onComplete: function(id, fileName, responseJSON) {
                        if (responseJSON.success) {
                          addedFiles ++;
                          if(addedFiles >= fileLimit) {
                            $('#filelimit-fine-uploader .qq-upload-button').hide();
                            $('#filelimit-fine-uploader .qq-upload-drop-area').hide();
                          }
                        }
                      }
                    }


              })

                .on('complete', function(){
                       //checkbox   
                      $('.profile-pic,.img-placeholder').css('display', 'block');

                        //changes back img
                      $('#previewing').attr('src', 'images/placeholder-image.jpg');
                      $(element).css('display', 'block');
                      $('.buttons input[type="file"]').val(null);
                      
                    }
                ); 


            $('#trigger-upload').on('click', function(){
                $('#fine-uploader-manual-trigger').fineUploader('uploadStoredFiles');
              });



            // $('.qq-upload-button input[type="file"]').on('change', function(){},
            //   function(){
            //   alert ('getting img url');

            //   //$('ul.qq-upload-list-selector').find('li:last-child').css('display', 'none');
            //    var imgUrl = $('ul.qq-upload-list').find('img').attr('src');
            //    alert (imgUrl);
            //   $('#previewing').attr('src', imgUrl);
            // });

           
            // stop watching using:
            //observer.disconnect();

            
        </script>
       
        </div>

       

        <div class="row">

          <div class="col-xs-2 col-sm-3 col-md-2 enter-links">
              <p>Enter video links</p>
          </div>

          <div class="col-xs-12 col-sm-9 col-md-10">

              <input type="text" class="form-control" name="enter-video-links" id="enter-video-links" placeholder="Enter video links to videos that describe your business">
          </div>

        </div>

        </div><!--end budiness photos-->


        <div class="business-about line">
          <div class="row">

            <div class="col-xs-12 col-sm-2 sub-header">
                <h2>About</h2>
             
            </div>
            <div class="col-xs-12 col-sm-10">
              <textarea class="form-control" row="3">Enter a description for your business profile</textarea>
            </div>


          </div>
        </div>
        
        </section>

        
    </main>

   
<!-- <script>

$(document).ready(function(e) 
{
   
    //after we picked the file
    $(".buttons input[type=file]").change(function(){
         
          var file = this.files[0]; //gets file
          var imagefile = file.type; //gets file type
          var match= ["image/jpeg","image/png","image/jpg"];

          //if file format doesnt support
          if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2])))
          {

            //display error msg
                $('#previewing').attr('src','');
                $("#message").html("<p id='error'>Please Select A valid Image File</p>"+"<h4>Note</h4>"+"<span id='error_message'>Only jpeg, jpg and png Images type allowed</span>");
                return false;

          } 
          else 
          {

                var reader = new FileReader();
                    reader.onload = imageIsLoaded;
                    reader.readAsDataURL(this.files[0]);
                    $('.upload-img').addClass('active');
          }

    });//end change


          //if file matches, onload it is added into a preview
          function imageIsLoaded(e) {
              $('#previewing').attr('src', e.target.result);
          };


 //upload button clicked

    //  $('#uploadimage').on('click', function(e){ 

    //   e.preventDefault();
           
    //       $.ajax({
    //         url: 'image.php', // Url to which the request is send
    //         type: "POST",             // Type of request to be send, called as method
    //         data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
    //         contentType: false,       // The content type used when sending data to the server.
    //         cache: false,             // To unable request pages to be cached
    //         processData:false, 
    //         success: function(data)   // A function to be called if request succeeds
    //               {
    //                   $('#previewing').attr('src', 'xyina');
    //                   $('.uploaded-image-block .row').html(data);
    //                   $("#uploadimageform")[0].reset();
    //               },

    //         error: function(){ data}          

    //         });
          


    // });

  
    //   $('#remove_button').on('click', function(){

    //           var path = $('#delete_file').data("path"); //we get the path of an image

    //           $.ajax ({
    //             url: "delete.php",
    //             method: "POST",
    //             data:{path:path},
    //             success: function(data){
    //               if(data != '')
    //               {
    //                 $('.added-image').html('');
    //               }
    //             }
    //           });



    //   }); 


});//end ready



</script>
     -->
</body>
</html>
