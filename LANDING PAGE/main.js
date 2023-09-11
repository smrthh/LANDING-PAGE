
gsap.from(".navbar img , h5" , {

    opacity : 0 ,
    delay : 1 ,
    duration : 1 ,
    stagger : 0.5 ,
})

gsap.from(".small-img-text h1" , {
    marginTop: "10rem" ,
    delay : 0.009 ,
    duration : 0.5,

    scrollTrigger : {
        trigger : ".small-img-text" ,
        scroller : ".main" , 
    }
})

gsap.from(".main-page-middle" , {
    y : -1000 ,
    delay : 0.001, 
    duration : 0.5 ,
    stagger : 0.2 ,
})

gsap.from(".text-section h1" , {
    x : -1000 ,
    opacity : 0 ,
    delay : 0.008, 
    duration : 0
})

gsap.from(".small-img-section" , {
    scale: 0, 
    opacity : 0 ,
    delay : 0.5, 
    duration :0.001 , 
    stagger : 0.2
})


