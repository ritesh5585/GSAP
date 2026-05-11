var initialPath = `M 10 100 Q 500 100 990 100`
var finalPath = `M 10 100 Q 500 100 990 100`

let main = document.querySelector(".main")
let cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", function (dets) {
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.2,
        ease: "power2.out"
    })
})

main.addEventListener("mouseleave", function () {

    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.2,
        ease: "elastic.out(1,0,2)"
    })
})

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.5
    })
})

