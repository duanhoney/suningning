

//导航栏弹出
// {
//     let titles=document.querySelectorAll(".head_left_top");
//     let tanchuss=document.querySelectorAll(".head_left_bottom");
//     let obj=tanchuss[0];
//     titles.forEach(function(ele,index){
//         ele.onmouseenter=function(){
//             obj.style.display="none";
//             tanchuss[index].style.display="block";
//             obj=tanchuss[index];
//         }
//         ele.onmouseleave=function(){
//             tanchuss[index].style.display="none";
//         }
//     })
// }

// {
//     let titls=document.querySelectorAll(".head_right_top");
//     let tans=document.querySelectorAll(".head_right_bottom");
//     let obj=tans[0];
//     titls.forEach(function(ele,index){
//         ele.onmouseenter=function(){
//             obj.style.display="none";
//             tans[index].style.display="block";
//             obj=tans[index];
//         }
//         ele.onmouseleave=function(){
//             tans[index].style.display="none";
//         }
//     })
// }






//轮播图效果
// {
//     var imgs = document.querySelectorAll(".banner_img li");   //获取img
//     var pagers = document.querySelectorAll(".btn_box li");
//     var banner = document.querySelector(".banner_bottommain2");
//     var prev = document.querySelector(".banner_btn1");
//     var next = document.querySelector(".banner_btn2");
//     pagers.forEach(function(ele,index){
//         ele.onclick=function(){
//             for(let i=0;i<imgs.length;i++){
//                     pagers[i].classList.remove("active");
//                     imgs[i].classList.remove("active");
//                 }
//                 this.classList.add("active");
//                 imgs[index].classList.add("active");
//             n=index;  
//             //当鼠标点击轮播点时
//         }
//     })
//     let n=0;
//     // setInterval自动播放
//     let t=setInterval(move,3000);

//     function move(){
//         n++;
//         if(n===imgs.length){
//             n=0;
//         }
//         if(n<0){
//             n=imgs.length-1;
//         }
//         for(var i=0;i<imgs.length;i++){
//                 imgs[i].classList.remove("active");
//                 pagers[i].classList.remove("active");
//             }
//             imgs[n].classList.add("active");
//             pagers[n].classList.add("active");

//     }
//     // 鼠标进入画面禁止
//     banner.onmouseenter=function(){
//         clearInterval(t);  //清除样式鼠标离开不会重新开始
//     }
//     banner.onmouseleave=function(){
//         t=setInterval(move,3000);  //清除样式鼠标离开重新开始
//     }
   
