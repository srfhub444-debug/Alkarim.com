// Premium Floating Sticky Footer Navigation Component
(function() {
    const footerHTML = `
    <style>
        .custom-sticky-footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(2, 44, 34, 0.95);
            backdrop-filter: blur(12px);
            border-top: 1px solid rgba(217, 119, 6, 0.3);
            box-shadow: 0 -10px 25px rgba(0, 0, 0, 0.4);
            padding: 10px 15px;
            font-family: 'Noto Nastaliq Urdu', serif;
        }
        .footer-nav-container {
            max-width: 700px;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .footer-nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #d1fae5;
            text-decoration: none;
            font-size: 11px;
            transition: all 0.3s ease;
            padding: 5px 10px;
            border-radius: 16px;
        }
        .footer-nav-item i {
            font-size: 18px;
            margin-bottom: 3px;
            color: #fbbf24;
        }
        .footer-nav-item:hover, .footer-nav-item.active {
            color: #fbbf24;
            background: rgba(217, 119, 6, 0.15);
            transform: translateY(-2px);
        }
    </style>

    <nav class="custom-sticky-footer">
        <div class="footer-nav-container">
            <a href="index.html" class="footer-nav-item">
                <i class="fa-solid fa-house"></i>
                <span>ہوم</span>
            </a>
            <a href="features.html#quran" class="footer-nav-item">
                <i class="fa-solid fa-book-quran"></i>
                <span>القرآن</span>
            </a>
            <a href="features.html#hadith" class="footer-nav-item">
                <i class="fa-solid fa-scroll"></i>
                <span>چالیس حدیث</span>
            </a>
            <a href="features.html#rabbana" class="footer-nav-item">
                <i class="fa-solid fa-hands-praying"></i>
                <span>چالیس ربنا</span>
            </a>
            <a href="features.html#about" class="footer-nav-item">
                <i class="fa-solid fa-circle-info"></i>
                <span>تعارف</span>
            </a>
        </div>
    </nav>
    `;

    document.addEventListener("DOMContentLoaded", function() {
        const div = document.createElement('div');
        div.innerHTML = footerHTML;
        document.body.appendChild(div);
        document.body.style.paddingBottom = "70px"; // Prevent content overlap with footer
    });
})();
  
