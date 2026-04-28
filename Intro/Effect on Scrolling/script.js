// gsap.from(
//     "#page1", {
//     scale: 0,
//     opacity: 0,
//     duration: 2,
//     scrollTrigger: { // animation works on the basis of scrolling
//         trigger: "#page2",
//         scroller: "body", // mostly same
//         markers: true, // a line when it touches or cross the start-top 60% and end-top 30% given below
//         start: "top 0%",
//         end: "top 30%",
//         scrub: true, // true/false - 1-5 value/0
//         pin: true // to pin the animation
//     }
// })

gsap.to("#page1",{
    transform:"translate(-150%)",
    scrollTrigger:{
        trigger: "#page1",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
})
gsap.to("#page2",{
    transform:"translate(-150%)",
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
})
gsap.from("#page3",{
    transform:"translate(-150%)",
    scrollTrigger:{
        trigger: "#page3",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
})