/** 21-05-22 10:04  1.0.6  星期六 第六次改版
 * 小米 tab切换  */
function tab() {
    let list = ``
    let wrap_item = $('.wrap-item')
    //封装图片 文字
 function joint() {
       let imgs = ["shouji10.webp", "shouhuan.webp", "sj11.webp", "sj12.webp", "sj13.webp", "yj.webp"]
       let texts = ['小米11 Ultra ', "小米手环" ," 小米10", "小米9" , "小米8" , "烟机"]
       let price = ['5999元', '100元', '3000元', '3500元', '4000元', '8888元']
        for (let j = 0; j < imgs.length; j++) { //循环list -- div 6次
            for (let i = 0; i <6; ++i){
                list += ` <div class="list">
                               <img src="images/${imgs[j]}">
                               <h5> ${texts[j]}</h5>
                               <h6> ${price[j]}</h6>
                            </div>`
            }
             wrap_item.innerHTML += ` <div class="box communal"'>  
                                           ${list}·
                                            </div>`;
            list = '' // list置空掉上波数据
         }
 }joint()

function tabCut() {
        let nav = $$('.site-header div .nav .front a');
        let box = wrap_item.children
        for (let i = 0; i < nav.length; i++) {
            nav[i].onmouseover = box[i].onmouseover = function () {
                      for (let u = 0; u < box.length; u++) {
                          box[u].style.display = 'none'
                      }
                    for (let v = 0; v < nav.length; v++) {
                        nav[v].classList.remove('ziti')
                    }
                    box[i].style.display = 'flex'
                    wrap_item.style.display = 'block'
                    //此时的this指向 === nav[i]
                    this.classList.add('ziti')
                }
                wrap_item.onmouseleave  =  box[i].onmouseleave = function () {
                    wrap_item.style.display = 'none'
                }
        }
    }tabCut()
} tab()
/**
 * 21-05-22 17:36  - 19:55 周六  banner左边的导航栏
 */
function navLeft(){
    //nav-none-item 24个需要循环
    let banner_list = $$('.banner-list')//所有的a标签导航栏 10个
    //插入HTML
    let wrap_banner = $('.wrap-banner')
    for (let i = 0; i < 10; i++) { //nav_none创建十次
        let divs = document.createElement('div')
            divs.classList.add('nav-none')
            wrap_banner.appendChild(divs)//创建十次
        //240个 img标签 24 * 10 = 240个
        let dateText = ['小米MIX FOLD','小米透明电视','小米笔记本Pro 15','壁挂空调','小米手环5NFC',
            '智能家庭','数据线','剃须刀','小米小爱音箱','眼镜' ,'小米MIX FOLD','小米透明电视','小米笔记本Pro 15','壁挂空调','小米手环5NFC',
                '智能家庭','数据线','剃须刀','小米小爱音箱','眼镜','小米MIX FOLD','小米透明电视','小米笔记本Pro 15','壁挂空调',]
        for (let j = 0; j < 24; j++) {  //循环创建了我的类名为nav-none-item的div24次
            let dataImgs = [
                    'images/shouji11.webp',
                    'images/sj11.webp',
                    'images/pic1.webp',
                    'images/pic2.webp',
                    'images/pic4.webp',
                    'images/pic6.jpg',
                    'images/pic8.webp',
                    'images/sj11.webp',
                    'images/shouhuan.webp',
                    'images/sj12.webp',
                    'images/sj12.webp',
                    'images/sj12.webp',
                    'images/shouji11.webp',
                    'images/sj11.webp',
                    'images/pic1.webp',
                    'images/pic2.webp',
                    'images/pic4.webp',
                    'images/pic6.jpg',
                    'images/pic8.webp',
                    'images/sj11.webp',
                    'images/shouhuan.webp',
                    'images/sj12.webp',
                    'images/sj12.webp',
                    'images/sj12.webp',
                    'images/sj11.webp',
                    'images/pic1.webp',
                    'images/pic2.webp',
                    'images/pic4.webp',
            ]
            let item =  document.createElement('div')
            item.classList.add('nav-none-item')
            divs.append(item)
            let img =  document.createElement('img')
            img.setAttribute('src',`${dataImgs[j]}`)
            item.append(img)
            let spans =  document.createElement('span')
            spans.innerHTML = `${dateText[j]}`
            item.append(spans)
        }
    }
    let nav_none = $$('.nav-none')
    //使用变色来区分一下
    let bs = ['#FFF','#aeb2f8','#d391f5','#ffb57d','#59d3fc','#ca83ff','#ff6cf0','#fcbcc7','#8b8786','#f5f594']
    for (let i = 0; i < banner_list.length; i++) {
        banner_list[i].addEventListener('mouseover',function (){
            for (let j = 0; j < banner_list.length; j++){
                nav_none[j].classList.remove('active')
                banner_list[j].classList.remove('active')
            }
            nav_none[i].classList.add('active')
            nav_none[i].style.backgroundColor = `${bs[i]}`
            banner_list[i].classList.add('active')
        })
        banner_list[i].addEventListener('mouseleave',function (){
            for (let j = 0; j < banner_list.length; j++){
                nav_none[j].classList.remove('active')
                banner_list[j].classList.remove('active')
            }
        })
         //nav_none 隐藏的二级导航栏
        nav_none[i].onmouseover  = function () {
            for (let j = 0; j < banner_list.length; j++){
                nav_none[j].classList.add('active')
            }
        }
        nav_none[i].onmouseleave  = function () {
            for (let j = 0; j < banner_list.length; j++){
                nav_none[j].classList.remove('active')
            }
        }
    }
}navLeft()



