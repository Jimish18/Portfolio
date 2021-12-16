console.log("Jay shree ram");

let movementField = document.getElementById("name_assets");

movementField.addEventListener("mousemove",function(e)
{
    let x = e.clientX;
    let y = e.clientY;
    // console.log(x,y);

    let asset2 = document.getElementById("asset2");
    let asset3 = document.getElementById("asset3");
    
    asset2.style.transform = `translate(${x*0.02}px,${y*0.08}px)`;
    asset3.style.transform = `translate(-${x*0.02}px,-${y*0.08}px)`;
    asset2.style.transformStyle = "preserve-3d";
})