//     let flag=true;
//     next.onclick=function(){
//         if(flag){
//             flag=false;
//             move();
//         }
//     }
//     prev.onclick=function(){
//         if(flag){
//             flag=false;
//             n-=2;
//             move();
//         }
//     }
//     imgs.forEach(function(ele,index){
//         ele.addEventListener("transitionend", function(){
//             flag=true;  
//         })
//     }) 
// }
{
    // 轮播图
    let imgs=document.querySelectorAll(".banner_img li");
    let pages=document.querySelectorAll(".btn_box li");
    pages.forEach(function(value,index){
        value.onclick=function(){
            for (var i=0;i<pages.length;i++){
                imgs[i].classList.remove("active");
                pages[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    })

    // 自动轮播
    let n=0;
    let banner=document.querySelector(".banner_bottommain2");
    function bannerfn(dir="r"){
       if(dir==="r"){
           n++;
           if(n===imgs.length){
               n=0;
           }
       }else if(dir==="l"){
           n--;
           if(n===-1){
               n=imgs.length-1;
           }
       }
        for (var i=0;i<pages.length;i++){
            pages[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        pages[n].classList.add("active");
        imgs[n].classList.add("active");
    }
    let t=setInterval(bannerfn,5000);
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(bannerfn,5000)
    }

    // 左右箭头
    let left=document.querySelector(".banner_btn1");
    let right=document.querySelector(".banner_btn2");
    let flag=true;
    right.onclick=function(){
        if(flag){
            flag=false;
            bannerfn();
        }
    }
    left.onclick=function(){
        if(flag){
            flag=false;
            bannerfn("l");
        }

    }
    imgs.forEach(function(val,index){
        val.addEventListener("transitionend",function(){
            flag=true;
        });
    })
}





//banner_左侧
{
    let xiaohes=document.querySelectorAll(".banner_title3");
    let tanchus=document.querySelectorAll(".item-box");
    let obj=tanchus[0];
    xiaohes.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            tanchus[index].style.display="block";
            obj=tanchus[index];
        }
        ele.onmouseleave=function(){
            tanchus[index].style.display="none";
        }
    })
}



//大聚惠无缝轮播
{
    let prev=document.querySelector(".juhui_neirong_btn1");
    let next=document.querySelector(".juhui_neirong_btn2");
    let inner=document.querySelector(".juhui_neirong_a");
    let n=1;
    let flag=true;
    next.onclick=function(){
        if(flag){
            n++;
            flag=false;
            inner.style.transition="all 1s";
            inner.style.marginLeft=(-995)*n+"px";
        }
    }
    prev.onclick=function(){
        if(flag){
            n--;
            flag=false;
            inner.style.transition="all 1s";
            inner.style.marginLeft=(-995)*n+"px";
        }
    }
    inner.addEventListener("transitionend",function(){
        flag=true;
        if(n===4){
            n=1;
            inner.style.transition="none";
            inner.style.marginLeft="-995px";
        }
        if(n===0){
            n=3;
            inner.style.transition="none";
            inner.style.marginLeft="-2385px";
        }
    })
}




// 楼层跳转
{
    let flag=true;
    let totop=document.querySelector(".aside-di-1");
    totop.onclick=function(){
        let st = document.documentElement.scrollTop;
        let speed=st*30/400;
        let t=setInterval(function(){
            st-=speed;
            if(st<=0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },30)
    }


    let topbar = document.querySelector(".topbar");
    let leftbar = document.querySelector(".aside-nei");
    window.onscroll = function () {
        if(flag){
            let st = document.documentElement.scrollTop;
            // console.log(st);
            if (st >= 900) {
                topbar.style.top = "0";
            } else {
                topbar.style.top = "-50px";
            }
            if (st >= 2740) {
                leftbar.style.display = "block";
            } else {
                leftbar.style.display = "none";
            }
            lists.forEach(function (value, index) {
                if (st >= value.offsetTop-110) {
                    for (let i = 0; i < lists.length; i++) {
                        floors[i].classList.remove("active");
                    }
                    floors[index].classList.add("active");
                }
            })
        }
    }


    let lists = document.querySelectorAll(".lists");
    let floors = document.querySelectorAll(".aside-nei li");
    floors.forEach(function (ele, index) {
        ele.onclick = function () {
            let ot = lists[index].offsetTop;
            let now = document.documentElement.scrollTop;
            let speed = (ot - now) * 30 / 400;
            let time = 0;
            flag=false;
            let t = setInterval(function () {
                now += speed;
                time += 30;
                if (time === 300) {
                    clearInterval(t);
                    now = ot;
                    flag=true;
                }
                document.documentElement.scrollTop = now;
            }, 30)
        }
    })
}





// 侧导航
{
    let xuan=document.querySelectorAll(".luobo-neikuan-left>li");
    let ka=document.querySelectorAll('.luobo-neikuan .item-box');
    xuan.forEach(function(value,index){
        value.onmousemove=function(){
            for(let i=0;i<xuan.length;i++){
                ka[i].classList.remove('xianshi');
            }
            ka[index].classList.add("xianshi");
        }
        value.onmouseout=function(){
            for(let i=0;i<xuan.length;i++){
                ka[i].classList.remove('xianshi');
            }
        }
    })
}