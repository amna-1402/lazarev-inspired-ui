function navAnimation(){
    let nav = document.querySelector("nav");
let tl = gsap.timeline({ paused: true });
tl.to(".nav-underline", {
  y: 100,
  duration: 0.5,
  ease: "power2.inOut"
});
tl.to(".categories h5", {
  opacity: 1,
  stagger: {
    amount: 0.7
  }
}); 
window.addEventListener("mousemove", function (e) {
  let navHeight = nav.offsetHeight;
  if (e.clientY <= navHeight) {
    if (!tl.isActive() && tl.progress() === 0) {
      tl.play();
    }
  } else {

    if (!tl.isActive() && tl.progress() > 0) {
      tl.reverse();
    }
  }
});
}
navAnimation();

function page2animaton(){
    let rightElems = document.querySelectorAll(".right-elem");
  rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(dets){
      gsap.to(elem.childNodes[3],{
        opacity:1,
        scale:1,
      })
    })
    elem.addEventListener("mouseleave",function(){
      gsap.to(elem.childNodes[3],{
        opacity:0,
        scale:0,
      })
    })
 
  })
  rightElems.forEach(function(elem){
       elem.addEventListener("mousemove",function(dets){
      gsap.to(elem.childNodes[3],{
        x:dets.x-elem.getBoundingClientRect().x-60,
        y:dets.y-elem.getBoundingClientRect().y-110,
      })
    })

  })
}
page2animaton();

function page3videoanimation(){
  let page3center=document.querySelector(".pagecenter");
let video=document.querySelector("#video");
page3center.addEventListener("click",function(){
  video.play()
  gsap.to(video,{
    opacity:1,
    transform:"scaleX(1) scaleY(1)",
    borderRadius:0,
  })
})
video.addEventListener("click",function(){
  video.pause()
  gsap.to(video,{
    opacity:0,
    transform:"scaleX(0.7) scaleY(0.2)",
    borderRadius:"px",
  })
})
}
page3videoanimation();

  let cursor = document.querySelector(".cursor");
  let img4 = document.querySelector("#imganime");
  let rightSide = document.querySelector(".rightside");

  img4.addEventListener("mousemove", function (dets) {
    let bounds = img4.getBoundingClientRect();
    let x = dets.clientX - bounds.left;
    let y = dets.clientY - bounds.top;

    // Adjust cursor position relative to image container
    gsap.to(cursor, {
      x: x,
      y: y,
      duration: 1.5,
      scale:0.9,
      opacity:1,
    });
  });

  img4.addEventListener("mouseenter", function () {
    cursor.style.display = "block";
  });

  img4.addEventListener("mouseleave", function () {
    cursor.style.display = "none";
  });

let cursor2 = document.querySelector("#cursor2");
let img2 = document.querySelector("#imganime2");

img2.addEventListener("mousemove", function (dets) {
  let bounds = img2.getBoundingClientRect();
  let x = dets.clientX - bounds.left;
  let y = dets.clientY - bounds.top;

  gsap.to(cursor2, {
    x: x,
    y: y,
    duration: 0.3,
    opacity: 1,
    scale: 1,
  });
});

img2.addEventListener("mouseenter", function () {
  gsap.to(cursor2, {
    opacity: 1,
    scale: 0.9,
    duration: 1,
  });
});

img2.addEventListener("mouseleave", function () {
  gsap.to(cursor2, {
    opacity: 0,
    scale: 0,
    duration: 0.3,
  });
});



