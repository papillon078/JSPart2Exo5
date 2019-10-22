function replaceImage(imgNbr){
let path = 'assets/img/'+imgNbr+'_2.jpg';
let oldImage = document.getElementById(imgNbr);
oldImage.setAttribute("src", path);
}
function reloadImg(imgNbr){
  let path = 'assets/img/'+imgNbr+'.jpg';
  let oldImage = document.getElementById(imgNbr);
  oldImage.setAttribute("src", path);
}
