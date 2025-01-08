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
		//创建一个循环，从 1 开始，循环到 lastDate（当月的最后一天），代表当前月的每一天。
        const dateLi = document.createElement("li");
		//动态创建一个 <li> 元素，用于表示一个日期。
        dateLi.textContent = date; // 设置日期内容。
		//设置 <li> 的文本内容为当前日期 date。

        // 检查当前日期是否是不可用日期
        const isUnavailable = noAvailabilityDates.some(d => d.year === year && d.month === month && d.day === date);
		//使用 some() 方法检查 noAvailabilityDates 数组中是否存在一个对象，其 year、month 和 day 与当前日期相同。
		//如果找到匹配的日期，isUnavailable 为 true，否则为 false。
        if (isUnavailable) {//判断当前日期是否为不可用日期。
            dateLi.classList.add("unavailable"); // 给不可用日期添加一个类 如果是不可用日期，为 <li> 添加一个 unavailable 类，用于样式控制。
        }

        // 高亮当前日期
        if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
			//判断当前日期是否是当天。
			//today.getDate()、today.getMonth() 和 today.getFullYear() 分别获取今天的日、月、年。
            const span = document.createElement("span");
			//创建一个 <span> 元素，用于高亮当天日期。
            span.classList.add("dailyactive");
			//为 <span> 添加一个 dailyactive 类，用于设置高亮样式。
            span.textContent = date; // 设置高亮日期。
            dateLi.innerHTML = "";
			//清空 <li> 的内容，以便将高亮的 <span> 添加到 <li> 中。
            dateLi.appendChild(span);//将 <span> 添加为 <li> 的子元素。
            // 设置当前日期的背景颜色
            dateLi.style.backgroundColor = "rgba(140, 96, 221, 0.60)";
        }

        daysContainer.appendChild(dateLi);//将当前日期的 <li> 元素添加到 daysContainer 容器中，完成渲染。
    }

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