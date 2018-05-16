jQuery(document).ready(function(){


		 $('.arrow').on('click', function(){
		      $('.hint').slideToggle();
		      $(this).toggleClass('down');
		  })


		  $('#live-video').change(function(){

			  if ($(this).val() == 's&f'){
			    $('.else-hide').show();
			  }else{
			    $('.else-hide').hide();
			  }
		});

		  $("img.scale").imageScale();

});