// JavaScript Document
//日历
// 指定没有空闲的日期
const noAvailabilityDates = [
    { year: 2025, month: 0, day: 8 }, // 注意：月份从 0 开始，0 表示 1 月
    { year: 2025, month: 0, day: 16 },
    { year: 2025, month: 0, day: 25 },
	{ year: 2025, month: 1, day: 14 },
];
// 获取用于显示日期的 <ul> 元素，后续动态生成日期时会填充到这里。
const daysContainer = document.getElementById("days");
// 获取显示当前月份和年份的 <li> 元素，用于更新标题。
const monthYear = document.getElementById("monthYear");

// 获取当前日期
const today = new Date(); // 创建一个表示当前时间的 `Date` 对象。
let currentMonth = today.getMonth(); // 存储当前月份（0 表示 1 月，1 表示 2 月，依次类推）。
let currentYear = today.getFullYear(); // `currentYear`：存储当前年份。

// 月份数组
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]; // 定义一个数组，包含 12 个月份的英文名称，用于显示月份标题。

// 更新日历
function updateCalendar(month, year) {
    // 设置月份和年份标题
    monthYear.innerHTML = `${monthNames[month]}<br><span style="font-size:18px">${year}</span>`; // 动态更新标题，将月份和年份显示在页面上。

    // 获取当月第一天和最后一天
    const firstDay = new Date(year, month, 1).getDay(); // 一周中的第几天 (0-6)
    // 通过 `new Date(year, month, 1)` 获取该月的第一天，然后调用 `.getDay()` 返回该天是星期几（0 表示周日，1 表示周一）。
    const lastDate = new Date(year, month + 1, 0).getDate(); // 当月的最后一天
    // 获取该月的最后一天的日期，`0` 表示上个月的最后一天。

    // 清空之前的天数
    daysContainer.innerHTML = "";
    // 每次更新日历时，清空上一次生成的日期，防止叠加。

    // 填充空白天数 (根据第一天的位置)
    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
        const emptyLi = document.createElement("li");
        emptyLi.textContent = "/"; // 添加占位符。
        daysContainer.appendChild(emptyLi);
    }
    // 根据 `firstDay` 的值，在日历开始位置插入空白 `<li>` 元素，让第一天的日期对齐正确的星期位置。
    // 如果 `firstDay` 是周日（`0`），需要填充 6 天的空白。
    // 否则填充 `firstDay - 1` 天。

    // 填充日期
    for (let date = 1; date <= lastDate; date++) {
        const dateLi = document.createElement("li");
        dateLi.textContent = date; // 设置日期内容。

        // 检查当前日期是否是不可用日期
        const isUnavailable = noAvailabilityDates.some(d => d.year === year && d.month === month && d.day === date);
        if (isUnavailable) {
            dateLi.classList.add("unavailable"); // 给不可用日期添加一个类
        }

        // 高亮当前日期
        if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            const span = document.createElement("span");
            span.classList.add("dailyactive");
            span.textContent = date; // 设置高亮日期。
            dateLi.innerHTML = "";
            dateLi.appendChild(span);
            // 设置当前日期的背景颜色
            dateLi.style.backgroundColor = "rgba(140, 96, 221, 0.60)";
        }

        daysContainer.appendChild(dateLi);
    }
    // 将生成的 `<li>`（日期项）添加到日历容器中。
}

// 初始化日历
updateCalendar(currentMonth, currentYear);
// 调用 `updateCalendar` 函数，以当前月份和年份初始化日历。

// 为左右按钮添加点击事件
// `prev` 按钮：
// 每点击一次，当前月份 `currentMonth` 减 1。
// 如果月份小于 0（即超出 1 月），将月份设为 11（12 月），并将年份减 1。
document.querySelector(".prev").addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    updateCalendar(currentMonth, currentYear);
});

// `next` 按钮：
// 每点击一次，当前月份 `currentMonth` 加 1。
// 如果月份大于 11（即超出 12 月），将月份设为 0（1 月），并将年份加 1。
document.querySelector(".next").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar(currentMonth, currentYear);
});
console.log(document.getElementById("days")); // 应该输出 <ul>...</ul>
console.log(document.getElementById("monthYear")); // 应该输出 <li>...</li>


//表单2
document.getElementById('submitButton').addEventListener('click', function () {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    fetch('formaction.php', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.text())
        .then(data => {
            // 只显示PHP返回的感谢信息
            alert(data); // 弹窗显示PHP返回的消息
        })
        .catch(error => {
            console.error('Error:', error);
            alert('提交失败，请稍后再试！');
        });
});