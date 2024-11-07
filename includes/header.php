<!DOCTYPE html>
<html lang="en">

<head>

	<!-- META -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="keywords" content="" />
    <meta name="author" content="" />
    <meta name="robots" content="" />    
    <meta name="description" content="" />
    
    <!-- FAVICONS ICON -->
    <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png" />
    
    <!-- PAGE TITLE HERE -->
    <title>indusza Template | Home Page Style 1</title>
    
    <!-- MOBILE SPECIFIC -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


    <!-- BOOTSTRAP STYLE SHEET -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <!-- FONTAWESOME STYLE SHEET -->
    <!-- <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" /> -->
    <!-- OWL CAROUSEL STYLE SHEET -->
    <link rel="stylesheet" type="text/css" href="css/owl.carousel.min.css">
    <!-- BOOTSTRAP SLECT BOX STYLE SHEET  -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap-select.min.css">    
    <!-- MAGNIFIC POPUP STYLE SHEET -->
    <link rel="stylesheet" type="text/css" href="css/magnific-popup.min.css">
   
    <!-- MAIN STYLE SHEET -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <!-- FLATICON STYLE SHEET -->
    <link rel="stylesheet" type="text/css" href="css/flaticon.min.css">
    <!-- IMAGE POPUP -->
    <link rel="stylesheet" href="css/lc_lightbox.css" />
    
    <!-- THEME COLOR CHANGE STYLE SHEET -->
    <link rel="stylesheet" class="skin" type="text/css" href="css/skin-1.css">

    <!-- REVOLUTION SLIDER CSS -->
    <link rel="stylesheet" type="text/css" href="plugins/revolution/revolution/css/settings.css">
    <!-- REVOLUTION NAVIGATION STYLE -->
    <link rel="stylesheet" type="text/css" href="plugins/revolution/revolution/css/navigation.css">
    <style>
  /* Update styles for the megamenu */
  .nav > li > .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;  /* White background */
    width: 600%;            /* Full width on desktop */
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .nav > li:hover > .dropdown-content, 
  .nav > li:focus > .dropdown-content {
    display: block;
  }

  .dropdown-content .header {
    background: white; /* White background */
    padding: 10px;
    color: black;     /* Black text color */
  }

  .dropdown-content .row_header {
    display: flex;
    flex-wrap: nowrap;
    background-color:white;
  }

  .dropdown-content .column {
    flex: 25%; /* Column width for desktop */
    padding: 10px;
  }

  .dropdown-content .column a {
    color: black; /* Black text color */
    text-decoration: none;
    display: block;
    padding: 8px;
  }

  .dropdown-content .column a:hover {
    background-color: #fff;
    color: black;
  }

  @media (max-width: 768px) {
    .nav > li > .dropdown-content {
      position: static;
      background-color: white;
      width: 100%;
      box-shadow: none;
    }

    .dropdown-content .row_header {
      display: block;
    }

    .dropdown-content .column {
      flex: none;
      width: 100%;
      margin-bottom: 15px;
      padding: 0; /* Make columns full-width in mobile */
    }
  }
</style>

 
</head>

<body>

