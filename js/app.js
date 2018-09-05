    document.addEventListener("DOMContentLoaded", function() {

      const menuIcon = document.getElementsByClassName("menu-icon")[0];
      const header = document.getElementsByTagName("header")[0];
      const menu = header.querySelector(".menu-list");
      function showMenu() {
        menu.classList.toggle("showing");
      }

      menuIcon.addEventListener("click", function() {
          showMenu();
      });

      document.querySelector('.nav').addEventListener('click', function(event) {
          if(event.target.tagName.toLowerCase() === 'a') {
            showMenu();
          }
      });
    });