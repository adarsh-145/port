let typingEffect = new Typed(".typedText",{
    strings : ["Software Engineer","Web Enthusiast"],
    loop : true,
    typeSpeed : 50, 
    backSpeed : 35,
    backDelay : 1500
  })
  
  
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  