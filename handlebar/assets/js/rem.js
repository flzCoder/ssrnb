(function(){
  "use strict";
  var Dpr = 1,
      uAgent = window.navigator.userAgent;
  var isIOS = uAgent.match(/iphone/i);
  var isYIXIN = uAgent.match(/yixin/i);
  var is2345 = uAgent.match(/Mb2345/i);
  var ishaosou = uAgent.match(/mso_app/i);
  var isSogou = uAgent.match(/sogoumobilebrowser/ig);
  var isLiebao = uAgent.match(/liebaofast/i);
  var isGnbr = uAgent.match(/GNBR/i);
  var $fixed = document.getElementById("fixed");
  function resizeRoot() {
      var wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width : window.innerWidth : window.innerWidth,
          wDpr, wFsize;
      var wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ? screen.height : window.innerHeight : window.innerHeight;
      if (window.devicePixelRatio) {
          wDpr = window.devicePixelRatio;
      } else {
          wDpr = isIOS ? wWidth > 818 ? 3 : wWidth > 480 ? 2 : 1 : 1;
      }
      if (isIOS) {
          wWidth = screen.width;
          wHeight = screen.height;
      }
      // if(window.orientation==90||window.orientation==-90){
      //     wWidth = wHeight;
      // }else if((window.orientation==180||window.orientation==0)){
      // }
      if (wWidth > wHeight) {
          wWidth = wHeight;
      }
      wFsize = wWidth > 1080 ? 144 : wWidth / 7.5;
      wFsize = wFsize > 32 ? wFsize : 32;
      if (wFsize > 100) wFsize = 100;
      window.screenWidth_ = wWidth;
      if (isYIXIN || is2345 || ishaosou || isSogou || isLiebao || isGnbr) { //YIXIN 和 2345 这里有个刚调用系统浏览器时候的bug，需要一点延迟来获取
          setTimeout(function () {
              wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width : window.innerWidth : window.innerWidth;
              wHeight = (screen.height > 0) ? (window.innerHeight >= screen.height || window.innerHeight == 0) ? screen.height : window.innerHeight : window.innerHeight;
              wFsize = wWidth > 1080 ? 144 : wWidth / 7.5;
              wFsize = wFsize > 32 ? wFsize : 32;
              // document.getElementsByTagName('html')[0].dataset.dpr = wDpr;
              console.log('wap_common rem_show_resize.html:48');
              document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';
              if ($fixed) {
                console.log('$fixed1',$fixed);
                  $fixed.style.display = "none";
              }
          }, 500);
      } else {
          // document.getElementsByTagName('html')[0].dataset.dpr = wDpr;
          console.log('wap_common rem_show_resize.html:58');
          document.getElementsByTagName('html')[0].style.fontSize = wFsize + 'px';
          if ($fixed) {
            console.log('$fixed2',$fixed);
              $fixed.style.display = "none";
          }
      }
      // alert("fz="+wFsize+";dpr="+window.devicePixelRatio+";UA="+uAgent+";width="+wWidth+";sw="+screen.width+";wiw="+window.innerWidth+";wsw="+window.screen.width+window.screen.availWidth);
  }
  resizeRoot();
  /**
   * [修复android SDK ＜ 19 的时候出现的viewPort不正确问题，延时200ms、5次。@!Important!@依赖于index的window.screenWidth_ = wWidth;]
   * [viewPort改变的时候回想浏览器发送通知viewPort:changed]
   * @param  {[int]} delay [延时ms，默认200ms]
   * @param  {[int]} times [次数，默认5次]
   */
  var reviseViewPort = function (delay, times) {
      var _delay = delay || 200,
          count = 0,
          max_count = times || 5;
      var timer = setInterval(function () {
          var _width = (screen.width > 0) ? (window.innerWidth >= screen.width) ? screen.width : window.innerWidth : window.innerWidth,
              _wFsize;
          if (_width < window.screenWidth_) {
              window.screenWidth_ = _width;
              //$(window).trigger('viewPort:changed', _width);
              _wFsize = _width > 1080 ? 144 : _width / 7.5;
              _wFsize = _wFsize > 32 ? _wFsize : 32;
              console.log('wap_common rem_show_resize.html:88');
              document.getElementsByTagName('html')[0].style.fontSize = _wFsize + 'px';
              clearInterval(timer);
          } else {
              count++;
          }
          if (count >= max_count) {
              clearInterval(timer);
          }
      }, _delay);
  };
  reviseViewPort(200);

})()
