document.getElementById("start-btn").addEventListener("click", () => {
    const resultEl = document.getElementById("result");
    resultEl.textContent = "計測中...";

    // 描画を先に反映させてから計算開始
    setTimeout(() => {
        const duration = 1000;
        let count = 0;
        const start = performance.now();
        let checkInterval = 1000000; // 100万回ごとに時間確認
        let now = start;

        while (now - start < duration) {
            count++;

            if (count % checkInterval === 0) {
                now = performance.now();
            }
        }

        resultEl.textContent = `1秒間に約 ${count.toLocaleString()} 回の計算を実行できました。`;
    }, 50);
});
