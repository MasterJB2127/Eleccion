var slider_content = document.getElementById('box');

// contain images in an array
var image = ['a','b', 'c', 'd','e'];

var i = image.length;


// function for next slide 

function nextImage(){
  if (i<image.length) {
      i= i+1;
  }else{
      i = 1;
  }
    slider_content.innerHTML = "<img class='image' src="+image[i-1]+".jpg>";
}


// function for prew slide

function prewImage(){

  if (i<image.length+1 && i>1) {
      i= i-1;
  }else{
      i = image.length;
  }
    slider_content.innerHTML = "<img class='image' src="+image[i-1]+".jpg>";

}