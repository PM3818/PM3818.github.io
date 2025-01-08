// JavaScript Document
var slideIndex = 0;
var previousIndex = -1; // 跟踪上一个幻灯片索引
showSlides();
//slideIndex = 0;：初始化幻灯片的索引，slideIndex 会表示当前显示的幻灯片序号。它从 0 开始（即第一张幻灯片）。
//previousIndex = -1;：previousIndex 用来记录上一个显示的幻灯片的索引，初始化为 -1 表示没有上一个幻灯片。
//showSlides();：调用 showSlides() 函数，用于显示幻灯片。

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
//function showSlides() {...}：定义了一个函数 showSlides()，用来处理幻灯片的显示逻辑。
//var slides = document.getElementsByClassName("mySlides");：获取所有 HTML 中类名为 "mySlides" 的元素，存储到 slides 变量中，这些就是幻灯片。
//var dots = document.getElementsByClassName("dot");：获取所有 HTML 中类名为 "dot" 的元素，存储到 dots 变量中，这些是表示当前幻灯片的导航点（小圆点）。

  // 重置所有幻灯片的状态
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("fadein", "fadeout");
  }
//for (i = 0; i < slides.length; i++) {...}：遍历所有幻灯片。
//slides[i].style.display = "none";：将每个幻灯片的显示状态设置为 "none"，即隐藏所有幻灯片。
//slides[i].classList.remove("fadein", "fadeout");：移除幻灯片的 "fadein" 和 "fadeout" 动画效果。
	
  // 记录当前索引为上一个索引
  previousIndex = slideIndex;
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
//previousIndex = slideIndex;：记录当前幻灯片的索引作为上一个幻灯片的索引。
//slideIndex++;：将当前幻灯片索引加 1，指向下一个幻灯片。
//if (slideIndex > slides.length) { slideIndex = 1; }：如果 slideIndex 超过幻灯片的总数，就将其重置为 1，表示回到第一个幻灯片。
	
  // 显示当前幻灯片并添加渐入动画
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("fadein");
	
//slides[slideIndex - 1].style.display = "block";：显示当前幻灯片（由于 slideIndex 从 1 开始，所以需要 slideIndex - 1 来选择对应的元素）。
//slides[slideIndex - 1].classList.add("fadein");：为当前幻灯片添加 "fadein" 动画效果，通常这是一个渐显效果。
	
  // 如果有上一张幻灯片，添加渐出动画
  if (previousIndex > 0) {
    slides[previousIndex - 1].style.display = "block";
    slides[previousIndex - 1].classList.add("fadeout");
  }
//if (previousIndex > 0) {...}：如果 previousIndex 大于 0（即存在前一个幻灯片），则显示前一个幻灯片，并为其添加 "fadeout" 动画效果（通常是渐隐效果）。

  // 更新小点状态
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 2000); // 切换时间为 2 秒
//setTimeout(showSlides, 2000);：在 2 秒（2000 毫秒）后调用 showSlides() 函数，继续切换到下一张幻灯片。这样幻灯片会每 2 秒自动切换一次。
}

//for (i = 0; i < dots.length; i++) {...}：遍历所有的小圆点。
//dots[i].className = dots[i].className.replace(" active", "");：移除所有小圆点的 "active" 类名。
///dots[slideIndex - 1].className += " active";：为当前幻灯片对应的小圆点添加 "active" 类名，表示当前幻灯片的导航点。

//banner区修改图片
// 获取按钮和图片元素
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const eggImage = document.getElementById('eggImage');
const windowImage = document.getElementById('windowImage');
const bannerImage1 = document.getElementById('bannerImage1');
const bannerImage2 = document.getElementById('bannerImage2');
const bannerImage3 = document.getElementById('bannerImage3');
const cat = document.getElementById('cat');
const phone = document.getElementById('phone');
const kadai = document.getElementById('kadai');
const wicket = document.getElementById('wicket');
const smallwindow = document.getElementById('smallwindow');
const flower = document.getElementById('flower');
const text = document.getElementById('text');

//这些行用来获取 HTML 页面中对应的元素（按钮、图片等）。通过 getElementById() 获取每个元素，并将它们赋值给变量。比如 button1 是指 ID 为 "button1" 的按钮，eggImage 是 ID 为 "eggImage" 的图片。

// 用于控制按钮点击后的状态


