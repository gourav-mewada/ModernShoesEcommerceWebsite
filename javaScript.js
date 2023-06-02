document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "#main").style.visibility = "hidden";
        document.querySelector(
          "#loadsection").style.visibility = "visible";
    } else {
        document.querySelector(
          "#loadsection").style.display = "none";
        document.querySelector(
          "#main").style.visibility = "visible";
    }
};

function page1() {


    gsap.from(".element", {

        scrollTrigger: {
            trigger: "#page1",

            toggleActions: "play restart play reverse"

        },
        y: -30,
        opacity: 0,
        stagger: 0.2,


    });

    var boy1 = `<img src="./images/boy1.webp" alt="">`;
    var boy2 = `<img src="./images/boy2.webp" alt="">`;
    var girl1 = `<img src="./images/girl1.webp" alt="">`
    var girl2 = `<img src="./images/girl2.webp" alt="">`

    setInterval(function () {

        document.querySelector("#p1_left").innerHTML = girl1;
        document.querySelector("#p1_right").innerHTML = girl2;
        gsap.from("#p1_left>img", {
            width: "0vw",
            duration: 0.2

        });

        gsap.from("#p1_right>img", {
            width: "0vw",

            duration: 0.2
        });

    }, 2000);



    setInterval(function () {

        document.querySelector("#p1_left").innerHTML = boy1;
        document.querySelector("#p1_right").innerHTML = boy2;
        gsap.from("#p1_left>img", {
            width: "0vw",
            duration: 0.2

        });

        gsap.from("#p1_right>img", {
            width: "0vw",

            duration: 0.2
        });

    }, 4000);
}
page1();

function page2() {

    gsap.from("#p2_top>img", {
        scrollTrigger: {
            trigger: "#p2_top>img",

            start: "top 70%",
            toggleActions: "play restart play reverse"

        },
        opacity: 0,
        x: -50,
        duration: 0.5,



    });

    gsap.from("#p2_top>h1", {

        opacity: 0,
        // stagger:{

        //     each:0.25,
        //     from:"top",
        // },
        x: 50,
        duration: 0.5,
        scrollTrigger: {
            start: "top 70%",
            trigger: "#p2_top",
            toggleActions: "play restart play reverse",

        },

    });



    gsap.from("#p2_left_left>#group", {


        scrollTrigger: {
            start: "top 70%",
            trigger: "#p2_left_left>#group",

        },
        width: "0vw",
        opacity: 0,
        x: -50,




    });

    gsap.from("#p2_left_left>#map", {
        scrollTrigger: {
            start: "top 70%",

            trigger: "#p2_left_left>#map",


        },
        width: "0vw",
        opacity: 0,
        x: -50,
    });


    gsap.from("#p2_left_left>#girl", {

        scrollTrigger: {
            trigger: "#p2_left_left>#girl"
            , start: "top 70%"

        },


        opacity: 0,
        x: -50
    });


    gsap.from("#p2_right_right>img", {

        scrollTrigger: {
            start: "top 60%",
            trigger: "#p2_right_right>img",
            toggleActions: "play restart play reverse"

        },
        top: "50%",
        left: "50%"

    });


    gsap.to("#p2_r_r_bottom>#lowershoes", {

        scrollTrigger: {
            trigger: "#p2_r_r_bottom>#lowershoes",

            start: "top 70%",
            end: "top -55%",
            pin: true,



            toggleActions: "play restart play reverse",
            // toggleActions:"restart pause resume complete",
        },

    })




    gsap.from("#p2_bottom>img", {
        scrollTrigger: {
            trigger: "#p2_bottom>img",
            toggleActions: "play restart play reverse",
        },
        opacity: 0,
        x: -100
        ,
        duration: 0.5,

    });
    for (let i = 1; i <= 4; i++) {
        gsap.from(`#t${i}>h1`, {


            scrollTrigger: {
                // start:"top 70%",
                trigger: `#t${i}>h1`,
                toggleActions: "play restart play reverse"
            },
            x: 100,
            duration: 1
        });


        gsap.from(`#t${i}>h2`, {


            scrollTrigger: {
                trigger: `#t${i}>h2`,
                toggleActions: "play restart play reverse"
            },
            x: 100,
            duration: 1
        });
        gsap.from(`#t${i}>h3`, {


            scrollTrigger: {
                trigger: `#t${i}>h3`,
                toggleActions: "play restart play reverse"
            },
            x: 100,
            duration: 1
        }); gsap.from(`#t${i}>h4`, {


            scrollTrigger: {
                trigger: `#t${i}>h4`,
                toggleActions: "play restart play reverse"
            },
            x: 100,
            duration: 1
        });



    }
    for (let i = 5; i <= 7; i++) {
        gsap.from(`#t${i}>h1`, {


            scrollTrigger: {
                // start:"top 70%",
                trigger: `#t${i}>h1`,
                toggleActions: "play restart play reverse"
            },
            x: -100,
            duration: 1
        });


        gsap.from(`#t${i}>h2`, {


            scrollTrigger: {
                // start:"top 70%",
                trigger: `#t${i}>h2`,
                toggleActions: "play restart play reverse"
            },
            x: -100,
            duration: 1
        });
        gsap.from(`#t${i}>h3`, {


            scrollTrigger: {
                trigger: `#t${i}>h3`,
                toggleActions: "play restart play reverse"
            },
            x: -100,
            duration: 1
        });



    }

}

