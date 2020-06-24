const ham = document.querySelector('.ham');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
ham.addEventListener('click', ()=>{
  navlinks.classList.toggle('open');
/*Para los links*/
links.forEach(link => {
  link.classList.toggle("fade");
});
});