// 默认状态：button1 被点击，图片为 egg.png
    eggImage.src = 'images/egg.png'; // 恢复原始图片
	windowImage.src = 'images/window.png';
	bannerImage1.src = 'images/banner1.png';
	bannerImage2.src = 'images/banner2.png';
	bannerImage3.src = 'images/banner3.png';
	cat.src = 'images/cat.png';
	phone.src = 'images/phone.png';
	kadai.src = 'images/kadai.png';
	wicket.src = 'images/wicket.png';
	smallwindow.src = 'images/small-window.png';
	flower.src = 'images/flower.png';
	text.src = 'images/text.png';

//这一部分设置了默认状态下各个图片的路径（即 src）。这些图片在页面加载时会显示出来。



// 处理 button1 点击事件
button1.addEventListener('click', function() {
    eggImage.src = 'images/egg.png'; // 恢复原始图片
	windowImage.src = 'images/window.png';
	bannerImage1.src = 'images/banner1.png';
	bannerImage2.src = 'images/banner2.png';
	bannerImage3.src = 'images/banner3.png';
	cat.src = 'images/cat.png';
	phone.src = 'images/phone.png';
	kadai.src = 'images/kadai.png';
	wicket.src = 'images/wicket.png';
	smallwindow.src = 'images/small-window.png';
	flower.src = 'images/flower.png';
	text.src = 'images/text.png';

	
});
//button1.addEventListener('click', function() {...});：给 button1 按钮添加点击事件监听器。当用户点击按钮时，会执行函数内部的代码。
//在这个函数内部，所有的图片都会恢复到原始状态（如 eggImage.src = 'images/egg.png'）。

// 处理 button2 点击事件
button2.addEventListener('click', function() {
    eggImage.src = 'images/egg2.png'; // 更改为 egg2 图片
	windowImage.src = 'images/window2.png';
	bannerImage1.src = 'images/banner4.png';
	bannerImage2.src = 'images/banner5.png';
	bannerImage3.src = 'images/banner6.png';
	cat.src = 'images/cat2.png';
	phone.src = 'images/phone2.png';
	kadai.src = 'images/kadai2.png';
	wicket.src = 'images/wicket2.png';
	smallwindow.src = 'images/small-window2.png';
	flower.src = 'images/flower2.png';
	text.src = 'images/text2.png';
	
	
});
//button2 点击时，所有的图片路径都会切换到 egg2.png、window2.png 等新图片。

// 处理 button3 点击事件
button3.addEventListener('click', function() {
    eggImage.src = 'images/egg3.png'; // 更改为 egg3 图片
	windowImage.src = 'images/window3.png';
	bannerImage1.src = 'images/banner7.png';
	bannerImage2.src = 'images/banner8.png';
	bannerImage3.src = 'images/banner9.png';
	cat.src = 'images/cat3.png';
	phone.src = 'images/phone3.png';
	kadai.src = 'images/kadai3.png';
	wicket.src = 'images/wicket3.png';
	smallwindow.src = 'images/small-window3.png';
	flower.src = 'images/flower3.png';
	text.src = 'images/text3.png';
	
	
	
});
// 获取按钮和图片元素
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const displayImg1 = document.getElementById('displayImg1');
const displaychangecolor1 = document.getElementById('displaysmallsmallimgbox1');
const displayImg2 = document.getElementById('displayImg2');
const displayImg3 = document.getElementById('displayImg3');
const displayImg4 = document.getElementById('displayImg4');
const displayText = document.getElementById('displayText');
const displaychangecolor2 = document.getElementById('displaysmallsmallimgbox3');
const title1 = document.getElementById('title1');
const title2 = document.getElementById('title2');
const title3 = document.getElementById('title3');
const titleline = document.getElementById('titleline');
const displaybutton3 = document.getElementById('displaybutton3');
const link1 = document.getElementById('moreLink1');
const link2 = document.getElementById('moreLink2');
const link3 = document.getElementById('moreLink3');

//这部分代码通过 getElementById() 获取 HTML 页面中各个元素，并将它们赋值给 JavaScript 变量。
//获取了 4 个按钮、多个图片元素、文本元素、链接元素、标题元素和颜色控制的 div 元素。
//每个元素的 ID 对应于 HTML 中的元素 ID，之后可以在代码中操作这些元素。

