
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