page2();

function page3() {


    gsap.from("#excellent,#amorti", {

        scrollTrigger: {

            trigger: "#excellent",
            toggleActions: "play restart play reverse"
        },

        y: 50,
        opacity: 0,
        duration: 0.3

    });
    gsap.from("#better,#adh", {

        scrollTrigger: {

            trigger: "#better",
            toggleActions: "play restart play reverse"
        },

        y: 50,
        opacity: 0,
        duration: 0.3

    });


    gsap.from("#resist>h1", {

        scrollTrigger: {

            trigger: "#resist>h1",
            toggleActions: "play restart play reverse"
        },
        x: -70,
        duration: 1
        , opacity: 0
    });

    gsap.from("#resist>#solide", {

        scrollTrigger: {

            trigger: "#resist>#solide",
            toggleActions: "play restart play reverse"
        },
        duration: 0.8,
        x: -50
        , opacity: 0


    });


    gsap.from("#resist>h3", {
        scrollTrigger: {
            trigger: "#resist>h3",
            toggleActions: "play restart play reverse"
        },
        duration: 0.8,
        x: -50
        , opacity: 0
    })

    gsap.from("#aller_plus>h1", {

        scrollTrigger: {

            trigger: "#aller_plus>h1",
            toggleActions: "play restart play reverse"
        },
        x: 70,
        duration: 1
        , opacity: 0
    });

    gsap.from("#aller", {

        scrollTrigger: {

            trigger: "#aller",
            toggleActions: "play restart play reverse"
        },
        duration: 0.8,
        x: 50
        , opacity: 0


    });


    gsap.from("#aller_plus>h3", {
        scrollTrigger: {
            trigger: "#aller_plus>h3",
            toggleActions: "play restart play reverse"
        },
        duration: 0.8,
        x: 50
        , opacity: 0
    })

    setInterval(function () {

        document.querySelector("#white_shoes").src = "./images/st3.webp";
        document.querySelector("#white_black_shoes").src = "./images/st4.webp";


    }, 1000);
    setInterval(function () {
        document.querySelector("#white_shoes").src = "./images/st5.webp";
        document.querySelector("#white_black_shoes").src = "./images/st6.webp";


    }, 3000);
    setInterval(function () {
        document.querySelector("#white_shoes").src = "./images/st1.webp";
        document.querySelector("#white_black_shoes").src = "./images/st2.webp";


    }, 5000);






    document.querySelector("#p3_moving").addEventListener("mouseleave", function () {

        gsap.to("#page3_main", {

            left: "50%",


        });
        gsap.to("#p3_left", {
            width: "50vw",
        })
        gsap.to("#p3_right", {

            width: "50vw",

        });


        gsap.to('#intercept>h1', {


            y: 0,
            opacity: 0,
            stagger: 0.2

        });

        gsap.to("#intercept>h2", {

            y: 0,
            opacity: 0,
            delay: 0.5
        });
        gsap.to('#dribble>h1', {


            y: 0,
            opacity: 0,
            stagger: 0.2

        });

        gsap.to("#dribble>h2", {

            y: 0,
            opacity: 0,
            delay: 0.5
        })




    });




    document.querySelector("#poping_left>i").addEventListener("click", function () {

        document.querySelector("#poping_left").style.display = "none";
        document.querySelector("#poping_left").style.top = "-100%";

    })
    document.querySelector("#poping_right>i").addEventListener("click", function () {

        document.querySelector("#poping_right").style.display = "none";

        document.querySelector("#poping_right").style.top = "-100%";

    })



}

