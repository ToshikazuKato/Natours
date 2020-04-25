//navigation
const anchors = document.querySelectorAll("nav.navigation__nav ul.navigation__list li.navigation__item a.navigation__link");
const nav_toggle = document.getElementById("navi-toggle");
anchors.forEach(a=>{
	a.addEventListener('click', (e) => {
		e.preventDefault();e.stopPropagation();
		nav_toggle.checked = false;
	});
});


//popup
const popup = document.getElementById("popup");
popup.addEventListener('click',e=>{
	e.preventDefault();e.stopPropagation();
	popup.classList.remove('target');
});
const popup_btns = document.querySelectorAll('#section-tours a.btn.btn--white');
popup_btns.forEach(v=>{
	v.addEventListener('click',e=>{
		e.preventDefault();e.stopPropagation();	
		popup.classList.add('target');
	});
});