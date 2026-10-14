
document.documentElement.classList.add("js-enabled");

// ページのHTML読み込み完了を待つ
document.addEventListener("DOMContentLoaded", () => {

    // アニメーション対象を取得
    const fadeElements = document.querySelectorAll(".fade-up");

    console.log("対象数:", fadeElements.length);

    // スクロール監視
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                console.log("監視結果:", entry.isIntersecting);

                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    // 各要素を監視
    fadeElements.forEach((element, index) => {
        observer.observe(element);
    });
    // WORKSのカードだけ左から順番に表示
    const workCards = document.querySelectorAll(".work-card");

    workCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.4}s`;
    });

});


document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector(".site-nav");

    if (!menuToggle || !siteNav) {
        console.error("メニューの要素が見つかりません");
        return;
    }

    menuToggle.classList.remove("is-open");
    siteNav.classList.remove("is-open");

    menuToggle.addEventListener("click", () => {

        const isOpen = menuToggle.classList.toggle("is-open");

        siteNav.classList.toggle("is-open", isOpen);

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        console.log("メニュー状態:", isOpen);
        console.log("nav:", siteNav.className);
    });

    siteNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("is-open");
            siteNav.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

});