const Color3 = '#' + Math.floor(Math.random() * 16777215).toString(16);
displaybutton3.style.backgroundColor = Color3;

//Math.floor(Math.random() * 16777215) 会生成一个随机的整数，范围从 0 到 16777215（对应十六进制颜色的最大值）。
//toString(16) 将该整数转换为十六进制字符串，生成一个随机的颜色值。
//将这个随机颜色值设置为 displaybutton3 的背景颜色。

// 处理 button4 点击事件
button4.addEventListener('click', function() {
    displayImg1.src = 'images/img.png'; // 恢复原始图片
	displayImg2.src = 'images/model2.png'; // 恢复原始图片
	displayImg3.src = 'images/model3.png'; // 恢复原始图片
	displayImg4.src = 'images/model1.png'; // 恢复原始图片
	displayText.src = 'images/text (3).png'; // 恢复原始图片
	link1.href = '#';
	link2.href = 'https://www.siva.edu.cn/channels/131.htm';
	link3.href = '#';	
	
	
	title1.textContent = '城堡 模型';
	title2.textContent = '蛛 模型';
	title3.textContent = '人 模型';
	
	
	const Color = '#' + '9475b6';
    const Color2 = '#' + '535178';	
	const Color3 = '#' + '9475b6';	

	
    // 设置 div 的背景颜色
    displaychangecolor1.style.backgroundColor = Color;
    displaychangecolor2.style.backgroundColor = Color2;
    titleline.style.backgroundColor = Color3;
	
});

//监听 button4 的点击事件，当用户点击该按钮时，会：
//更改图片：displayImg1、displayImg2、displayImg3、displayImg4 和 displayText 元素的 src 属性（即图片路径），显示新的图片。
//更改链接：link1.href 和 link3.href 设置为 #（无效链接），link2.href 设置为指定的网页地址。
//更改标题：将 title1、title2 和 title3 的文本内容分别设置为 "城堡 模型"、"蛛 模型"、"人 模型"。
//更改背景颜色：通过给 displaychangecolor1、displaychangecolor2 和 titleline 设置背景颜色，使用已定义的颜色 Color、Color2 和 Color3。

// 处理 button5 点击事件
button5.addEventListener('click', function() {
    displayImg1.src = 'images/img.png';
	displayImg2.src = 'images/paint1.png'; 
	displayImg3.src = 'images/paint2.png'; 	
	displayImg4.src = 'images/paint3.png'; 
	displayText.src = 'images/text (4).png'; 
	
	link1.href = '#';
	link2.href = '#';
	link3.href = '#';	

	
	title1.textContent = '女孩 绘画';
	title2.textContent = '蛛 临摹';
	title3.textContent = '人 绘画';
	
	const Color = '#' + '94b4b3';
    const Color2 = '#' + 'aec38e';	
	const Color3 = '#' + '94b4b3';	

	const Color4 = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // 设置 div 的背景颜色
    displaychangecolor1.style.backgroundColor = Color;
    displaychangecolor2.style.backgroundColor = Color2;
    titleline.style.backgroundColor = Color3;
	

});
//类似于 button4，点击 button5 会：
//更改图片：displayImg2、displayImg3 和 displayImg4 更换为绘画相关的图片。
//更改标题：设置标题为 "女孩 绘画"、"蛛 临摹" 和 "人 绘画"。
//更改背景颜色：给 displaychangecolor1、displaychangecolor2 和 titleline 设置新的背景颜色。Color4 生成一个随机颜色。

// 处理 button6 点击事件
button6.addEventListener('click', function() {
	displayImg1.src = 'images/img.png';
	displayImg2.src = 'images/animate3.gif'; 
	displayImg3.src = 'images/animate.gif'; 	
	displayImg4.src = 'images/animate2.gif'; 
	displayText.src = 'images/text (5).png'; 	

	title1.textContent = '动画 临摹';
	title2.textContent = '动画 临摹';
	title3.textContent = '动画 临摹';

	link1.href = '#';
	link2.href = '#';
	link3.href = '#';	
	
//	link.href = '#';
//	link1.href = '#';
//点击 button6 会：
//更改图片：显示与动画相关的 .gif 动图。
//更改标题：设置所有三个标题为 "动画 临摹"。
//更改背景颜色：设置 4 个不同的随机颜色，分别应用到相关元素的背景。

	
    displayImg1.src = 'images/img.png';
	const Color5 = '#' + Math.floor(Math.random() * 16777215).toString(16);
	const Color4 = '#' + Math.floor(Math.random() * 16777215).toString(16);
	const Color3 = '#' + Math.floor(Math.random() * 16777215).toString(16);
	const Color2 = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // 设置 div 的背景颜色
    displaychangecolor1.style.backgroundColor = Color4;
    displaychangecolor2.style.backgroundColor = Color5;
	displaybutton3.style.backgroundColor = Color3;
    titleline.style.backgroundColor = Color2;
});

