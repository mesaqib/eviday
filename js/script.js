 







 

let tl1 = gsap.timeline();

tl1.from("nav ul li, .center h2 ", {
  y: -10,
  stagger: 0.3,
  delay: 0.2,
  opacity: 0,
});

tl1.from("#page1 .top-heading", {
  stagger: 0.3,
  delay: 0.2,
  opacity: 0,
});



tl1.to("#page1 .img-text h1", {
  x: -700,
  duration: 1,
  scrollTrigger: {
    trigger: "#page1",
    // markers: true,
    scrub: true, 
  },
});


tl1.to("#product", {
  x: -600,
  y: 550,
  rotate: "-10deg",
  duration: 2,
  scrollTrigger: {
    trigger: "#page2",
    // markers: true,
    scrub: 3,
    start: "top -30%",
    end: "top -80%",
  },
});

let tl2 = gsap.timeline();

tl2.to("#product", {
  rotate: "0deg",
    duration: 3,
    top: "100%",
    right: "-30%",

  scrollTrigger: {
    trigger: ".page4",
    // markers: true,
      start: "top 60%",
    end: "top 10%",
    scrub: 3,
  },
});

