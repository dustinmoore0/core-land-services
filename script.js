
document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.menu-btn');
  const links=document.querySelector('.navlinks');
  if(btn&&links){btn.addEventListener('click',()=>links.classList.toggle('open'));}
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));
  const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
});