// 处理 button7 点击事件
button7.addEventListener('click', function() {

	displayImg1.src = 'images/img.png';
	displayImg2.src = 'images/program2.gif'; 
	displayImg3.src = 'images/program1.gif'; 	
	displayImg4.src = 'images/program1.png'; 
	displayText.src = 'images/text ().png'; 	

	
	link1.href = 'https://raw.githubusercontent.com/PM3818/DesktopPet/master/Setup1.rar';
	link2.href = 'https://play.unity.com/en/games/5a5fb51a-f699-4656-aee6-6e5b71027838/webgl-builds';
	link3.href = 'https://pm3818.github.io/SwitchUI1/ui1.html';	
	
	title1.textContent = '桌宠';
	title2.textContent = 'Unity游戏';
	title3.textContent = '开关UI';

	
	
	const Color1 = '#' + '767676';
	const Color2 = '#' + '404040';	
    displaychangecolor1.style.backgroundColor = Color1;
    displaychangecolor2.style.backgroundColor = Color2;
    titleline.style.backgroundColor = Color2;
	
	//	link.href = '#';

});
//点击 button7 会：
//更改图片：显示与桌宠、Unity 游戏和开关 UI 相关的内容。
//更改链接：将 link1、link2 和 link3 设置为对应的 URL 链接。
//更改标题：设置标题为 "桌宠"、"Unity游戏" 和 "开关UI"。
//更改背景颜色：设置 displaychangecolor1 和 displaychangecolor2 的颜色为 Color1 和 Color2。

//aboutme
// 获取按钮和图片元素
const aboutmebutton1 = document.getElementById('aboutmebutton1');
const aboutmebutton2 = document.getElementById('aboutmebutton2');
const aboutmebutton3 = document.getElementById('aboutmebutton3');
const aboutmesmallboximg1 = document.getElementById('aboutmesmallboximg1');
const aboutmesmallboximg2 = document.getElementById('aboutmesmallboximg2');
const aboutmesmallboximg3 = document.getElementById('aboutmesmallboximg3');
const aboutmetitle = document.getElementById('aboutmetitle');
const aboutmetitleline = document.getElementById('aboutmetitleline');
const aboutmeimg1 = document.getElementById('aboutmeimg1');
const aboutmeimg2 = document.getElementById('aboutmeimg2');
const aboutmeimg3 = document.getElementById('aboutmeimg3');

//这部分代码通过 getElementById() 获取 HTML 页面中与“关于我”相关的元素，并将它们赋值给 JavaScript 变量。获取的元素包括三个按钮 (aboutmebutton1, aboutmebutton2, aboutmebutton3)、多个图片元素、标题和标题线等。



aboutmebutton1.addEventListener('click', function() {
	aboutmesmallboximg1.src = 'images/aboutme1.png'; 
	aboutmesmallboximg2.src = 'images/cpp.png'; 	
	aboutmesmallboximg3.src = 'images/csharp (2).png'; 	
	
	
	aboutmeimg1.src = 'images/HTML.png'; 	
	aboutmeimg2.src = 'images/c++.png'; 	
	aboutmeimg3.src = 'images/csharp.png'; 		
	
	
	const Color = '#' + '727272';	
	const Color2 = '#' + '727272';	
	
	aboutmetitleline.style.backgroundColor

	aboutmetitle.style.color = Color; 
	aboutmetitleline.style.backgroundColor = Color; 

	
	
});
//图片更新：当点击 aboutmebutton1 时，aboutmesmallboximg1、aboutmesmallboximg2 和 aboutmesmallboximg3 的 src 属性分别更新为 images/aboutme1.png、images/cpp.png 和 images/csharp (2).png，更换显示的图片。

//aboutmeimg1、aboutmeimg2 和 aboutmeimg3 的 src 也被更新为新的图片：images/HTML.png、images/c++.png 和 images/csharp.png。

