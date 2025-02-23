
  document.addEventListener("DOMContentLoaded", function () {
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    gsap.registerPlugin(ScrollTrigger);
    
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
    });

    gsap.to(".hero-section h1", {
      x: "-100vw",
      scrollTrigger: {
        trigger: ".hero-section",
        scroller: "[data-scroll-container]",
        start: "top center",
        end: "bottom top",
        scrub: 1
      }
    });

    gsap.to(".hero-section p", {
      x: "-50vw",
      scrollTrigger: {
        trigger: ".hero-section",
        scroller: "[data-scroll-container]",
        start: "top center",
        end: "bottom top",
        scrub: 1
      }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  });
