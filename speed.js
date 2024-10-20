console.log("YouTube 自定義播放速度擴展已加載");

function addCustomSpeedIcon() {
    console.log("檢查並添加自定義播放速度圖標");

    // 檢查是否已經添加自定義圖標，避免重複添加
    if (document.querySelector('.custom-speed-icon')) {
        return;
    }

    const controlsBar = document.querySelector('.ytp-right-controls');
    if (controlsBar) {
        // 創建自定義圖標按鈕
        const speedButton = document.createElement('button');
        speedButton.className = 'ytp-button custom-speed-icon';
        speedButton.title = '自訂播放速度';
        speedButton.style.cssText = `
            width: 45px;
            height: 45px;
            background: url('https://img.icons8.com/ios-filled/50/ffffff/speed.png') no-repeat center;
            background-size: 65%;
            margin-right: 12px;
            cursor: pointer;
        `;

        // 添加按鈕點擊事件以顯示自訂速度選單
        speedButton.addEventListener('click', () => {
            showCustomSpeedPanel();
        });

        // 將自定義按鈕添加到控制欄中
        controlsBar.insertBefore(speedButton, controlsBar.firstChild);
    }
}

function showCustomSpeedPanel() {
    const existingPanel = document.querySelector('.custom-speed-panel');
    if (existingPanel) {
        existingPanel.remove();
    }

    // 創建一個模仿 YouTube 設置面板的速度選單
    const panel = document.createElement('div');
    panel.className = 'custom-speed-panel';
    panel.style.cssText = `
        position: absolute;
        bottom: 65px;
        right: 20px;
        background: rgba(50, 50, 50, 0.85);
        border-radius: 6px;
        padding: 12px;
        z-index: 9999;
        color: white;
        text-align: left;
        width: 200px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
    `;

    // 返回箭頭和標題
    const header = document.createElement('div');
    header.style.cssText = `
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    `;

    const backArrow = document.createElement('div');
    backArrow.innerHTML = '<';
    backArrow.style.cssText = `
        cursor: pointer;
        font-size: 16px;
        margin-right: 6px;
    `;
    backArrow.addEventListener('click', () => {
        panel.remove();
    });

    const title = document.createElement('span');
    title.textContent = '自訂播放速度';
    title.style.cssText = `
        font-size: 16px;
        flex-grow: 1;
        text-align: left;
    `;

    header.appendChild(backArrow);
    header.appendChild(title);

    // 創建滑桿
    const speedSlider = document.createElement('input');
    speedSlider.type = 'range';
    speedSlider.min = '0.25';
    speedSlider.max = '16';
    speedSlider.step = '0.25';
    speedSlider.value = document.querySelector('video')?.playbackRate || '1';
    speedSlider.style.cssText = `
        width: calc(100% - 16px);
        margin: 8px 0;
        -webkit-appearance: none;
        background: #ccc;
        height: 6px;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
        transition: background 0.3s;
    `;

    // 自訂滑桿的樣式，將滑桿設為白色
    speedSlider.addEventListener('input', () => {
        speedSlider.style.background = '#fff';
    });

    // 創建滑桿拖動時顯示的小圓點
    const style = document.createElement('style');
    style.innerHTML = `
        input[type='range']::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            background: white;
            border-radius: 50%;
            cursor: pointer;
        }
        input[type='range']::-moz-range-thumb {
            width: 16px;
            height: 16px;
            background: white;
            border-radius: 50%;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    // 顯示當前速度
    const speedDisplay = document.createElement('div');
    speedDisplay.textContent = speedSlider.value + 'x';
    speedDisplay.style.cssText = `
        font-size: 16px;
        text-align: center;
        margin-bottom: 8px;
    `;

    // 更新播放速度的函數
    speedSlider.addEventListener('input', () => {
        const speed = parseFloat(speedSlider.value);
        setPlaybackRate(speed);
        speedDisplay.textContent = speed.toFixed(1) + 'x';
    });

    // 將所有元素添加到面板中
    panel.appendChild(header);
    panel.appendChild(speedDisplay);
    panel.appendChild(speedSlider);

    // 將面板添加到頁面
    document.querySelector('.html5-video-player').appendChild(panel);
}

function setPlaybackRate(speed) {
    const video = document.querySelector('video');
    if (video) {
        video.playbackRate = speed;
        console.log(`播放速度已設定為 ${speed}x`);
    }
}

function checkAndAddCustomSpeedIcon() {
    console.log("檢查控制欄並添加自定義速度圖標");

    const videoElement = document.querySelector('video');
    if (videoElement) {
        addCustomSpeedIcon();
    } else {
        setTimeout(checkAndAddCustomSpeedIcon, 1000);
    }
}

// 初始檢查
checkAndAddCustomSpeedIcon();
