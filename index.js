let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    // alert("I was js")
    document.querySelector(".box").innerHTML="<b>HTML,CSS and , JS</b> Enjoy your click"
    // document.querySelector(".box").style.backgroundColor = "lightblue";
    document.getElementsByClassName("box")[0].style.backgroundColor = "lightblue";

    // document.querySelector('img').src = "https://assets.aboutamazon.com/dims4/default/2c9d335/2147483647/strip/true/crop/1999x1125+1+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F15%2F9e%2F17ad1a954fbd9107e1ea46e6e0bc%2Fhow-to-sign-up-for-a-free-prime-membership-trial-hero-v3b.jpg";

    

})