page3();

function page4() {
    gsap.from("#p4_top_txt>h1", {

        scrollTrigger: {

            trigger: "#p4_top_txt>h1",
            toggleActions: "play restart play reverse"
        },
        x: 80,
        duration: 0.8
    });

    gsap.from("#p4_top_txt>h2", {

        scrollTrigger: {

            trigger: "#p4_top_txt>h2",
            toggleActions: "play restart play reverse"
        },
        x: -80,
        duration: 0.8
    });


    var football = document.querySelector("#football");

    TweenMax.to(football, 7, { rotation: "800", repeat: -1 });

    gsap.to("#football", {

        left: "100%",
        duration: 7,
        repeat: -1

    });
gsap.from("#p4_left>h3",{


scrollTrigger:{
trigger:"#p4_left>h3",
toggleActions:"play restart play reverse"

},

y:100,
color:'red',
opacity:0,duration:1

});
gsap.from("#p4_left>h4",{


    scrollTrigger:{
    trigger:"#p4_left>h4",
    toggleActions:"play restart play reverse"

    },

    y:100,
    color:'red',
    opacity:0
    ,delay:1

    });
}

page4();

function page5() {
    gsap.from("#p5_top_txt>h1", {

        scrollTrigger: {

            trigger: "#p5_top_txt>h1",
            toggleActions: "play restart play reverse"
        },
        x: 80,
        duration: 0.8
    });

    gsap.from("#p5_top_txt>h2", {

        scrollTrigger: {

            trigger: "#p5_top_txt>h2",
            toggleActions: "play restart play reverse"
        },
        x: -80,
        duration: 0.8
    });




    for (let k = 1; k <= 6; k++) {


        document.querySelector(`#slab${k}`).addEventListener("mouseenter", function () {

            document.querySelector(`#slab${k}>#shoe${k}`).style.top = "0%";


        });
        document.querySelector(`#slab${k}`).addEventListener("mouseleave", function () {
            document.querySelector(`#slab${k}>#shoe${k}`).style.top = "20%";

        });


    }



    for (let l = 1; l <= 6; l++) {
        gsap.from(`#slab_txt${l}>h1>span`, {

            scrollTrigger: {


                trigger: `#slab_txt${l}>h1>span`,
                toggleActions: "play restart play reverse",
            }, opacity: 0,

            y: 50,
            ease: Power1.easeOut,
            stagger: 0.2,



        });
    }

    gsap.to("#p5_b_txt_top", {

        scrollTrigger: {
            trigger: "#p5_b_txt_top"
            , toggleActions: "play restart play reverse"
        },
        width: "30vw",
        duration: 0.5
    });




    gsap.to("#p5_b_txt_bottom>img", {
        scrollTrigger: {
            trigger: "#p5_b_txt_bottom>img"
            , toggleActions: "play restart play reverse"
        },

        opacity: 1,
        width: "15vw"


    })



    gsap.from("#p5_b_txt_bottom i", {
        scrollTrigger: {
            trigger: "#p5_b_txt_bottom i"
            , toggleActions: "play restart play reverse"
        },
        delay: 0.5,
        color: "red",
        duration: 2,

    })



}
page5();











// non responsive js



