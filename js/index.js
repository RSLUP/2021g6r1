// submit bttn
function submit(){
	alert("Details submited!!");
}
//change when Scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("myTopnav").style.backgroundColor = "black";
    document.getElementById("myTopnav").style.padding = "20px 10px";
  } else {
    document.getElementById("myTopnav").style.backgroundColor = "rgba(15, 15, 15, 0.479)";
    document.getElementById("myTopnav").style.padding = "0px 0px";
  }
}

//responsive navBar
function navBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  $(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


