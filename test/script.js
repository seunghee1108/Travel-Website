const sliderContainer = document.querySelector('.slider-container');
const sliders = document.querySelectorAll('.slider');
const totalSlides = sliders.length;
let currentIndex = 0;
let timer; // 타이머 변수

function showSlide(index) {
if (index < 0) {
index = totalSlides - 1;
} else if (index >= totalSlides) {
index = 0;
}

// 숨긴 모든 슬라이드를 숨김
sliders.forEach(slider => {
slider.style.display = 'none';
});

// 현재 인덱스의 슬라이드만 표시
sliders[index].style.display = 'block';
currentIndex = index;

// 이전 타이머를 클리어하고 3초 뒤에 다음 슬라이드로 이동하는 타이머 시작
clearTimeout(timer);
timer = setTimeout(nextSlide, 3000);
}

function nextSlide() {
showSlide(currentIndex + 1);
}

function prevSlide() {
showSlide(currentIndex - 1);
}

// 초기로드 시 첫 번째 슬라이드 표시
showSlide(currentIndex);

// 이전 및 다음 버튼 이벤트 처리
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// prevBtn.addEventListener('click', () => {
// showSlide(currentIndex - 1);
// clearTimeout(timer); // 버튼 클릭 시 타이머 클리어
// });

// nextBtn.addEventListener('click', () => {
// showSlide(currentIndex + 1);
// clearTimeout(timer); // 버튼 클릭 시 타이머 클리어
// });