function red_pop() {
    document.querySelector("#poping_right").style.top = "-100%";

    document.querySelector("#poping_right").style.display = "none";

    gsap.to("#poping_left", {
        top: '-10%',
        display: 'flex',
        ease: Power2.easeOut
        , duration: 0.5
        ,

        delay: 0.2


    });

}
function grey_pop() {
    document.querySelector("#poping_left").style.display = "none";

    document.querySelector("#poping_left").style.top = "-100%";


    gsap.to("#poping_right", {
        display: 'flex',

        top: '-10%',
        ease: Power2.easeOut
        , duration: 0.5
        , delay: 0.2,


    });

}

function pop_scroll() {
    window.scrollTo({
        top: 5500,
        behavior: 'smooth'


    });
}


function myFunction2(y) {
    if (y.matches) {
        document.querySelector("#p3_moving").addEventListener("mousemove", function (det) {


            if (det.clientX <= 313) {


                gsap.to("#p3_left", {
                    width: "62vw",
                })
                gsap.to("#p3_right", {

                    width: "38vw",

                });

                gsap.to("#page3_main", {

                    left: "62%",


                });

                gsap.to('#intercept>h1', {


                    y: -100,
                    opacity: 1,
                    stagger: 0.2

                });

                gsap.to("#intercept>h2", {

                    y: -100,
                    opacity: 0.5,
                    stagger: 0.2,
                    delay: 0.5
                })





            }

            else if (det.clientX >= 937) {
                gsap.to("#p3_left", {
                    width: "38vw",
                })
                gsap.to("#p3_right", {

                    width: "62vw",

                });



                gsap.to("#page3_main", {

                    left: "37%",


                });

                gsap.to('#dribble>h1', {


                    y: -100,
                    opacity: 1,
                    stagger: 0.2

                });

                gsap.to("#dribble>h2", {

                    y: -100,
                    opacity: 0.5,
                    stagger: 0.2,
                    delay: 0.5
                })


            }
            else {
                gsap.to("#page3_main", {

                    left: "50%",


                });
                gsap.to("#p3_left", {
                    width: "50vw",
                })
                gsap.to("#p3_right", {

                    width: "50vw",

                });


                gsap.to('#intercept>h1', {


                    y: 0,
                    opacity: 0,
                    stagger: 0.2

                });

                gsap.to("#intercept>h2", {

                    y: 0,
                    opacity: 0,
                    delay: 0.5
                });
                gsap.to('#dribble>h1', {


                    y: 0,
                    opacity: 0,
                    stagger: 0.2

                });

                gsap.to("#dribble>h2", {

                    y: 0,
                    opacity: 0,
                    delay: 0.5
                })




            }





        });

        document.querySelector(".table").addEventListener("click", function (dets) {

            pop_scroll_non_res();
            if (dets.x <= 680) {
                red_pop_non_res();

            }
            else {
                grey_pop_non_res();



            }

        });
        document.querySelector("#poping_left>i").addEventListener("click", function () {

            document.querySelector("#poping_left").style.display = "none";
            document.querySelector("#poping_left").style.top = "-100%";

        })
        document.querySelector("#poping_right>i").addEventListener("click", function () {

            document.querySelector("#poping_right").style.display = "none";

            document.querySelector("#poping_right").style.top = "-100%";

        });






    } else {
        console.log("hello res table");

    }
}

var y = window.matchMedia("(min-width: 500px)")
myFunction2(y)





// responsive js
function pop_scroll_non_res() {
    window.scrollTo({
        top: 2650,
        display: "flex",
        behavior: 'smooth'


    });
}

function red_pop_non_res() {
    document.querySelector("#poping_right").style.display = "none";

    document.querySelector("#poping_right").style.top = "-100%";

    gsap.to("#poping_left", {
        top: '55%',
        display: 'flex',
        ease: Power2.easeOut
        , duration: 0.5
        ,

        delay: 0.2


    });


}

function grey_pop_non_res() {
    document.querySelector("#poping_left").style.display = "none";
    document.querySelector("#poping_left").style.top = "-100%";

    gsap.to("#poping_right", {

        display: 'flex',
        top: '55%',
        ease: Power2.easeOut
        , duration: 0.5
        , delay: 0.2,


    });



}


