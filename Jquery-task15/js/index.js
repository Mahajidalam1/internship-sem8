$(document).ready(function () {
    //dropdown
    $(".drop").click(function () {
        $("#content1").toggle();
    });
    //bottom to top
    $('#myBtn').click(function () {
        $(window).scrollTop(0);
        return false;
    });
    //modal window
    $("#Btn").click(function () {
        $("#myModal").show();
    });
    $(".close").click(function () {
        $("#myModal").hide();
    });
    // var $modal = $('#myModal');
    // var $btn = $('#Btn');
    // var $span = $('.close').eq(0);

    // $btn.on('click', function () {
    //     $modal.css('display', 'block');
    // });

    // $span.on('click', function () {
    //     $modal.css('display', 'none');
    // });

    // $(window).on('click', function (event) {
    //     if (event.target === $modal[0]) {
    //         $modal.css('display', 'none');
    //     }
    // })

    //animation of header and footer
    $("footer").click(function () {
        $("#demo").animate({
            height: 'toggle'
        }).slideDown(1000);
    });
    //additional information on each service
    $('.more1').on('click', function () {
        $(this).next().toggleClass('show');
    });
    //carousel for the portfolio items
    var $img = $('#port');
    var slides = ['/img/html.jpg', '/img/css.jpg', '/img/javascript.png', '/img/python.png', '/img/sql.jpg', '/img/Java.png'];
    var start = 0;

    function slider() {
        if (start < slides.length) {
            start = start + 1;
        } else {
            start = 1;
        }
        // console.log($img);
        $img.html("<img src=" + slides[start - 1] + ">");
    }
    setInterval(slider, 2000);
    //automatic testimonial section review
    var slideIndex = 0;
    var $tslide = $('.mem');
    $tslide.eq(slideIndex).show();

    setInterval(function () {
        $tslide.eq(slideIndex).hide();
        slideIndex = (slideIndex + 1) % $tslide.length;
        $tslide.eq(slideIndex).show();
    }, 2000);
    //validation form
    // function validation() {
    //     let f = $("#fname").val();
    //     let l = $("#lname").val();
    //     let q = $("#about").val();
    //     if (f == "") {
    //         alert("enter the first name");
    //     } else if (l == "") {
    //         alert("enter the last name");
    //     } else if (q == "") {
    //         alert("enter the query");
    //     }
    // }
    $("#submit").click(function () {
        let f = $("#fname").val();
        let l = $("#lname").val();
        let q = $("#about").val();
        if (f == "") {
            alert("enter the first name");
        } else if (l == "") {
            alert("enter the last name");
        } else if (q == "") {
            alert("enter the query");
        }
    })

    //fixed header top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('header').addClass("sticky");
        }
        else {
            $('header').removeClass("sticky");
        }
    });
    //faqs
    $('.que1').click(function () {
        if ($(this).hasClass('active')) {
            return;
        } else {
            $('.que1.active').removeClass('active');
            $(this).toggleClass('active');
        }
    });
    //team member
    $(".tablinks1").click(function () {
        $("#r1").toggle();
    });
    $(".tablinks2").click(function () {
        $("#r2").toggle();
    });
    $(".tablinks3").click(function () {
        $("#r3").toggle();
    });
    // function openCity(evt, review) {
    //     $('.team').hide();
    //     $('.tablinks').removeClass('active');
    //     $('#' + review).show();
    //     $(evt.currentTarget).addClass('active');
    // }
    //search service
    $("#mySearch").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myMenu li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    //light box
    function openModal() {
        $("#myModal1").show();
    }

    function closeModal() {
        $("#myModal1").hide();
    }

    var slideIndex1 = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var slides = $(".mySlides");
        var dots = $(".demo");
        var captionText = $("#caption");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        slides.hide();
        dots.removeClass("active");
        slides.eq(slideIndex - 1).show();
        dots.eq(slideIndex - 1).addClass("active");
        captionText.html(dots.eq(slideIndex - 1).attr("alt"));
    }


    //resposive navigation
    $(".icon").click(function () {
        $("a").toggle();
        $('.icon').css('display', 'inline');
        // $('a').css('display', 'block');
        // $('.drop').css('float', 'left');
    });


    $(document).ready(function() {
        // Open lightbox on image click
        $(".gallery img").click(function() {
          // Set lightbox image src to clicked image src
          var imgSrc = $(this).attr("src");
          $("#lightbox .lightbox-image").attr("src", imgSrc);
          
          // Show the lightbox
          $("#lightbox").fadeIn();
        });
        
        // Close lightbox on close button click
        $("#lightbox .close").click(function() {
          $("#lightbox").fadeOut();
        });
        
        // Close lightbox on background click
        $("#lightbox").click(function(e) {
          if ($(e.target).attr("id") == "lightbox") {
            $("#lightbox").fadeOut();
          }
        });
      });
});