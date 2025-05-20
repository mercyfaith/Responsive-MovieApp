       // declaring variables
       
        
        const navBar = document.querySelector('.nav-bar');
        const header = document.querySelector('header');
        const linkWrapper = document.querySelector('.links')
        const links = document.querySelectorAll('.links a')
        const menuEl = document.querySelector('.menu');
        const heroEl = document.querySelector('#hero')
        const videoEl = document.querySelectorAll('video');
        const prevBtn = document.querySelector('#prev-btn');
        const nextBtn = document.querySelector('#next-btn');

        const signInBtn = document.querySelector('.sign-in-icon');
        const signInForm = document.querySelector('.sign-in-form');
        const copywrite = document.querySelector('.copywrite')

        const closeBtn = document.querySelector('.bx-x');
        const logo = document.querySelector('.logo')

        let currentVideo = 0;


        //-------------end---------------

        closeBtn.addEventListener('click', () => {
          signInForm.style.display = 'none';
        })

        signInBtn.addEventListener('click', () => {
           signInForm.style.display = "block";
        })
         

        /* window.addEventListener('scroll', () => {
          header.style.color = "white";
          links.style.color = "white";
        })
        
         window.addEventListener('scrollend', () => {
          navBar.classList.add('active');
          navBar.style.backgroundColor = "transparent";
          
      });*/

         // toggle hamburger menu
            menuEl.addEventListener('click', () => {
              menuEl.classList.toggle('active');
              linkWrapper.classList.toggle('active');
        
              links.forEach(link => {
                link.classList.add('active');
              })
             
           })
          
           // hide and show prev and next btn
           heroEl.addEventListener('mouseover', ()=> {
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
        })

         heroEl.addEventListener('mouseout', () => {
            prevBtn.style.display = "none";
            nextBtn.style.display = "none";
           }) 
        

        // slide videos
        // reset
        function reset(){
            videoEl.forEach(video => {
            video.style.display = "none"
        })
        }
        
         // initialisation

      function startVideoSlide() {
        reset();
        videoEl[0].style.display = "block";
      }

      // show prev
      function prevSlide(){
        reset();
        videoEl[currentVideo -1].style.display = "block";
        currentVideo--;
      }
      prevBtn.addEventListener('click', () => {
        if(currentVideo === 0){
            currentVideo = videoEl.length;
            }
            prevSlide();
        })
        
      // show next
      function nextSlide(){
        reset();
        videoEl[currentVideo +1].style.display = "block";
        currentVideo++;
      }
      nextBtn.addEventListener('click', () => {
        if(currentVideo === videoEl.length -1){
            currentVideo = -1;
        }
        nextSlide();
      })

      copywrite.innerHTML = `<div>Copywrite &copy; ${new Date().getFullYear()} Otty. All rights reserved</div>`
      
      startVideoSlide(); 