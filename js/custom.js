/* =====================================
All JavaScript fuctions Start
======================================*/
(function ($) {
	
    'use strict';
/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/	



// > Video responsive function by = custom.js ========================= //	
	function video_responsive(){	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
	}  


 // > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
 	function lightbox_popup(){
        lc_lightbox('.elem', {
            wrap_class: 'lcl_fade_oc',
            gallery : true,	
            thumb_attr: 'data-lcl-thumb', 
            
            skin: 'minimal',
            radius: 0,
            padding	: 0,
            border_w: 0,
        });
	}			

// > magnificPopup for video function	by = magnific-popup.js ===================== //	
	function magnific_video(){	
		jQuery('.mfp-video').magnificPopup({
			type: 'iframe',
		});
	}

// Vertically center Bootstrap modal popup function by = custom.js ==============//
	function popup_vertical_center(){	
		jQuery(function() {
			function reposition() {
				var modal = jQuery(this),
				dialog = modal.find('.modal-dialog');
				modal.css('display', 'block');
				
				// Dividing by two centers the modal exactly, but dividing by three 
				// or four works better for larger screens.
				dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
			}
			// Reposition when a modal is shown
			jQuery('.modal').on('show.bs.modal', reposition);
			// Reposition when the window is resized
			jQuery(window).on('resize', function() {
				jQuery('.modal:visible').each(reposition);
			});
		});
	}

// > Main menu sticky on top  when scroll down function by = custom.js ========== //		
	function sticky_header(){
		if(jQuery('.sticky-header').length){
			var sticky = new Waypoint.Sticky({
			  element: jQuery('.sticky-header')
			});
		}
	}
	

	// > Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
	function sticky_sidebar(){		
		$('.rightSidebar')
			.theiaStickySidebar({
				additionalMarginTop: 100
			});		
	}


	//menu linebars button
	function menu_navigation(){
		jQuery(".menu-btn").on('click', function () {
			jQuery(".full-menu").fadeIn(500);
		});
		jQuery('.full-menu-close').on('click', function () {
			jQuery(".full-menu").fadeToggle(500);
		});
	};
	
	// > Side Contact section function by = custome.js=======//
	function contact_slide(){
		jQuery('.contact-slide-show').on('click', function () {	
			jQuery('.contact-slide-hide').animate({'right': '0px'});
		});
		jQuery('.contact_close').on('click', function () {	
			jQuery('.contact-slide-hide').animate({'right': '-500px'});
		});		
	};


// > page scroll top on button click function by = custom.js ===================== //	
	function scroll_top(){
		jQuery("button.scroltop").on('click', function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

		jQuery(window).on("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
	}
	
// > input type file function by = custom.js ========================== //	 	 
	function input_type_file_form(){
		jQuery(document).on('change', '.btn-file :file', function() {
			var input = jQuery(this),
				numFiles = input.get(0).files ? input.get(0).files.length : 1,
				label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [numFiles, label]);
		});

		jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
			var input = jQuery(this).parents('.input-group').find(':text'),
				log = numFiles > 10 ? numFiles + ' files selected' : label;
			if (input.length) {
				input.val(log);
			} else {
				if (log) alert(log);
			}
		});	
	}

// > input Placeholder in IE9 function by = custom.js ======================== //	
	function placeholderSupport(){
	/* input placeholder for ie9 & ie8 & ie7 */
		jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
		/* input placeholder for ie9 & ie8 & ie7 end*/
		/*fix for IE7 and IE8  */
		if (!jQuery.support.placeholder) {
			jQuery("[placeholder]").on('focus', function () {
				if (jQuery(this).val() === jQuery(this).attr("placeholder")) jQuery(this).val("");
			}).blur(function () {
				if (jQuery(this).val() === "") jQuery(this).val(jQuery(this).attr("placeholder"));
			}).blur();

			jQuery("[placeholder]").parents("form").on('submit', function () {
				jQuery(this).find('[placeholder]').each(function() {
					if (jQuery(this).val() === jQuery(this).attr("placeholder")) {
						 jQuery(this).val("");
					}
				});
			});
		}
		/*fix for IE7 and IE8 end */
	}	


// > footer fixed on bottom function by = custom.js ======================== //	
	function footer_fixed() {
	  jQuery('.site-footer').css('display', 'block');
	  jQuery('.site-footer').css('height', 'auto');
	  var footerHeight = jQuery('.site-footer').outerHeight();
	  jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
	  jQuery('.site-footer').css('height', footerHeight);
	}
	
	
// > accordion active calss function by = custom.js ========================= //	
	function accordion_active() {
		$('.acod-head a').on('click', function() {
			$('.acod-head').removeClass('acc-actives');
			$(this).parents('.acod-head').addClass('acc-actives');
			$('.acod-title').removeClass('acc-actives'); //just to make a visual sense
			$(this).parent().addClass('acc-actives'); //just to make a visual sense
			($(this).parents('.acod-head').attr('class'));
		 });
	}	

// > Nav submenu show hide on mobile by = custom.js
	 function mobile_nav(){
		jQuery(".sub-menu").parent('li').addClass('has-child');
		jQuery(".mega-menu").parent('li').addClass('has-child');
		//jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");
		jQuery('.has-child a+.submenu-toogle').on('click',function(ev) {
			jQuery(this).next(jQuery('.sub-menu')).slideToggle('fast', function(){
				jQuery(this).parent().toggleClass('nav-active');
			});
			ev.stopPropagation();
		});
	 }
	 
	// Mobile side drawer function by = custom.js
	function mobile_side_drawer(){
		jQuery('#mobile-side-drawer').on('click', function () { 
			jQuery('.mobile-sider-drawer-menu').toggleClass('active');
		});
	}	
	
//  > Top Search bar Show Hide function by = custom.js =================== //	

	function site_search(){
		jQuery('a[href="#search"]').on('click', function(event) {                    
		jQuery('#search').addClass('open');
		jQuery('#search > form > input[type="search"]').focus();
	});
				
	jQuery('#search, #search button.close').on('click keyup', function(event) {
		if (event.target === this || event.target.className === 'close') {
			jQuery(this).removeClass('open');
		}
	});  
 }	

	
// Home page Testimonial Slider function by = owl.carousel.js ========================== //
	function testimonial_1_content(){
	jQuery('.testimonial-1-content').owlCarousel({
		loop:true,
		autoplay:false,
		nav:false,
		dots: true,	
		margin:0,
		navText: ['<i class="flaticon-arrows"></i>', '<i class="flaticon-point-to"></i>'],
		responsive:{
			0:{
				items:1,
			},
			767:{
				items:2,
			},
			1140:{
				items:3
			}		
		}
	});
	}
	
// Home page Testimonial Slider function by = owl.carousel.js ========================== //
	function testimonial_2_content(){
	jQuery('.testimonial-2-content').owlCarousel({
		loop:true,
		autoplay:true,
		nav:true,
		dots: false,	
		margin:30,
		navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
		responsive:{
		
			0:{
				items:1,
			},
			1200:{
				items:2
			}					
		}
	});
	}	
	
	// Home page Testimonial Slider function by = owl.carousel.js ========================== //
	function testimonial_3_content(){
		jQuery('.testimonial-3-content').owlCarousel({
			loop:true,
			autoplay:true,
			nav:false,
			dots: true,	
			margin:30,
			navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
			responsive:{
			
				0:{
					items:1,
				},
				1200:{
					items:1
				}					
			}
		});
	}
	
	
	// Home page Testimonial Slider function by = owl.carousel.js ========================== //
	function testimonial_4_content(){
		jQuery('.testimonial-4-content').owlCarousel({
			loop:true,
			autoplay:true,
			nav:false,
			dots: true,	
			margin:30,
			navText: ['<i class="flaticon-left"></i>', '<i class="flaticon-right"></i>'],
			responsive:{
			
				0:{
					items:1,
				},
				767:{
					items:2,
				},
				1200:{
					items:4,
				},
				1366:{
					items:5
				}					
			}
		});
	}	

// Gallery slider function by = owl.carousel.js ========================== //
	function project_slider2(){
	jQuery('.project-slider2').owlCarousel({
		loop:true,
		autoplay:true,
		nav:false,
		dots: true,	
		margin:30,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1,
			}
		}
	});
	}

	// related-posts-carousel slider function by = owl.carousel.js ========================== //
	function related_posts_carousel(){
		jQuery('.related-posts-carousel').owlCarousel({
			loop:true,
			autoplay:true,
			nav:false,
			dots: true,	
			margin:30,
			navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
			responsive:{
				0:{
					items:1,
				},
				800:{
					items:2,
				}
			}
		});
	}	



