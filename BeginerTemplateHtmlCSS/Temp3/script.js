let main1 = document.querySelector("main");
let main2 = document.querySelector(".main");
let subminBtn = document.querySelector(".subBtn");

subminBtn.addEventListener("click",function(){
    main1.style.display="none";

    main2.style.display="inline-block"
})