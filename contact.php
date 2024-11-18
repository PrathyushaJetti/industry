<?php ;
$meta = [
    'title' => "Contact Us - AS Enterprises Aluminium, Glass & UPVC Services",
    'description' => "Get affordable aluminum, glass & UPVC solutions with AS Enterprises. Quality windows, doors & partitions Customized for you Contact us today for all your needs.",
    'keywords' => "AS Enterprises, Door, Window, Partitions, Glassworks near me, Aluminium works,upvc works, Phone number,  Aluminium glass & upvc services, Aluminium glass & upvc services reviews, Aluminium glass & upvc services near me, Aluminium Windows price, Aluminium windows suppliers, Aluminium glass & upvc services cost, Aluminium windows,  Aluminium windows near me, Address,",


]; 
include('includes/header.php')

    ?>

      
        <!-- CONTENT START -->
        <div class="page-content">

            <!-- INNER PAGE BANNER -->
            <div class="wt-bnr-inr overlay-wraper bg-center" style="background-image:url(img/contact-banner.webp);">
            	<div class="overlay-main site-bg-black opacity-06"></div>
                <div class="container">
                    <div class="wt-bnr-inr-entry">
                    	<div class="banner-title-outer">
                        	<div class="banner-title-name">
                        		<h2 class="wt-title">Contact us</h2>
                            </div>
                        </div>
                        <!-- BREADCRUMB ROW -->                            
                        
                            <div>
                                <ul class="wt-breadcrumb breadcrumb-style-2">
                                    <li><a href="index.php">Home</a></li>
                                    <li>Contact us</li>
                                </ul>
                            </div>
                        
                        <!-- BREADCRUMB ROW END -->                        
                    </div>
                </div>
            </div>
            <!-- INNER PAGE BANNER END -->

          
            
        <!-- CONTACT FORM -->
        <div class="section-full  p-t120 p-b120">   
            <div class="section-content">
                <div class="container">
                    <div class="contact-one">
                        <!-- CONTACT FORM-->
                        <div class="row no-gutters d-flex justify-content-center flex-wrap align-items-center">
                            
                            <div class="col-lg-7 col-md-12">
                                <div class="contact-form-outer site-bg-gray">
                                    <form  class="" method="post" action="">

                                        
                                        <!-- TITLE START-->
                                        <div class="section-head left wt-small-separator-outer">
                                            <h3 class="wt-title m-b30">Contact Form</h3>
                                            <p>Feel Free to Contact us any time. we will get back to you as soon as we can't</p>
                                        </div>
                                        <!-- TITLE END-->                                        
                                                                                
                                        <div class="row">

                                            <div class="col-lg-12 col-md-12">
                                                <div class="form-group">
                                                    <input name="username" type="text" required class="form-control" placeholder="Name">
                                                </div>
                                            </div>
                                            
                                            <div class="col-lg-6 col-md-12">
                                                <div class="form-group">
                                                <input name="email" type="text" class="form-control" required placeholder="Email">
                                                </div>
                                            </div>
                                            
                                            <div class="col-lg-6 col-md-12">
                                                <div class="form-group">
                                                    <input name="phone" type="text" class="form-control" required placeholder="Phone">
                                                </div>
                                            </div>
                                            
                                            <div class="col-lg-12 col-md-12">
                                                <div class="form-group">
                                                    <input name="subject" type="text" class="form-control" required placeholder="Subject">
                                                </div>
                                            </div>
                                            
                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                <textarea name="message" class="form-control" rows="4" placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                            
                                            <div class="col-md-12">
                                                <input type="submit" class="site-button sb-bdr-dark" name="submit" value="Submit Now" />
                                            </div>
                                            
                                        </div>
                                    </form>
                                </div>
                            </div> 

                            <div class="col-lg-5 col-md-12">
                                <div class="contact-info site-bg-black" style="background-image: url(images/background/footer-map.png);">
                                    <!-- TITLE START-->
                                    <div class="section-head left wt-small-separator-outer when-bg-dark">
                                        <h3 class="wt-title">Info</h3>
                                    </div>
                                    <!-- TITLE END--> 
                                    
                                    <div class="contact-info-section">  
                                            
                                            <div class="c-info-column">
                                                <span class="m-t0">Address info</span>
                                                <p>1 STAGE KIADB Kapnoor Industrial Area plot no.36/C 6th cross, near Rahman Masjid Kalaburgi-585104 Gulbarga, Karnataka</p>
                                            </div>  

                                            <div class="c-info-column">
                                                <span class="m-t0">Phone number</span>
                                                <p>+91-9535452209, +91-9986338333</p>
                                            </div>

                                            <div class="c-info-column">
                                                <span class="m-t0">Email address</span>
                                                <p>asenterprises1569@gmail.com</p>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                
                </div>
            </div>
        </div>

        <!-- GOOGLE MAP -->
        <div class="section-full">
            <div class="container">   
                <div class="gmap-outline p-b120">
                    <!-- <div id="gmap_canvas2" class="google-map"></div> -->
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30232.96119890816!2d76.82543107854237!3d17.389259627726034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc8c7b0fb0e812d%3A0x124c97f1308536bc!2sIndustrial%20Area%2C%20Kapnoor%2C%20Kalaburagi%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1731563708823!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                </div>
            </div>
        </div>         

        </div>
        <!-- CONTENT END -->

        <?php ;

include('includes/footer.php')

 ?>
</html>

<?php
ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
if(isset($_POST['submit'])) {
    // Collect and sanitize form data
    $username = htmlspecialchars(strip_tags($_POST['username']));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(strip_tags($_POST['phone']));
    $subject = htmlspecialchars(strip_tags($_POST['subject']));
    $message = htmlspecialchars(strip_tags($_POST['message']));

    // // Validate email
    // if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    //     echo "Invalid email format";
    //     exit;
    // }

    // Prepare the email
    $to = "asenterprises1569@gmail.com";
    $email_subject = "Contact Form Submission: " . $subject;
    $email_body = "You have received a new message from the contact form.\n\n" .
                  "Name: $username\n" .
                  "Email: $email\n" .
                  "Phone: $phone\n" .
                  "Subject: $subject\n\n" .
                  "Message:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    
    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Thank you for contacting us. We will get back to you soon!";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>

