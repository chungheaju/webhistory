const allMenu = document.querySelector(".all-menu"),
  allMenuWrapper = document.querySelector(".all-menu-wrapper"),
  allMenuMask = document.querySelector(".all-menu-mask"),
  allMenuClose = document.querySelector(".all-menu-close");
// console.log(allMenuClose)

// all-menu버튼이 클릭되면
// - 전체메뉴 모달창과 mask-layer가 나타난다.
allMenu.addEventListener("click", function () {
  allMenuWrapper.classList.add("active");
  allMenuMask.classList.add("active");
});
// all-menu-close버튼이 클릭되면(click event)
// - 전체메뉴 모달창과 mask layer가 사라진다.
allMenuClose.addEventListener("click", function () {
  allMenuWrapper.classList.remove("active");
  allMenuMask.classList.remove("active");
});
// 모바일 버튼이 클릭되면
// - 1. 모바일 메뉴가 생기고
// - 2. 모바일버튼이 x로 변환됨
const mbBtn = document.querySelector(".mb-bt"),
  mbNav = document.querySelector(".mb-nav"),
  mbMenuMask = document.querySelector(".mb-menu-mask");

mbBtn.addEventListener("click", function (event) {
  event.preventDefault(); //a태그의 링크를 막아준다.
  mbNav.classList.toggle("active");
  mbMenuMask.classList.toggle("active");
  mbBtn.classList.toggle("active");
  mbMenuList.forEach(function (list, index) {
    list.style.height = "55px";
    mbMainMenu[index].classList.remove("open");
  });
});

// 모바일 서브메뉴 펼치기(아코디언)기능
const mbMenuList = document.querySelectorAll(".mb-menu > li"),
  mbSubMenu = document.querySelectorAll(".mb-subMenu"),
  mbMainMenu = document.querySelectorAll(".mb-mainMenu");

// 펼쳐질 서브메뉴의 높이값 저장
let mbSubmenuHeight = []; // 배열선언

// 서브메뉴의 높이값을 계산하여 배열값으로 저장
mbSubMenu.forEach(function (list, index) {
  console.log(list.querySelectorAll("li"));
  let count = list.querySelectorAll("li").length;
  console.log(count);
  mbSubmenuHeight[index] = 52 * count + 22;
});
console.log(mbSubmenuHeight);

// 모바일메뉴(li>a(.mb-mainMenu))클릭했을 때
mbMainMenu.forEach(function (mainList, idx) {
  mainList.addEventListener("click", function (e) {
    e.preventDefault();
    mainList.classList.toggle("open");
    let isOpen = mainList.classList.contains("open");
    if (isOpen) {
      let subMenuHeight = mbSubmenuHeight[idx];
      // console.log(subMenuHeight)
      mbMenuList[idx].style.height = `${subMenuHeight + 55}px`;
    } else {
      mbMenuList[idx].style.height = `55px`;
    }
  });
});

// 화면사이즈 체크
window.addEventListener("resize", function () {
  let temp = window.innerWidth;
  console.log(temp);
  if (temp > 1220) {
    mbNav.classList.remove("active");
    mbMenuMask.classList.remove("active");
    mbBtn.classList.remove("active");
    mbMenuList.forEach(function (list, index) {
      list.style.height = "55px";
      list.classList.remove("open");
    });
  } else {
    allMenuWrapper.classList.remove("active");
    allMenuMask.classList.remove("active");
  }
});

let swVisual = new Swiper(".sw-visual", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: "fade",
  speed: 2500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiperStart = document.querySelector(".swiper-start");
swiperStart.addEventListener("click", function (e) {
  e.preventDefault();
  this.classList.toggle("play");
  let isPlay = this.classList.contains("play");
  if (isPlay) {
    //isPlay가 true==>.스와이퍼스타트요소에
    //play클래스명이 존재한다.
    // 슬라이드멈춤
    swVisual.autoplay.stop();
  } else {
    // 슬라이드재생
    swVisual.autoplay.start();
  }
});

let swBanner = new Swiper(".sw-banner", {
  // slidesPerView: 6,
  // spaceBetween: 13,
  slidesPerView: "auto",
  navigation: {
    prevEl: ".banner-back",
    nextEl: ".banner-forward",
  },
  autoplay: true,
  rewind: true,
});
// 배너 슬라이드 일시멈춤 버튼
const bannerPlay = document.querySelector(".banner-play");
bannerPlay.addEventListener("click", function () {
  let spanEl = this.querySelector("span");
  let spanEl = this.querySelector("span");
  console.log(spanEl);
  let textContent = spanEl.textContent;
  console.log(txtContent);
  if (txtContent == "play-arrow") {
    spanEl.textContent = "pause";
    swBanner.autoplay.start();
  } else {
    spanEl.textContent = "play_arrow";
    swBanner.autoplay.stop();
  }
});

// 화면을 위로 이동
const goTop = document.querySelector(".gotop");
goTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
