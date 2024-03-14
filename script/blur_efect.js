var cards = document.getElementsByClassName("cardimg");

// Card 1
cards[0].addEventListener("mouseover",()=>{
    cards[0].className = "cardimg tvbox outline"
    cards[1].style.filter = "blur(5px)";
    cards[2].style.filter = "blur(5px)";
})

cards[0].addEventListener("mouseout",()=>{
    cards[0].className = "cardimg tvbox"
    cards[1].style.filter = "blur(0px)";
    cards[2].style.filter = "blur(0px)";
})
// Card 2
cards[1].addEventListener("mouseover",()=>{
    cards[1].className = "cardimg smart_tv outline"
    cards[0].style.filter = "blur(5px)";
    cards[2].style.filter = "blur(5px)";
})

cards[1].addEventListener("mouseout",()=>{
    cards[1].className = "cardimg smart_tv"
    cards[0].style.filter = "blur(0px)";
    cards[2].style.filter = "blur(0px)";
})
// Card 3
cards[2].addEventListener("mouseover",()=>{
    cards[2].className = "cardimg celular outline"
    cards[1].style.filter = "blur(5px)";
    cards[0].style.filter = "blur(5px)";
})

cards[2].addEventListener("mouseout",()=>{
    cards[2].className = "cardimg celular"
    cards[1].style.filter = "blur(0px)";
    cards[0].style.filter = "blur(0px)";
})

