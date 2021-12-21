console.log("Jay shree ram");

let movementField1 = document.getElementById("name_assets");

movementField1.addEventListener("mousemove",function(e)
{
    let x = e.clientX;
    let y = e.clientY;
    // console.log(x,y);

    let asset2 = document.getElementById("asset2");
    let asset3 = document.getElementById("asset3");
    
    asset2.style.transform = `translate(${x*0.02}px,${y*0.08}px)`;
    asset3.style.transform = `translate(-${x*0.02}px,-${y*0.08}px)`;
    asset2.style.transformStyle = "preserve-3d";
    asset3.style.transformStyle = "preserve-3d";

});

let movementField2 = document.getElementById("image_intro");

movementField2.addEventListener("mousemove",function(e)
{
    let x = e.clientX;
    let y = e.clientY;
    // console.log(x,y);

    let asset4 = document.getElementById("asset4");
    let asset5 = document.getElementById("asset5");

    asset4.style.transform = `translate(${x*0.02}px,${y*0.02}px)`; 
    asset5.style.transform = `translate(-${x*0.02}px,-${y*0.02}px)`; 
    asset4.style.transformStyle = "preserve-3d";
    asset5.style.transformStyle = "preserve-3d";
});

let card_transition = document.querySelectorAll(".project-card");
console.log(card_transition);

card_transition.forEach((element) => {

    element.style.transitionDuration = "800ms";

    element.addEventListener("mouseover", function()
    {
        element.style.transform = "scale3d(1.05, 1.05, 1.01)";
        
    })

    element.addEventListener("mouseout", function()
    {
        element.style.transform = "scale3d(1, 1, 1)";
    })
});






