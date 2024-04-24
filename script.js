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
