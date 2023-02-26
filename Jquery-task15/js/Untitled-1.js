//adding dropdown
function home() {
  document.getElementById("content1").classList.toggle("show");
}

//model window
var modal = document.getElementById("myModal");
var btn = document.getElementById("Btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//carousel portfolio image
var img = document.getElementById("port");

var slides=['/img/html.jpg','/img/css.jpg','/img/javascript.png', '/img/python.png','/img/sql.jpg', '/img/Java.png'];
var Start=0;
function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    // console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">"; 
}
setInterval(slider,2000);

//top button
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//automatic testimonial section review
let slideIndex = 0;
var tslide = document.querySelectorAll(".mem");
tslide[slideIndex].style.display = "block";

setInterval(function () {
  tslide[slideIndex].style.display = "none";
  slideIndex = (slideIndex + 1) % tslide.length;
  tslide[slideIndex].style.display = "block";
}, 2000)

//validation form
function validation() {
  let f = document.getElementById("fname").value;
  let l = document.getElementById("lname").value;
  let q = document.getElementById("about").value;
  if (f == "") {
    alert("enter the first name");
  } else if (l == "") {
    alert("enter the last name");
  } else if (q == "") {
    alert("enter the query");
  }
}

//resposive navigation

// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "nvb") {
//       x.className += " responsive";
//     } else {
//       x.className = "nvb";
//     }
//   }
function menu() {
  var x = document.getElementById("nvb1");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
  // x.classList.toggle("show");

}


//fixed header top
window.onscroll = function () { function1() };
function function1() {
  var sticky = header1.offsetTop;

  if (window.pageYOffset >= sticky) {
    header1.classList.add("sticky");
  } else {
    header1.classList.remove("sticky");
  }
}
//faqs
// document.querySelectorAll('.que1').forEach((element)=>{
//   element.addEventListener('click',()=> {
//     element.nextElementSibling.classList.toggle('show');
//   })
// });

document.querySelectorAll(".que1").forEach((acc) => {
  acc.addEventListener("click", () => {
    acc.classList.contains('active') ? ''
      : document.querySelector('.que1.active')?.classList.remove('active');
    acc.classList.toggle("active");
    });
  });
// document.querySelectorAll(".accordion").forEach((acc) => {
//   acc.addEventListener("click", () => {
//     acc.classList.contains('active') ? ''
//       : document.querySelector('.accordion.active')?.classList.remove('active');
//     acc.classList.toggle("active");
//     });
//   });

//read more service
document.querySelectorAll('.more1').forEach((element)=>{
  element.addEventListener('click',()=> {
    element.nextElementSibling.classList.toggle('show');
  })
});
//animation of header and footer
setInterval(foot,3000)
function foot() {
document.getElementById("demo").style.opacity = 0.5;
}
setInterval(foot1,6000)
function foot1() {
document.getElementById("demo").style.opacity = 1;
}
//team member
function openCity(evt, review) {
  var i, team, tablinks;
  team = document.getElementsByClassName("team");
  for (i = 0; i < team.length; i++) {
    team[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(review).style.display = "block";
  evt.currentTarget.className += " active";
}
//search service
function service() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//lightbox
function openModal() {
  document.getElementById("myModal1").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal1").style.display = "none";
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}