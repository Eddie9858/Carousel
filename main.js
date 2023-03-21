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

let slideIndex = 0;

dots[0].style.backgroundColor = "grey";

function slide(){
    for(let i = 0; i < images.length; i++){
        images[i].style.transform = `translateX(${-slideWidth * slideIndex}px)`;
    }
};

function nextSlide(){
    if(slideIndex === images.length - 1){
        slideIndex = 0;
        dots[slideIndex].style.backgroundColor = "grey";
        dots[images.length - 1].style.backgroundColor = "black";
    } else {
        slideIndex++;
        dots[slideIndex].style.backgroundColor = "grey";
    }
    slide();
    dots[slideIndex - 1].style.backgroundColor = "black";

};

rightArrow.addEventListener("click",nextSlide);

function prevSlide(){
    if(slideIndex === 0){
        slideIndex = images.length - 1;
        dots[slideIndex].style.backgroundColor = "grey";
        dots[0].style.backgroundColor = "black";

      } else {
        slideIndex--;
        dots[slideIndex].style.backgroundColor = "grey";

      }
    slide();
    dots[slideIndex + 1].style.backgroundColor = "black";
};

leftArrow.addEventListener("click",prevSlide);