//轮播图
let bannerImg = $$('.container .wrap-banner .banner img');
bannerImg[0].classList.add('show-active')//第一个先显示
let dot = $$('.container .wrap-banner .dot a') //小点点
dot[0].classList.add('active')//第一点点显示
let index = 0       //表示第几张图片在展示
let auto_play = () => {
        //遍历所有图片
        for (let i = 0; i < bannerImg.length; i++) {
            //所有的图片先给他隐藏了
            bannerImg[index].classList.remove('show-active')
            dot[index].classList.remove('active')
        }
        index += 1
        if (index >= bannerImg.length) {
            index = 0
        }
        bannerImg[index].classList.add('show-active')
        dot[index].classList.add('active')
}
//开启定时器
let timer = setInterval(auto_play ,3000)
//停止定时器
let banner = $('.banner')
banner.onmousemove = function () { //鼠标被移动
        clearInterval(timer)
}
banner.onmouseleave = function () {
    timer = setInterval(auto_play ,3000)
}
//箭头
function moveArrows() {
//左右箭头的方法
    let  arrows = $$('.container .wrap-banner .arrows span');
    let  leftArrow = $('.container .wrap-banner .arrows span:first-child');
    let  rightArrow = $('.container .wrap-banner .arrows span:last-child');
    for (let arw of arrows) { //小箭头 onmouseover
        arw.onmouseover = function () {
            this.classList.add('active')
        }
        arw.onmouseleave = function (event) {
            this.classList.remove('active')
        }
    }
    leftArrow.addEventListener('click',function () {
        for (let i = 0; i < bannerImg.length; i++) {
            //所有的图片先给他隐藏了
            bannerImg[index].classList.remove('show-active')
            dot[index].classList.remove('active')
        }
        index -= 1
        if (index < 0) {
            index = bannerImg.length - 1
        }
        bannerImg[index].classList.add('show-active')
        dot[index].classList.add('active')
    })
    rightArrow.addEventListener('click',function () {
        auto_play()
    })
}moveArrows()
//dot 点点
function dotfun() {
let dot = $$('.container .wrap-banner .dot a')
for (let i = 0; i < dot.length; i++) {
    dot[i].addEventListener('click',function () {
        for (let i = 0; i < bannerImg.length; i++) {
            bannerImg[index].classList.remove('show-active')
            dot[index].classList.remove('active')
        }
            //获得到自定义的属性值
        index = Number(this.getAttribute('data-index')) //转成数字类型
        bannerImg[index].classList.add('show-active')
        dot[index].classList.add('active')
        // console.log(index)
    })
}
}dotfun()

/*购物车*/
function  cart() {
    let box= $('header .top-header .topbar-cart .box-cart');/*获取标签*/
    let a = $('.topbar-cart .box-cart a');
    let span = $('header .top-header .topbar-cart .box-cart span');
    let list= $('header .top-header .topbar-cart .list');
    //移入显示 增加类名
    box.onmouseover = function (){
        list.classList.add('active');
        box.classList.add('bj');
        span.classList.add('logo');
        a.classList.add('discolor');
    }
    /*移除隐藏  删除类名*/
    box.onmouseout = function (){
        list.classList.remove('active');
        box.classList.remove('bj');
        span.classList.remove('logo');
        a.classList.remove('discolor');
    }
}
cart();

//搜索框
function search() {
    // let box_search = $('.site-header .search .search-box');
    let search_input = $('.site-header .search .search-box input');
    //magnifying glass  放大镜
    let  magnifying_glass = $('.site-header .search .search-box a');
    //pull-down-list 搜索框下面的下拉列表
    let  pull_down_list = $('.site-header .communal .search .pull-down-list');
    //获取焦点的时候做的事情
     search_input.onfocus = function () {
         search_input.classList.add('active');
         magnifying_glass.classList.add('active');
         pull_down_list.classList.add('active');
         pull_down_list.classList.add('active');
     }
    //失去焦点的时候做的事情
    search_input.onblur = function () {
        search_input.classList.remove('active');
        magnifying_glass.classList.remove('active');
        pull_down_list.classList.remove('active');
        pull_down_list.classList.remove('active');
    }
}
search()


//14:00 定时器倒计时
function _count_down() {
    let box = $('.count-down')
    let _hour = box.children[0]
    let _min = box.children[2]
    let _s = box.children[4]
    let  timer = function count_down() {
            let end_time = new Date('2021/11/11 14:00:00'); //声明自己定义的活动结束时间
            let now_time = new Date(); //声明现在的时间
            //用定义结束得时间减去现在得时间
            let time_remaining = parseInt((end_time.getTime() - now_time.getTime()) / 1000);
            let hour = parseInt(time_remaining/ 3600 % 24); //获得小时数
             hour = hour< 10 ? `0${ hour }`: hour
            let min = parseInt(time_remaining / 60 % 60 );//获得分钟
            min = min < 10 ? `0${ min }`: min
            let s = parseInt(time_remaining % 60); //获得秒
             s = s< 10 ? `0${ s }`: s
             //赋值
            _hour.innerHTML = hour
            _min.innerHTML = min
            _s.innerHTML = s
        }
        setInterval(timer,1);

}_count_down()
