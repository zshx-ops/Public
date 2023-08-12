// ==UserScript==
// @name         哔哩哔哩自动点赞
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       只剩寒暄
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    function sanlian() {
        const likeButton = document.querySelector('[title="点赞（Q）"]');

        if (!likeButton.classList.contains('on')) {
            // 创建模拟的鼠标按下事件
            const pressEvent = new MouseEvent('mousedown');

            // 触发模拟的鼠标按下事件
            likeButton.dispatchEvent(pressEvent);

            // 等待一段时间，模拟按住鼠标左键3秒
            setTimeout(() => {
                // 创建模拟的鼠标松开事件
                const releaseEvent = new MouseEvent('mouseup');

                // 触发模拟的鼠标松开事件，完成点击操作
                likeButton.dispatchEvent(releaseEvent);
                console.log('点赞完毕!');
            }, 3500);
        }

    }

    function dianzan() {
        // 找到包含"点赞（Q）"标题的元素
        const likeButton = document.querySelector('[title="点赞（Q）"]');

        // 检查class是否包含"on"
        if (!likeButton.classList.contains('on')) {
            // 模拟点击
            likeButton.click();
            console.log('点赞完毕!');
        }
    }
    var sl = GM_getValue('sl');
    if (sl === 1) {
        GM_registerMenuCommand("一键三连", shezhi, 'm');
    } else {
        GM_registerMenuCommand("仅点赞", shezhi, 'm');
    }

    function checkAndClickLikeButton() {

        if (GM_getValue('sl') === 1) {
            setTimeout(function() {
                // 在这里写你想要延迟执行的代码
                sanlian();
            }, 10000); // 10秒 = 10000毫秒

        } else {
            setTimeout(function() {
                // 在这里写你想要延迟执行的代码
                dianzan();
            }, 10000); // 10秒 = 10000毫秒
        }
    }
    function shezhi() {
        if (GM_getValue('sl') === 1) {
            alert("设置为仅点赞");

            GM_setValue('sl', 0);
            window.location.reload(true);

        } else {
            alert("设置为一键三连");

            GM_setValue('sl', 1);
            window.location.reload(true);

        }
    }

    const h1Element = document.querySelector('h1');

    h1Element.addEventListener('DOMSubtreeModified', function() {
        checkAndClickLikeButton();
        console.log('H1标签内容已改变...');
    });

    // Your code here...
})();
