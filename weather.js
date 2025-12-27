(function () {
    // ==========================================
    // 設定エリア
    // ==========================================
    const API_KEY = '0c1c6e4ec59b4c0cb28211402252711'; // ★ここにAPIキーを入れてください

    // 固定座標 (淡路島)
    // 34.25586719870759, 134.71956708589437
    const TARGET_LOCATION = {
        name: "Awaji Island",
        lat: 34.25586719870759,
        lon: 134.71956708589437
    };

    // ==========================================
    // 処理ロジック
    // ==========================================

    async function updateWeather() {
        const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${TARGET_LOCATION.lat},${TARGET_LOCATION.lon}&lang=ja`;

        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error('API Error');
            const data = await res.json();

            // 要素が存在するか確認してから操作
            const nameEl = document.getElementById('location-name');
            const tempEl = document.getElementById('temperature');
            const condEl = document.getElementById('condition-text');
            const iconEl = document.getElementById('weather-icon');

            if (nameEl) nameEl.textContent = TARGET_LOCATION.name;
            if (tempEl) tempEl.textContent = `${data.current.temp_c}°C`;
            if (condEl) condEl.textContent = data.current.condition.text;

            if (iconEl) {
                iconEl.src = `https:${data.current.condition.icon}`;
                iconEl.classList.remove('hidden');
            }

        } catch (e) {
            console.error(e);
            const condEl = document.getElementById('condition-text');
            if (condEl) condEl.textContent = "Connection Error";
        }
    }

    // 実行
    updateWeather();

})();