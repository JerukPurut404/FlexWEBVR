const cursor = document.getElementById("js--cursor");

//Spheres

/* muis word rood (Cursor) */
const redSphere = document.getElementById("js--sphere--red");
redSphere.onmouseleave = function(){
    cursor.setAttribute("color", "red");
}
/* muis word groen (Cursor) */
const greenSphere = document.getElementById("js--sphere--green");
greenSphere.onmouseleave = function(){
    cursor.setAttribute("color", "green");

}
/* muis word blauw (Cursor) */
const blueSphere = document.getElementById("js--sphere--blue");
blueSphere.onmouseleave = function(){
    cursor.setAttribute("color","blue");

}
/* muis word yellow (Cursor) */
const yellowSphere = document.getElementById("js--sphere--yellow");
yellowSphere.onmouseleave = function(){
    cursor.setAttribute("color","yellow");


}
/* muis word purple (Cursor) */
const purpleSphere = document.getElementById("js--sphere--purple");
purpleSphere.onmouseleave = function(){
    cursor.setAttribute("color","purple");   

}
/* muis word orange (Cursor) */
const orangeSphere = document.getElementById("js--sphere--orange");
orangeSphere.onmouseleave = function(){
    cursor.setAttribute("color","orange");   

}
/* muis word black (Cursor) */
const blackSphere = document.getElementById("js--sphere--black");
blackSphere.onmouseleave = function(){
    cursor.setAttribute("color","black");    
}

/* muis word brown (Cursor) */
const brownSphere = document.getElementById("js--sphere--brown");
brownSphere.onmouseleave = function(){
    cursor.setAttribute("color","brown");    
}


/* muis word pink (Cursor) */
const pinkSphere = document.getElementById("js--sphere--pink");
pinkSphere.onmouseleave = function(){
    cursor.setAttribute("color","pink");    
}



//boxes
const boxes = document.getElementsByClassName("js--box");
//laat de variable i bij 0 beginnen, 
for(let i = 0; i < boxes.length; i++){
    boxes[i].onmouseenter = function(){
        boxes[i].setAttribute("color",cursor.getAttribute("color"));
        
    }
}