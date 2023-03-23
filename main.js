/*

  다음과 같은 조건을 만족하는 캐로우셀을 완성해주세요!

  📌 좌측 화살표 클릭했을 때 이전 이미지를 보여주세요.
  📌 우측 화살표 클릭했을 때에는 다음 이미지를 보여주세요.
  📌 마지막 이미지에서 우측 화살표를 누를 경우, 첫번째 이미지를 보여주세요.
  📌 첫번째 이미지에서 좌측 화살표를 누를 경우, 마지막 이미지를 보여주세요.
  📌 이미지 하단의 점을 누를 경우, 해당 순번의 이미지를 보여주세요.

*/
const imageBox = document.querySelector(".image-box");

const images = document.querySelectorAll("img");

const rightArrow = document.querySelector(".fa-arrow-right");

const leftArrow = document.querySelector(".fa-arrow-left");

const slideWidth = images[0].clientWidth + 10;

const dots = document.querySelectorAll(".dot-item");

let dotIndex = 0;

let slideIndex = 0;

dots[0].style.backgroundColor = "black";

function slide(){
    for(let i = 0; i < images.length; i++){
        images[i].style.transform = `translateX(${-slideWidth * slideIndex}px)`;  
    };
};

function nextSlide(){
    if(slideIndex === images.length - 1){
        slideIndex = 0;
        dotIndex = 0;
    } else {
        slideIndex++;
        dotIndex++;
    };
    slide();
    dotColor();
};

rightArrow.addEventListener("click",nextSlide);

function prevSlide(){
    if(slideIndex === 0){
        slideIndex = images.length - 1;
        dotIndex = images.length - 1;
      } else {
        slideIndex--;
        dotIndex--;
      };
    slide();
    dotColor();
};

leftArrow.addEventListener("click",prevSlide);

function dotColor(){
    for(let i = 0; i < dots.length - 1; i++){
        dots[i].style.backgroundColor = "grey";
        if(dotIndex === slideIndex){
            dots[dotIndex].style.backgroundColor = "black";
            if(dotIndex != i){
                dots[i].style.backgroundColor = "grey";
            } else if(dotIndex === 4){
                dots[dotIndex].style.backgroundColor = "black";
            } else {
                dots[dots.length - 1].style.backgroundColor = "grey";
            }
        }
    }
};


(function indicatorClick(){
    for(let i = 0; i < dots.length; i++){
        dots[i].addEventListener("click", function () {
            if (i < slideIndex){
                    slideIndex = i;
                    slide();
                    dotIndex = i;
                    dotColor();
            } else if(i > slideIndex){
                slideIndex = i;
                slide();
                dotIndex = i;
                dotColor();
            }
        });
    };
}());

