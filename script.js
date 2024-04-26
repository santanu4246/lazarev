function navanimation(){
let navmainHeading = document.querySelectorAll(".nav-mainHeading")
let nav = document.querySelector("nav")
navmainHeading.forEach((h4)=>{
h4.addEventListener("mouseenter",()=>{
    let tl = gsap.timeline()
    tl.to("#nav-bottom",{
        height:"21vh"
    })
    tl.to(".nav-part2 h5",{
        display:"block"
    })
    tl.to(".nav-part2 h5 span",{
        y:0,
        stagger:{
            amount:0.4
        }
    })
})
})
nav.addEventListener("mouseleave",()=>{
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span",{
        y:25,
        stagger:{
            amount:0.2
        }
    })
    tl.to(".nav-part2 h5",{
        display:"none",
        duration:0.1
    })
    tl.to("#nav-bottom",{
        height:0,
        duration:0.2
    })
})
}
navanimation()

function page2Animation(){
let rightElems = document.querySelectorAll(".right-elem")

rightElems.forEach((elems)=>{
    elems.addEventListener("mouseenter",()=>{
        gsap.to(elems.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    elems.addEventListener("mouseleave",()=>{
        gsap.to(elems.childNodes[3],{
            opacity:0,
            scale:0
        })
    })
    elems.addEventListener("mousemove",(dets)=>{
      gsap.to(elems.childNodes[3],{
        x:dets.x - elems.getBoundingClientRect().x - 50,
        y:dets.y - elems.getBoundingClientRect().y-160
      })
    })
})
}
page2Animation()

function page3VideoAnimation(){
    let page3Center = document.querySelector(".page3-center")
let video = document.querySelector("#page3 video")

page3Center.addEventListener("click",()=>{
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
    })
})
video.addEventListener("click",()=>{
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px"
    })
})
}
page3VideoAnimation()

function page4Animation(){
    let sections = document.querySelectorAll(".sec-right")
sections.forEach((elem)=>{
    // console.log(elem.childNodes[2]);
    elem.addEventListener("mouseenter",()=>{
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave",()=>{
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
            gsap.to(video, { opacity: 1, height: "75%", duration: 0.3, ease: "power2.inOut" });
            video.play();
        });

        elem.addEventListener("mouseleave", () => {
            gsap.to(video, { opacity: 0, height: "50%", duration: 0.3, ease: "power2.inOut", onComplete: () => video.load() });
        });
    });
}

page5Animation();
