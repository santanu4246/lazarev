function locomotiveanimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
locomotiveanimation()
function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
loadingAnimation()
function navanimation() {
    let navmainHeading = document.querySelectorAll(".nav-mainHeading")
    let nav = document.querySelector("nav")
    navmainHeading.forEach((h4) => {
        h4.addEventListener("mouseenter", () => {
            let tl = gsap.timeline()
            tl.to("#nav-bottom", {
                height: "21vh"
            })
            tl.to(".nav-part2 h5", {
                display: "block"
            })
            tl.to(".nav-part2 h5 span", {
                y: 0,
                stagger: {
                    amount: 0.4
                }
            })
        })
    })
    nav.addEventListener("mouseleave", () => {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}
navanimation()

function page2Animation() {
    let rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach((elems) => {
        elems.addEventListener("mouseenter", () => {
            gsap.to(elems.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elems.addEventListener("mouseleave", () => {
            gsap.to(elems.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elems.addEventListener("mousemove", (dets) => {
            gsap.to(elems.childNodes[3], {
                x: dets.x - elems.getBoundingClientRect().x - 60,
                y: dets.y - elems.getBoundingClientRect().y - 100
            })
        })
    })
}
page2Animation()

function page3VideoAnimation() {
    let page3Center = document.querySelector(".page3-center")
    let video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", () => {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", () => {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
}
page3VideoAnimation()

function page4Animation() {
    let sections = document.querySelectorAll(".sec-right")
    sections.forEach((elem) => {
        // console.log(elem.childNodes[2]);
        elem.addEventListener("mouseenter", () => {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", () => {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].load()
        })
    })
}
page4Animation()

function page5Animation() {
    let page5right = document.querySelectorAll(".page5-right-left");

    page5right.forEach((elem) => {
        let video = elem.childNodes[7];
        elem.addEventListener("mouseenter", () => {
            gsap.to(video, { opacity: 1, height: "75%", duration: 0.4, ease: "power2.inOut" });
            video.play()
        });
        elem.addEventListener("mouseleave", () => {
            gsap.to(video, { opacity: 0, height: "50%", duration: 0.4, ease: "power2.inOut", onComplete: () => video.load() });
        });
    });
}
page5Animation()

function page7Animation() {
    gsap.from("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}
page7Animation()