<div class="page-wraper">
     
     <!-- HEADER START -->
     <header class="site-header header-style-1 mobile-sider-drawer-menu">
         
         <div class="top-bar site-bg-white">
             <div class="container">

                     <div class="d-flex justify-content-between">
                         <div class="wt-topbar-left d-flex flex-wrap align-content-start">
                             <ul class="wt-topbar-left-info">
                                 <li><i class="flaticon-call"></i><span>Call :</span> + (291) 1800-567-9090</li>
                                 <li><i class="flaticon-mail"></i><span>Email :</span> office@example.com</li>
                             </ul>
                         </div>
                         
                         <div class="wt-topbar-right d-flex flex-wrap align-content-center">
                             <div class="wt-topbar-right-info">
                                 <ul class="social-icons">
                                     <li><a href="javascript:void(0);" class="fa fa-facebook"></a></li>
                                     <li><a href="javascript:void(0);" class="fa fa-twitter"></a></li>
                                     <li><a href="javascript:void(0);" class="fa fa-linkedin"></a></li>
                                     <li><a href="javascript:void(0);" class="fa fa-pinterest"></a></li>
                                 </ul>
                             </div> 
                         </div>
                     </div>
             </div>
         </div>  
                 
             <div class="sticky-header main-bar-wraper navbar-expand-lg">
                 <div class="main-bar">  
                                     
                     <div class="container clearfix"> 
                 
                         <div class="logo-header">
                             <div class="logo-header-inner logo-header-one">
                                 <a href="index.html">
                                 <img src="images/logo-dark.png" alt="">
                                 </a>
                             </div>
                         </div>  
                         
                         <!-- NAV Toggle Button -->
                         <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" class="navbar-toggler collapsed">
                             <span class="sr-only">Toggle navigation</span>
                             <span class="icon-bar icon-bar-first"></span>
                             <span class="icon-bar icon-bar-two"></span>
                             <span class="icon-bar icon-bar-three"></span>
                         </button> 

                         <!-- MAIN Vav -->
                         <div class="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
                     
                             <ul class="nav navbar-nav">
                                 <li class="active has-child"><a href="javascript:;">Home</a>
                                     <div class="fa fa-angle-right submenu-toogle"></div> 
                                     <ul class="sub-menu">
                                         <li><a href="index.html">Industry 1</a></li>                                       
                                         <li><a href="index-2.html">Industry 2</a></li>
                                         <li><a href="index-3.html">Garden</a></li>
                                         <li><a href="index-4.html">Construction</a></li>
                                         <li><a href="index-5.html">Transport</a></li>                                    
                                     </ul>                                                                  
                                 </li>
                                 
                                 <li class="has-child">
                                     <a href="javascript:;">Company</a><div class="fa fa-angle-right submenu-toogle"></div>
                                     <ul class="sub-menu">
                                         <li><a href="javascript:;">About</a><div class="fa fa-angle-right submenu-toogle"></div>
                                             <ul class="sub-menu">
                                                 <li><a href="about-1.html">About us 1</a></li>
                                                 <li><a href="about-2.html">About us 2</a></li>
                                             </ul>
                                         </li>
                                         <li><a href="javascript:;">Services</a><div class="fa fa-angle-right submenu-toogle"></div>
                                             <ul class="sub-menu">
                                                 <li><a href="services.html">Services</a></li>
                                                 <li><a href="service-detail.html">Services Detail</a></li>
                                             </ul>
                                         </li>                                                                                    
                                         <li><a href="javascript:;">Team</a><div class="fa fa-angle-right submenu-toogle"></div>
                                             <ul class="sub-menu">
                                                 <li><a href="our-team.html">Team</a></li>
                                                 <li><a href="our-team-detail.html">Team Detail</a></li>
                                             </ul>
                                         </li>
                                         <li><a href="faq.html">Faq</a></li>
                                         <li><a href="pricing.html">Pricing</a></li>
                                         <li><a href="error-404.html">Error-404</a></li>
                                         <li><a href="icon-font.html">Icon Font</a></li>                                              
                                     </ul>                                 
                                 </li>                                  
                                 
                                 <li class="has-child"><div class="fa fa-angle-right submenu-toogle"></div>
                                     <a href="javascript:;">Services</a>
                                     <div class="dropdown-content">
                                         <div>
                                             <!-- <h4>Services</h4> -->
                                         </div>
                                         <div class="row_header">
                                             <div class="column" style="background-color:white;color:black">
                                                 <h3>Category 1</h3>
                                                 <a href="javascript:void(0);">Link 1</a>
                                                 <a href="javascript:void(0);">Link 2</a>
                                                 <a href="javascript:void(0);">Link 3</a>
                                             </div>
                                             <div class="column" style="background-color:white;color:black">
                                                 <h3>Category 2</h3>
                                                 <a href="javascript:void(0);">Link 1</a>
                                                 <a href="javascript:void(0);">Link 2</a>
                                                 <a href="javascript:void(0);">Link 3</a>
                                             </div>
                                             <div class="column" style="background-color:white;color:black">
                                                 <h3>Category 3</h3>
                                                 <a href="javascript:void(0);">Link 1</a>
                                                 <a href="javascript:void(0);">Link 2</a>
                                                 <a href="javascript:void(0);">Link 3</a>
                                             </div>
                                             <div class="column" style="background-color:white;color:black">
                                                 <h3>Category 4</h3>
                                                 <a href="javascript:void(0);">Link 1</a>
                                                 <a href="javascript:void(0);">Link 2</a>
                                                 <a href="javascript:void(0);">Link 3</a>
                                             </div>
                                         </div>
                                     </div>
                                 </li>
                                 
                                 <li class="has-child"><a href="javascript:;">Blog</a><div class="fa fa-angle-right submenu-toogle"></div>
                                     <ul class="sub-menu">
                                         <li><a href="blog-grid.html">Blog Grid</a></li>                                        
                                         <li><a href="blog-list.html">Blog List</a></li> 
                                         <li><a href="blog-single.html">Blog Single</a></li>
                                     </ul>                                
                                 </li>                                                                
                                 <li><a href="contact.html">Contact</a></li>  
                             
                             </ul>

                         </div>
                         
                         <!-- Header Right Section-->
                         <div class="extra-nav header-1-nav">
                             <div class="extra-cell one">
                                 <div class="header-search">
                                     <a href="#search" class="header-search-icon"><i class="fa fa-search"></i></a>
                                 </div>                               
                             </div>
                             <div class="extra-cell two">
                                 <div class="ap-btn-outer">
                                     <a href="#" class="ap-btn contact-slide-show">Request A Quote <i class="fa fa-angle-double-right slide-right"></i></a>
                                 </div>                              
                             </div>                              
                         </div> 
                         
                         <!-- Contact Nav -->                           
                         <div class="contact-slide-hide bg-cover" style="background-image:url(images/background/bg11.jpg);"> 
                             <div class="contact-nav">
                                  <a href="javascript:void(0)" class="contact_close">&times;</a>
                                  <div class="contact-nav-form p-a30">
                                     <div class="contact-info m-b30">
                      
                                         <div class="wt-icon-box-wraper center p-b30">
                                             <div class="icon-xs m-b20 scale-in-center"><i class="fa fa-phone"></i></div>
                                             <div class="icon-content">
                                                 <h4 class="m-t0 wt-title">Phone number</h4>
                                                 <p>+(02) 0111-7457-354</p>
                                             </div>
                                         </div>
                                         
                                         <div class="wt-icon-box-wraper center p-b30">
                                             <div class="icon-xs m-b20 scale-in-center"><i class="fa fa-envelope"></i></div>
                                             <div class="icon-content">
                                                 <h4 class="m-t0 wt-title">Email address</h4>
                                                 <p>asenterprises1569@gmail.com</p>
                                             </div>
                                         </div>
                                         
                                         <div class="wt-icon-box-wraper center p-b30">
                                             <div class="icon-xs m-b20 scale-in-center"><i class="fa fa-map-marker"></i></div>
                                             <div class="icon-content">
                                                 <h4 class="m-t0 wt-title">Address info</h4>
                                                 <p>92 Princess Road, parkvenue</p>
                                             </div>
                                         </div>
                                     </div>                                          
                                     <div class="text-center">
                                         <span>&copy;  2020 Thewebmax</span> 
                                     </div>                                                                               
                                  </div>
                             </div> 
                         </div>
                         
                         <!-- SITE Search -->
                         <div id="search"> 
                             <span class="close"></span>
                             <form role="search" id="searchform" action="/search" method="get" class="radius-xl">
                                 <div class="input-group">
                                     <input class="form-control" value="" name="q" type="search" placeholder="Type to search"/>
                                     <span class="input-group-append"><button type="button" class="search-btn"><i class="fa fa-paper-plane"></i></button></span>
                                 </div> 
                              </form>
                         </div> 
                        
                     </div>    
                 
                 
                 </div>
             </div>
         
     </header>
        <!-- HEADER END -->
</div>