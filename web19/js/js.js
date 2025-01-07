// JavaScript Document
var slideIndex = 0;
var previousIndex = -1; // 跟踪上一个幻灯片索引
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // 重置所有幻灯片的状态
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("fadein", "fadeout");
  }

  // 记录当前索引为上一个索引
  previousIndex = slideIndex;
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // 显示当前幻灯片并添加渐入动画
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("fadein");

  // 如果有上一张幻灯片，添加渐出动画
  if (previousIndex > 0) {
    slides[previousIndex - 1].style.display = "block";
    slides[previousIndex - 1].classList.add("fadeout");
  }

  // 更新小点状态
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 2000); // 切换时间为 2 秒
}


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



const Color3 = '#' + Math.floor(Math.random() * 16777215).toString(16);
displaybutton3.style.backgroundColor = Color3;

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

//手风琴

var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    for (var j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove("active");
        panels[j].style.maxHeight = null;
      }
    }
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

//表单
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


//登陆表单
// 检查用户是否已登录的示例函数
function isUserLoggedIn() {
    // 模拟用户登录状态（实际项目中应通过后端或存储验证）
    return sessionStorage.getItem('loggedIn') === 'true';
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

// 模拟登录成功后设置用户登录状态
document.querySelector('.modal-content button[type="submit"]').addEventListener('click', function (event) {
    event.preventDefault(); // 阻止默认提交行为
    sessionStorage.setItem('loggedIn', 'true'); // 设置登录状态
    alert('登录成功！');
    document.getElementById('id01').style.display = 'none'; // 关闭登录框
});

// 点击表单外部区域关闭表单
window.onclick = function(event) {
    var modal = document.getElementById('id01');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}



