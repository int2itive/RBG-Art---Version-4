ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  /* Do things after DOM has fully loaded */
  function showIt() {
    const toBeShown = document.querySelectorAll(".artist_display__card"); // consider adding :not(.scrolled) to selector to reduce the number of iterations if you don't want to support scrolling up
  
    // consider taking this outside of the loop and resetting it on window resize to optimize the loop
    // const halfScreen = window.innerHeight / 2;
    const halfScreen = window.innerHeight / 1.5;
    
    toBeShown.forEach((item, i) => {
      const scrolled = (window.scrollY + window.innerHeight);// - (item.offsetHeight/2);
  
      if (item.offsetTop - window.scrollY < halfScreen) {
        item.classList.add('scrolled');
      } else {
        item.classList.remove('scrolled');
      }
    })
  
  }
  
  window.addEventListener('scroll', showIt);
  // const images = document.querySelectorAll('.artist_img_wrapper img');
  // const cards = document.querySelectorAll('.artist_display__card');
  // const fChild = cards[0];
  // let styles = getComputedStyle(fChild);
  // // console.log(styles.height);
  
  // window.addEventListener("scroll", function () {
    
  //     var position = window.scrollY || document.documentElement.scrollTop;

  
// });
});
