const item = document.getElementById("js--item");
const itemGrabbed = document.getElementById("js--item-grabbed")
itemGrabbed.setAttribute("visible", false);
const yellowSpheres = document.getElementsByClassName("js--sphere");
const invisibleBox = document.getElementById("js--invisible-box");
let grabbed = false;

item.onmouseenter = function () {
  if(item.getAttribute("visible") === true){
    item.setAttribute("visible", false);
    itemGrabbed.setAttribute("visible", true);
    grabbed = true;
    pickaxeGrabbed.setAttribute("visible", false);
    woodChop = false;
  }
}

for (let index = 0; index < yellowSpheres.length; index++) {
  yellowSpheres[index].onmouseenter = function () {
    if (yellowSpheres[index].getAttribute("visible") === false || grabbed === false) {
      return;
    }
    let position = yellowSpheres[index].getAttribute("position");
    position.y = position.y + 1;
    yellowSpheres[index].setAttribute("visible", false);
    invisibleBox.setAttribute("position", position);
    invisibleBox.setAttribute("visible", true);
    itemGrabbed.setAttribute("visible", false);
    grabbed = false;
    console.log('hello')
  }

}

const trees = document.getElementsByClassName("js-tree");
let wood = 0;
const pickaxe = document.getElementById("js--pickaxe");
const pickaxeGrabbed = document.getElementById("js--pickaxe-grabbed");
pickaxeGrabbed.setAttribute("visible", false);

pickaxe.onmouseenter = function(){
  if(pickaxe.getAttribute("visible") === true){
    pickaxe.setAttribute("visible", false);
    pickaxeGrabbed.setAttribute("visible", true);
    itemGrabbed.setAttribute("visible", false);
    woodChop = true;
  }
}

let woodChop = false;

for (let index = 0; index < trees.length; index++) {
  trees[index].onmouseenter = function(){
    if(trees[index].getAttribute("visible") === true && woodChop === true){
      trees[index].setAttribute("visible", false);
      wood = wood + 1;
      document.getElementById("js--wood").innerText = wood
    }
  
  }
  
}