//  Client logo Carousel function by = owl.carousel.js ========================== //
	function home_client_carousel(){
	jQuery('.home-client-carousel').owlCarousel({
		loop:true,
		nav:false,
		dots: true,				
		margin:5,
		autoplay:true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:2,
			},
			480:{
				items:3,
			},			
			767:{
				items:4,
			},
			1000:{
				items:6
			}
		}
	});
	}

	
	
//  project_slider1 function by = owl.carousel.js ========================== //
function project_slider1(){
	jQuery('.project-slider1').owlCarousel({
		loop:false,
		nav:false,
		dots: true,				
		margin:30,
		autoplay:true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1,
			},
			640:{
				items:2,
			},			
			767:{
				items:2,
			},
			991:{
				items:3,
			},			
			1000:{
				items:3,
			},
			1440:{
				items:4,
			},			
			1600:{
				items:5
			}			
		}
	});
	}	
	
	//  service_slider1 function by = owl.carousel.js ========================== //	
	function service_slider_one(){
	jQuery('.service-slider-one').owlCarousel({
		loop:true,
		nav:false,
		dots: true,				
		margin:1,
		autoplay:true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1,
			},
			768:{
				items:2,
			},			
			1000:{
				items:3
			}
		}
	});
	}

	//  service_slider2 function by = owl.carousel.js ========================== //	
	function service_slider_two(){
		jQuery('.service-slider-two').owlCarousel({
			loop:true,
			nav:false,
			dots: true,				
			margin:20,
			autoplay:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:1,
				},
				768:{
					items:2,
				},			
				1000:{
					items:3
				}
			}
		});
		}
	
	//  Counter Section function by = counterup.min.js
	function counter_section(){
		jQuery('.counter').counterUp({
			delay: 10,
			time: 3000
		});	
	}	

		
	jQuery('.nav-tabs a').on('click', function() {
		e.preventDefault();
		jQuery(this).tab('show');
	});
	
	jQuery('.wt-accordion a').on('click', function() {
		e.preventDefault();
		jQuery(this).tab('show');
	});	
	
	
	
		
