var loadingtext = document.querySelector('.counter>h1');
var load = 0;
var int = setInterval(() => {
    load = load + 1;
    if (load > 99) {
        clearInterval(int)
        console.log(load)
    }
    loadingtext.innerHTML = load
}, 20)


gsap.to(".line",{
    height: "100vh",
    duration: 1
})

gsap.to(".counter",{
    top: "60%",
    duration: 1,
    delay: 1
})


var tl = gsap.timeline({
    delay: 3
})

tl.to(".counter",{
    display: "none"
})

tl.to(".images",{
    top: "10%"
})

tl.to("#nav",{
    justifyContent: "space-between",
    duration: 1,
})

tl.to("#nav2",{
    display: "initial"
})

tl.to(".paragraphs",{
    display: "flex"
})

tl.to("#main>h1",{
    transform: "rotateX(0deg)",
    duration: 1
})