//背景颜色更新：设置 aboutmetitle 的字体颜色和 aboutmetitleline 的背景颜色为相同的颜色 #727272，使标题与标题线的颜色一致。

aboutmebutton2.addEventListener('click', function() {
	aboutmesmallboximg1.src = 'images/zb2.png'; 
	aboutmesmallboximg2.src = 'images/3ds2.png'; 	
	aboutmesmallboximg3.src = 'images/pt.png'; 	
	
	aboutmeimg1.src = 'images/zb.png'; 	
	aboutmeimg2.src = 'images/3ds.png'; 	
	aboutmeimg3.src = 'images/sp.png'; 		
	
	
	const Color = '#' + '6bbdff';	
	
	
	
	aboutmetitleline.style.backgroundColor = Color; 

	aboutmetitle.style.color = Color; 
});
//图片更新：点击 aboutmebutton2 时，aboutmesmallboximg1、aboutmesmallboximg2 和 aboutmesmallboximg3 会更新为与 zb2.png、3ds2.png 和 pt.png 相关的图片，同时，aboutmeimg1、aboutmeimg2 和 aboutmeimg3 更新为与 zb.png、3ds.png 和 sp.png 相关的图片。

//背景颜色更新：设置 aboutmetitleline 的背景颜色和 aboutmetitle 的字体颜色为蓝色 #6bbdff，使标题与标题线的颜色一致。

aboutmebutton3.addEventListener('click', function() {
	aboutmesmallboximg1.src = 'images/ps2.png'; 
	aboutmesmallboximg2.src = 'images/sketchbook2.png'; 	
	aboutmesmallboximg3.src = 'images/sai2.png'; 
	
	aboutmeimg1.src = 'images/ps.png'; 	
	aboutmeimg2.src = 'images/sketchbook.png'; 	
	aboutmeimg3.src = 'images/sai.png'; 		
	
	const Color = '#' + 'a98ddc';	
	
	aboutmetitle.style.color = Color; 
	aboutmetitleline.style.backgroundColor = Color; 
	
	
});
//图片更新：点击 aboutmebutton3 时，aboutmesmallboximg1、aboutmesmallboximg2 和 aboutmesmallboximg3 更新为与 ps2.png、sketchbook2.png 和 sai2.png 相关的图片。同时，aboutmeimg1、aboutmeimg2 和 aboutmeimg3 更新为与 ps.png、sketchbook.png 和 sai.png 相关的图片。

//背景颜色更新：设置 aboutmetitle 的字体颜色和 aboutmetitleline 的背景颜色为紫色 #a98ddc，使标题与标题线的颜色一致。

//手风琴

var acc = document.getElementsByClassName("accordion");
//var acc = document.getElementsByClassName("accordion");：获取页面上所有 class 为 accordion 的元素（通常是折叠按钮）。
var panels = document.getElementsByClassName("panel");
//var panels = document.getElementsByClassName("panel");：获取所有 class 为 panel 的元素（即每个按钮下的可折叠内容区域）。
var i;
//定义一个变量 i，用作循环计数器。

for (i = 0; i < acc.length; i++) {
//使用 for 循环，遍历 acc 中的每一个 accordion 按钮。
  acc[i].onclick = function() {
//为当前遍历到的 accordion 按钮绑定一个点击事件，当按钮被点击时执行以下逻辑。
    for (var j = 0; j < acc.length; j++) {
//再次使用 for 循环，遍历所有的 accordion 按钮。
      if (acc[j] !== this) {
//检查当前遍历的按钮是否与用户点击的按钮相同。如果不同，则执行以下操作：
        acc[j].classList.remove("active");
//移除非当前按钮的 active 类，确保其他按钮的样式恢复到未激活状态。
        panels[j].style.maxHeight = null;
//将非当前按钮对应的 panel 内容区域的 maxHeight 设置为 null，使其收起。
      }
    }
    this.classList.toggle("active");
//为用户点击的按钮切换 active 类：
	  //如果按钮已经有 active 类，则移除（即取消激活）。
	 // 如果按钮没有 active 类，则添加（即激活）。
    var panel = this.nextElementSibling;
	  //获取当前点击的按钮的下一个兄弟元素（通常是对应的内容区域）。

    if (panel.style.maxHeight){
//检查当前内容区域是否已展开：
//如果 maxHeight 有值，说明面板已展开。
      panel.style.maxHeight = null;
		//将 maxHeight 设置为 null，即收起内容区域。
    } else {
		//否则（内容区域未展开）：
      panel.style.maxHeight = panel.scrollHeight + "px";
		//将 maxHeight 设置为内容区域的 scrollHeight 值（内容的实际高度），使内容区域展开。
    } 
  }
}