// > home_projects_filter Full Screen with no margin function by = owl.carousel.js ========================== //
	function home_projects_filter(){
		
		var owl = jQuery('.owl-carousel-filter').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:false,
		dots: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1,
			},
			640:{
				items:1,
			},			
			767:{
				items:2,
     		},				
			991:{
				items:2,
			},
			1024:{
				items:3,
			}		

		    }
		})
		
		/* Filter Nav */

		jQuery('.btn-filter-wrap').on('click', '.btn-filter', function(e) {
			var filter_data = jQuery(this).data('filter');

			/* return if current */
			if(jQuery(this).hasClass('btn-active')) return;

			/* active current */
			jQuery(this).addClass('btn-active').siblings().removeClass('btn-active');

			/* Filter */
			owl.owlFilter(filter_data, function(_owl) { 
				jQuery(_owl).find('.item').each(owlAnimateFilter); 
			});
		})
	
	
	
	}



	
/** * =============================jquery.owl-filter.js START * Create: 07-09-2016 * Author: Bearsthemes * Version: 1.0.0 */

"use strict";

$.fn.owlRemoveItem = function(num) {
	var owl_data = $(this).data('owl.carousel');
	
	owl_data._items = $.map(owl_data._items, function(data, index) {
		if(index != num) return data;
	})

	$(this).find('.owl-item').eq(num).remove();
}

$.fn.owlFilter = function(data, callback) {
	var owl = this,
		owl_data = $(owl).data('owl.carousel'),
		$elemCopy = $('<div>').css('display', 'none');
	
	/* check attr owl-clone exist */
	if(typeof($(owl).data('owl-clone')) == 'undefined') {
		$(owl).find('.owl-item:not(.cloned)').clone().appendTo($elemCopy);
		$(owl).data('owl-clone', $elemCopy);
	}else {
		$elemCopy = $(owl).data('owl-clone');
	}
	
	/* clear content */
	owl.trigger('replace.owl.carousel', ['<div/>']);
	
	switch(data){
		case '*': 
			$elemCopy.children().each(function() {
				owl.trigger('add.owl.carousel', [$(this).clone()]);
			})
			break;
		default: 
			$elemCopy.find(data).each(function() {
				owl.trigger('add.owl.carousel', [$(this).parent().clone()]);
			})
			break;
	}

	/* remove item empty when clear */
	owl.owlRemoveItem(0);
	owl.trigger('refresh.owl.carousel').trigger('to.owl.carousel', [0]);

	// callback
	if(callback) callback.call(this, owl);
}		
/** ====================================================================END */	
	


