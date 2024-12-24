document.addEventListener('DOMContentLoaded', () =>{
  const menuToggle = document.querySelector('#menu-toggle');
  const menuList = document.querySelector('#menu-List');
  const menuClose = document.querySelector('#menuClose');
  const menuItems = document.querySelectorAll('a');
  
  menuToggle.addEventListener('click', function(){
       menuList.classList.toggle('active')
  });
    menuClose.addEventListener('click' , function(){
    menuList.classList.remove('active')
  });

  menuItems.forEach (item => {
    item.addEventListener('click' ,() => {
    menuList.classList.remove('active')

  })


  })


})