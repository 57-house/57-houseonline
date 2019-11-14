$(document).ready(function(){

	// nav slide toggle
	$('i.icon').click(function(){
		$('.nav-list').slideToggle()
	});

	//stickey nav bar
	$(window).scroll(function(){
		var sc = $(this).scrollTop();
		if (sc > 40) {
			$('header').addClass('sticky');
		}else{
			$('header').removeClass('sticky');
		}
	});
	$('#about-info-btn').click(function(){
		var targetElement;
		targetElement = document.getElementById('masked-text');
		if (targetElement.style.display == "" || targetElement.style.display == "none" ){
			document.getElementById('masked-text').style.display="block";
			document.getElementById("about-info-btn").innerHTML="Reduire";
		}else{
			document.getElementById('masked-text').style.display="none";
			document.getElementById("about-info-btn").innerHTML="Lire plus";
		}
		
	});
	$('#shownum').click(function(){
		var targetElement;
		targetElement = document.getElementById('num');
		if (targetElement.style.display == "" || targetElement.style.display == "none" ){
			document.getElementById('num').style.display="block";
		}else{
			document.getElementById('num').style.display="none";
		}
		
	});
	$('#showpage').click(function(){
		var targetElement;
		targetElement = document.getElementById('page');
		if (targetElement.style.display == "" || targetElement.style.display == "none" ){
			document.getElementById('page').style.display="block";
		}else{
			document.getElementById('page').style.display="none";
		}
		
	});
	$('#showaddr').click(function(){
		var targetElement;
		targetElement = document.getElementById('addr');
		if (targetElement.style.display == "" || targetElement.style.display == "none" ){
			document.getElementById('addr').style.display="block";
		}else{
			document.getElementById('addr').style.display="none";
		}
		
	});
})