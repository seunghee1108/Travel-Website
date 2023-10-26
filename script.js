// 슬라이드 제작
// 슬라이더 컨테이너 변수
// slider-container를 통해 html문서에 해당 클래스를 가진 요소를 찾아서 변수에 저장
const sliderContainer = document.querySelector('.slider-container');
// 슬라이더 변수 
// 모든 슬라이더를 나타내는 요소들을 나타낸다.
const sliders = document.querySelectorAll('.slider');
// 슬라이드의 총 개수를 나타내는 변수 
const totalSlides = sliders.length;
// 현재 표시 중인 슬라이드의 인덱스를 나타낸다. 초기값은 0임
let currentIndex = 0;
let timer; // 타이머 변수

// showSlide() :  특정 인덱스의 슬라이드를 표시하는 역할을 함
// 매개변수는 표시하려는 슬라이드의 인덱스를 나타낸다.
function showSlide(index) {
  // 0보다 작은 경우
  // 마지막 슬라이드로 이동하도록 처리된다. 
if (index < 0) {
index = totalSlides - 1;
// index가 슬라이드 총 개수보다 큰 경우,
// 첫번째 슬라이드로 이동하도록 처리
} else if (index >= totalSlides) {
index = 0;
}

// 숨긴 모든 슬라이드를 숨김
sliders.forEach(slider => {
slider.style.display = 'none';
});

// 현재 인덱스의 슬라이드만 표시
sliders[index].style.display = 'block';
//
currentIndex = index;

// 이전 타이머를 클리어하고 3초 뒤에 다음 슬라이드로 이동하는 타이머 시작
clearTimeout(timer);
// nextSlide() : 다음 슬라이드로 이동하는 역할
timer = setTimeout(nextSlide, 3000);
}

function nextSlide() {
  // 호출하여 currentIndex
  // showSlide함수에 현재 인덱스에서 1을 더한 값을 전달
  // currentIndex : 현재 표시 중인 슬라이드의 인덱스를 나타낸다.
showSlide(currentIndex + 1);
}
// preSlide() : 이전 슬라이드로 이동하는 역할
function prevSlide() {
  // 호출하여 
  // slide 함수에 현재 인덱스에서 1을 뺀 값을 전달한다.
showSlide(currentIndex - 1);
}


