// ------------------------------------
// M3: Tương tác với JavaScript
// ------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // Tải icon từ thư viện lucide sau khi DOM đã sẵn sàng
    // Thư viện lucide cần được tải trong HTML
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // ------------------------------------
    // M3.1: Thư viện ảnh đơn giản
    // ------------------------------------
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const primaryColor = 'var(--primary-color)';
    
    // Gán sự kiện click cho các thumbnail
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const fullSrc = this.getAttribute('data-full-src');
            
            // 1. Cập nhật ảnh lớn
            mainImage.src = fullSrc;
            
            // 2. Cập nhật viền (active state)
            thumbnails.forEach(t => {
                t.style.borderColor = 'transparent'; // Reset tất cả
            });
            this.style.borderColor = primaryColor; // Đặt viền cho ảnh đang được chọn
        });
    });

    // ------------------------------------
    // M3.3: Tư duy sáng tạo - Intersection Observer
    // Hiệu ứng fade-in khi các Feature Section xuất hiện
    // ------------------------------------
    const featureCards = document.querySelectorAll('.feature-card');
    
    const observerOptions = {
        root: null, // Sử dụng viewport làm root
        rootMargin: '0px',
        threshold: 0.2 // Kích hoạt khi 20% phần tử hiển thị
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Nếu phần tử đang hiển thị trong viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Ngừng quan sát sau khi đã thực hiện animation
                observer.unobserve(entry.target);
            }
        });
    };

    const featureObserver = new IntersectionObserver(observerCallback, observerOptions);

    featureCards.forEach(card => {
        featureObserver.observe(card);
    });
});


// ------------------------------------
// M3.2: Scroll Effect (Header)
// Sự kiện cuộn có thể được gán ngoài DOMContentLoaded
// ------------------------------------
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    // Thêm class 'scrolled' nếu cuộn xuống (ví dụ > 50px)
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});