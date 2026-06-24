import './style.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Khởi tạo Swiper
const swiper = new Swiper('.mySwiper', {
  direction: 'vertical', // Trượt dọc
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,      // Cho phép dùng con lăn chuột
  speed: 700,            // Tốc độ lướt (ms) - 700ms tạo cảm giác "đầm" và mượt
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

console.log("Đã nạp xong logic lướt TikTok! 🚀");