function myFunction(x) {
    if (x.matches) {
        // page5 js
        gsap.to("#p5_b_txt_top", {

            scrollTrigger: {
                trigger: "#p5_b_txt_top"
                , toggleActions: "play restart play reverse"
            },
            width: "70vw",
            duration: 0.5
        });
        // page3 js

        document.querySelector("#p3_moving").addEventListener("mousemove", function (det) {
            if (det.clientX <= 115) {


                gsap.to("#p3_left", {
                    width: "62vw",
                })
                gsap.to("#p3_right", {

                    width: "38vw",

                });

                gsap.to("#page3_main", {

                    left: "62%",


                });

                gsap.to('#intercept>h1', {


                    y: -100,
                    opacity: 1,
                    stagger: 0.2

                });

                gsap.to("#intercept>h2", {

                    y: -100,
                    opacity: 0.5,
                    stagger: 0.2,
                    delay: 0.5
                })





            }

            else if (det.clientX >= 340) {
                gsap.to("#p3_left", {
                    width: "38vw",
                })
                gsap.to("#p3_right", {

                    width: "62vw",

                });



                gsap.to("#page3_main", {

                    left: "37%",


                });

                gsap.to('#dribble>h1', {


                    y: -100,
                    opacity: 1,
                    stagger: 0.2

                });

                gsap.to("#dribble>h2", {

                    y: -100,
                    opacity: 0.5,
                    stagger: 0.2,
                    delay: 0.5
                })


            }
            else {
                gsap.to("#page3_main", {

                    left: "50%",


                });
                gsap.to("#p3_left", {
                    width: "50vw",
                })
                gsap.to("#p3_right", {

                    width: "50vw",

                });


                gsap.to('#intercept>h1', {


                    y: 0,
                    opacity: 0,
                    stagger: 0.2

                });

                gsap.to("#intercept>h2", {

                    y: 0,
                    opacity: 0,
                    delay: 0.5
                });
                gsap.to('#dribble>h1', {


                    y: 0,
                    opacity: 0,
                    stagger: 0.2

                });

                gsap.to("#dribble>h2", {

                    y: 0,
                    opacity: 0,
                    delay: 0.5
                })




            }





        });

        document.querySelector("#p3_moving").addEventListener("mouseleave", function () {

            gsap.to("#page3_main", {

                left: "50%",


            });
            gsap.to("#p3_left", {
                width: "50vw",
            })
            gsap.to("#p3_right", {

                width: "50vw",

            });


            gsap.to('#intercept>h1', {


                y: 0,
                opacity: 0,
                stagger: 0.2

            });

            gsap.to("#intercept>h2", {

                y: 0,
                opacity: 0,
                delay: 0.5
            });
            gsap.to('#dribble>h1', {


                y: 0,
                opacity: 0,
                stagger: 0.2

            });

            gsap.to("#dribble>h2", {

                y: 0,
                opacity: 0,
                delay: 0.5
            })




        });





        document.querySelector(".table").addEventListener("click", function (dets) {
            pop_scroll();
            if (dets.x < 215) {
                red_pop();

            }
            else {
                grey_pop();

            }


        });






        document.querySelector("#poping_left>i").addEventListener("click", function () {
            document.querySelector("#poping_left").style.top = "-100%";

            document.querySelector("#poping_left").style.display = "none";

        });
        document.querySelector("#poping_right>i").addEventListener("click", function () {

            document.querySelector("#poping_right").style.top = "-100%";

            document.querySelector("#poping_right").style.display = "none";

        });

        for (let k = 1; k <= 6; k++) {


            document.querySelector(`#slab${k}`).addEventListener("mouseenter", function () {

                document.querySelector(`#slab${k}>#shoe${k}`).style.top = "10%";


            });
            document.querySelector(`#slab${k}`).addEventListener("mouseleave", function () {
                document.querySelector(`#slab${k}>#shoe${k}`).style.top = "40%";

            });


        }

     
  


    } else {
        console.log("hello");

    }
}

var x = window.matchMedia("(max-width: 450px)")
myFunction(x)



