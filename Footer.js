// Premium Floating Sticky Footer Navigation Component
(function() {
    // Check if footer already exists to avoid duplicates
    if (document.getElementById('customStickyFooter')) return;

    const footerWrapper = document.createElement('div');
    footerWrapper.id = 'customStickyFooter';
    
    footerWrapper.innerHTML = `
    <style>
        #customStickyFooter {
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 999999 !important;
            background: #022c22 !important;
            border-top: 2px solid #d97706 !important;
            box-shadow: 0 -10px 25px rgba(0, 0, 0, 0.5) !important;
            padding: 8px 10px !important;
            font-family: 'Noto Nastaliq Urdu', serif !important;
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
            color: #d1fae5 !important;
            text-decoration: none !important;
            font-size: 11px !important;
            transition: all 0.3s ease;
            padding: 4px 8px;
            border-radius: 12px;
        }
        .footer-nav-item i {
            font-size: 18px !important;
            margin-bottom: 2px;
            color: #fbbf24 !important;
        }
        .footer-nav-item:hover {
            color: #fbbf24 !important;
            background: rgba(217, 119, 6, 0.2);
            transform: translateY(-2px);
        }
    </style>

    <nav>
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

    if (document.body) {
        document.body.appendChild(footerWrapper);
        document.body.style.paddingBottom = "80px";
    } else {
        document.addEventListener("DOMContentLoaded", function() {
            document.body.appendChild(footerWrapper);
            document.body.style.paddingBottom = "80px";
        });
    }
})();
            
