console.log("Hello_World");

const images = document.getElementsByName("images");
console.log(images)
const imageHover = function(){
    const images_arr = Array.from(images);
    images_arr.map((element) => {
        element.addEventListener("mouseover", function(){element.style.margin = "0px";});
        element.addEventListener("mouseleave", function(){element.style.margin = "25px";})
    })
}

imageHover();