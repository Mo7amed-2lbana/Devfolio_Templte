let links = document.querySelectorAll(".home nav ul .nav-item .nav-link");
let bars = document.getElementById("Bars");
let firstSpan = document.querySelector('#Bars .first');
let secondSpan = document.querySelector('#Bars .second');
let thirdSpan = document.querySelector('#Bars .third');



// change active class
// [1] click  
links.forEach((a)=>{
    a.onclick = function(){
        links.forEach((a)=>{
            a.classList.remove("active");
        });
        a.classList.add("active");
    };
});



// change style of bars 
bars.onclick = function(){

    bars.classList.contains("show") ? bars.classList.remove("show"):bars.classList.add("show");
}

bars.addEventListener("click" , function(){

    if(bars.classList.contains("show")){
        firstSpan.style.transform = "rotate(45deg)";
        firstSpan.style.margin = "0";

        secondSpan.style.display  = "none";
        
        thirdSpan.style.transform = "rotate(-45deg)";
    }else{
        firstSpan.style.transform = "rotate(0)";
        firstSpan.style.marginBottom = "8px";
        
        secondSpan.style.display  = "block";
        
        thirdSpan.style.transform = "rotate(-0)";
    }


});