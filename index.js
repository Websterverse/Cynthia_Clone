const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function FirstAnim() {

    var tl = gsap.timeline();


    tl.from("#nav", {

        y: '-10',
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut


    })


        .to(".boundelem", {

            y: 0,
            duration: 1,
            ease: Expo.easeInOut,
            stagger: .2,
            delay: -1
        })

        .from("#small_heading", {
            y: "-10",
            duration: 2,
            ease: Expo.easeInOut,
            opacity: 0,
            delay: -1

        })



        .from("#home_footer", {
            y: "-10",
            duration: 1.5,
            ease: Expo.easeInOut,
            opacity: 0,
            delay: -1

        })








}



FirstAnim();



function follower() {

    document.addEventListener("mousemove", function (dets) {

        // console.log(dets.clientX , dets.clientY);

        document.querySelector("#min-circle").style.transform = `translate(${dets.clientX
            }px , ${dets.clientY}px) scale(${xscale} , ${yscale})`

    })

}

follower();

var xscale = 1;
var yscale = 1;

var xprev = 0;
var yprev = 0;

function circlesquee() {

    window.addEventListener("mousemove", function (dets) {

        var xdiff = dets.clientX - xprev;

        var ydiff = dets.clientY - yprev;


        var xscale = gsap.utils.clamp(.5, 1.5, xdiff);
        var yscale = gsap.utils.clamp(.5, 1.5, ydiff);




        xprev = dets.clientX;
        yprev = dets.clientY;

        follower(xscale, yscale);

    




    })



}

circlesquee();


document.querySelectorAll(".elem").forEach(function (elem) {

    var diffrot = 0;
    var rotate = 0;

    elem.addEventListener("mousemove", function (dets) {

        var diff = dets.clientY - elem.getBoundingClientRect().top;

        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        var li = elem.querySelector("img");
        gsap.to(li, {
            opacity: 1,
            ease: Power1,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot),
            duration: 0.5,
        });

    });




    elem.addEventListener("mouseleave", function (dets) {

        gsap.to(elem.querySelector("img"), {

            opacity: 0,
            ease: Power1
        })


    })

























});







