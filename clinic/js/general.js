$(function(){var e=function(e,c,n){if("[object Object]"===Object.prototype.toString.call(e))for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&c.call(n,e[o],o,e);else for(var t=0,l=e.length;l>t;t++)c.call(n,e[t],t,e)},c=document.querySelectorAll(".hamburger");c.length>0&&e(c,function(e){e.addEventListener("click",function(){this.classList.toggle("is-active")},!1)});var n=["#d35400","#c0392b","#2980b9","#f39c12","#34495e","#3498db"],o=Math.floor(Math.random()*n.length),t=n.splice(o,1);$(".green input[type='checkbox']:checked + label span").css({"background-color":t}),$(".green input[type='radio']:checked + label span").css({"background-color":t}),$(".green .checkbox").on("click",function(){$(".green input[type='checkbox']").is(":checked")?$(".green input[type='checkbox']:checked + label span").css({"background-color":"#ecf0f1"}):$(".green input[type='checkbox'] + label span").css({"background-color":t})})});