/*--------------------------------------------------------------------------------------------
	Window on load ALL FUNCTION START
---------------------------------------------------------------------------------------------*/


	// > masonry function function by = isotope.pkgd.min.js ========================= //	
	function masonryBox() {
        if ( jQuery().isotope ) {      
            var $container = jQuery('.masonry-wrap');
                $container.isotope({
                    itemSelector: '.masonry-item',
                    transitionDuration: '1s',
					originLeft: true,
					stamp: '.stamp'
                });

            jQuery('.masonry-filter li').on('click',function() {                           
                var selector = jQuery(this).find("a").attr('data-filter');
                jQuery('.masonry-filter li').removeClass('active');
                jQuery(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
    	}
	}		
	

// > page loader function by = custom.js ========================= //		
	function page_loader() {
		$('.loading-area').fadeOut(1000);
	}

/*--------------------------------------------------------------------------------------------
    Window on scroll ALL FUNCTION START
---------------------------------------------------------------------------------------------*/

    function color_fill_header() {
        var scroll = $(window).scrollTop();
        if(scroll >= 100) {
            $(".is-fixed").addClass("color-fill");
        } else {
            $(".is-fixed").removeClass("color-fill");
        }
    }
	
	// Bootstrap Select box function by  = bootstrap-select.min.js
	function Bootstrap_Select(){	
			jQuery('.selectpicker').selectpicker();
		}	

/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
	jQuery(document).ready(function() {
		// > Top Search bar Show Hide function by = custom.js  		
		site_search(),	
		// > Video responsive function by = custom.js 
		video_responsive(),
		 // > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
		lightbox_popup(),
		// > magnificPopup for video function	by = magnific-popup.js
		magnific_video(),
		// > Vertically center Bootstrap modal popup function by = custom.js
		popup_vertical_center();
		// > Main menu sticky on top  when scroll down function by = custom.js		
		sticky_header(),
	    // > Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
		sticky_sidebar(),
		//menu linebars button
		menu_navigation(),		
		// > Side Contact section function by = custome.js=======//
		contact_slide(),		
		// > page scroll top on button click function by = custom.js	
		scroll_top(),
		// > input type file function by = custom.js	 	
		input_type_file_form(),
		// > input Placeholder in IE9 function by = custom.js		
		placeholderSupport(),
		// > footer fixed on bottom function by = custom.js	
		footer_fixed(),
		// > accordion active calss function by = custom.js ========================= //			
		accordion_active(),
		// > Nav submenu on off function by = custome.js ===================//
		mobile_nav(),
		// Mobile side drawer function by = custom.js
		mobile_side_drawer(),
		// Gallery slider function by = owl.carousel.js ========================== //
		project_slider2(),
		// related-posts-carousel slider function by = owl.carousel.js ========================== //
		related_posts_carousel(),		
		// Home page Testimonial Slider function by = owl.carousel.js ========================== //
	    testimonial_1_content(),
		// Home page Testimonial Slider function by = owl.carousel.js ========================== //
		testimonial_2_content(),
		// Home page Testimonial Slider function by = owl.carousel.js ========================== //
		testimonial_3_content(),
		// Home page Testimonial Slider function by = owl.carousel.js ========================== //
		testimonial_4_content(),			
		//  Client logo Carousel function by = owl.carousel.js ========================== //
		home_client_carousel(),
		//  project_slider1 function by = owl.carousel.js ========================== //
		project_slider1(),
		//  service_slider1 function by = owl.carousel.js ========================== //		
		service_slider_one(),
		//  service_slider2 function by = owl.carousel.js ========================== //	
		service_slider_two(),							
		//  Counter Section function by = counterup.min.js ========================== //
		counter_section(),

        // > home_projects_filter Full Screen with no margin function by = owl.carousel.js ========================== //
	    home_projects_filter();	   
				
	}); 	

/*--------------------------------------------------------------------------------------------
	Window Load START
---------------------------------------------------------------------------------------------*/
	jQuery(window).on('load', function () {
		// Bootstrap Select box function by  = bootstrap-select.min.js
		 Bootstrap_Select(),		
		// > masonry function function by = isotope.pkgd.min.js		
		masonryBox(),
		// > page loader function by = custom.js		
		page_loader();
});

 /*===========================
	Window Scroll ALL FUNCTION START
===========================*/

	jQuery(window).on('scroll', function () {
	// > Window on scroll header color fill 
		color_fill_header();
	});
	
/*===========================
	Window Resize ALL FUNCTION START
===========================*/

	jQuery(window).on('resize', function () {
	// > footer fixed on bottom function by = custom.js		 
	 	footer_fixed();
	});

/*===========================
	Document on  Submit FUNCTION START
===========================*/

	// > Contact form function by = custom.js	
// 	jQuery(document).on('submit', 'form.cons-contact-form', function(e){
// 		e.preventDefault();
// 		var form = jQuery(this);
// 		/* sending message */
// 		jQuery.ajax({
// 			url: 'contact.php',
			
// 			data: form.serialize() + "&action=contactform",
// 			type: 'POST',
// 			dataType: 'JSON',
// 			beforeSend: function() {
// 				jQuery('.loading-area').show();
// 			},

// 			success:function(data){
// 				jQuery('.loading-area').hide();
// 				if(data['success']){
// 				jQuery("<div class='alert alert-success'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');
// 				}else{
// 				jQuery("<div class='alert alert-danger'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');	
// 				}
// 			}
// 		});
// 		jQuery('.cons-contact-form').trigger("reset");
// 		return false;
// 	});

/*===========================
	Document on  Submit FUNCTION END
===========================*/	


	
	
	
})(window.jQuery);