//表单
document.getElementById('submitButton').addEventListener('click', function () {
	//获取页面上 id 为 submitButton 的按钮元素，并为它绑定一个点击事件监听器。当按钮被点击时，会执行以下代码。
    const form = document.getElementById('contactForm');
	//获取页面上 id 为 contactForm 的表单元素，并将其存储到 form 变量中。
    const formData = new FormData(form);
	//创建一个 FormData 对象，该对象包含了表单中的所有数据（如文本框内容、选择框状态等）。它将用于在网络请求中发送表单数据。

    fetch('formaction.php', {
        method: 'POST',
        body: formData,
    })
	//使用 fetch API 向 formaction.php 发送一个 HTTP 请求：
//method: 'POST' 表示使用 POST 方法提交数据。
//body: formData 表示请求的内容是表单数据（formData 对象）。
        .then(response => response.text())
	//当请求完成并获得响应时，使用 .then() 方法处理响应。此处，将响应的内容转换为文本。
        .then(data => {
            // 只显示PHP返回的感谢信息
            alert(data); // 弹窗显示PHP返回的消息
        })
	//当文本响应返回后，执行此回调函数。使用 alert(data) 弹出一个包含 PHP 返回数据的提示框（如感谢信息）。
        .catch(error => {
            console.error('Error:', error);
            alert('提交失败，请稍后再试！');
        });
	//如果发生错误（如请求失败），使用 .catch() 捕获错误并执行回调。将错误信息输出到控制台，并弹出一个警告提示用户提交失败
});


//登陆表单
// 检查用户是否已登录的示例函数
function isUserLoggedIn() {
    // 模拟用户登录状态（实际项目中应通过后端或存储验证）
    return sessionStorage.getItem('loggedIn') === 'true';
	//该函数模拟检查用户是否已登录。它通过检查 sessionStorage 中存储的 loggedIn 项，判断用户是否已登录：
	//如果 sessionStorage.getItem('loggedIn') 返回的是 'true'，表示用户已登录。
}

// 处理 "投稿" 点击事件
function handlePost() {
    if (isUserLoggedIn()) {
        // 用户已登录，打开投稿页面
        window.open('post_page.html', '_blank'); // 新窗口打开投稿页面
    } else {
        // 用户未登录，显示登录表单
        document.getElementById('id01').style.display = 'block';
    }
}
//这个函数用于处理用户点击 "投稿" 按钮后的行为：
//如果用户已登录（isUserLoggedIn() 返回 true），则打开投稿页面（post_page.html）的一个新窗口。
//如果用户未登录，则显示登录表单（通过将 id01 的 display 样式设置为 'block' 来展示登录框）。

// 模拟登录成功后设置用户登录状态
document.querySelector('.modal-content button[type="submit"]').addEventListener('click', function (event) {
	//通过 querySelector 获取登录表单内的提交按钮（button[type="submit"]），并为其添加点击事件监听器。当按钮被点击时执行以下代码。

    event.preventDefault(); // 阻止默认提交行为
	//调用 event.preventDefault() 阻止表单的默认提交行为，防止页面重新加载。


    sessionStorage.setItem('loggedIn', 'true'); // 设置登录状态
	//将 loggedIn 状态设置为 'true'，并存储到 sessionStorage 中，表示用户已登录。
    alert('登录成功！');
	//弹出一个提示框，告诉用户登录成功。
    document.getElementById('id01').style.display = 'none'; // 关闭登录框
	//将登录表单（id01）的 display 样式设置为 'none'，即关闭登录框。
});

// 点击表单外部区域关闭表单
window.onclick = function(event) {
    var modal = document.getElementById('id01');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
//为 window 添加点击事件监听器，当用户点击窗口的任何地方时，执行以下逻辑：
//如果点击的是登录框（event.target === modal），则隐藏登录框（通过设置 display 为 'none'）。
//这样做是为了允许用户点击登录框以外的地方来关闭登录表单。



