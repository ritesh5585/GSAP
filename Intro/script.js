const tl = gsap.timeline()

tl.from("h1",{
    y:-40,
    opacity: 0,
    duration: 0.8,
    delay: 0,
})

tl.from("h4",{
    y:-30,
    opacity: 0,
    duration: 0.3,
    stagger: 0.3,
})
tl.from("h2",{
    y:30,
    opacity: 0,
    duration: 0.5,
    scale: 0.3,
})