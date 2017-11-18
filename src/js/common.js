  function show(){
      // 左侧尾部鼠标移入事件
      $('.ewm').on('mouseenter','.span',function(){
          console.log($('.ewm'));
          var idx=$(this).index('.span');
          $(this).siblings('i').eq(idx).show().siblings('i').hide();
      }).on('mouseleave','.span',function(){
          var idx=$(this).index('.span');
          $(this).siblings('i').eq(idx).hide();
      });

      // 右侧效果
      //鼠标移入效果
      var $raside=$('.r_aside');
      $('.r_aside .lsp').hide();
      //移入效果
      $raside.on('mouseover','.sa',function(){
          var $lsp=$(this).find('.lsp');
          $lsp.show().css({left:-120,top:0}).stop().animate({left:-92},500)
      })
      //移出效果
      .on('mouseout','.sa',function(){
          var $lsp=$(this).find('.lsp');
          $lsp.stop().hide();
      })
      //返回顶部效果
      .on('click','.gotop',function(){
        var timer;
        var scrollTop = window.scrollY;
        timer = setInterval(function(){
            var speed = scrollTop/10;
            scrollTop -= speed;
            if(scrollTop <= 0 || speed <=5){
                clearInterval(timer);
                scrollTop = 0;
            }
            scrollTo(0,scrollTop);
        },20);
      })
      //购物车展开动画
      .on('click','.car',function(){
          $('.ra_cont').animate({left:-280});
      })
  }
//cookie操作
//增，删，查，改
var Cookie = {
  /**
   * [添加/修改cookie]
   * @param {String} name    [cookie名]
   * @param {String} val     [cookie值]
   * @param {[Date]} expires [cookie有效期]
   * @param {[String]} path    [cookie保存路径]
   */
  set:function(name,val,expires,path){
    var str = name + '=' + val;

    // 有效期
    if(expires){
      str += ';expires=' + expires.toUTCString();
    }

    // 保存路径
    if(path){
      str += ';path=' + path;
    }

    // 写入cookie
    document.cookie = str;
  },

  /**
   * [删除cookie]
   * @param  {String} name [要删除的cookie名]
   * @param  {[String]} path [指定路径]
   */
  remove:function(name,path){
    var now = new Date();
    now.setDate(now.getDate()-7);

    // document.cookie = name + '=null;expires=' + now.toUTCString();
    // 利用添加方法达到删除效果
    this.set(name,'null',now,path);
  },

  /**
   * [获取cookie]
   * @param  {String} name [cookie]
   * @return {String}      [description]
   */
  get:function(name){
    var res = '';

    // 获取能访问的所有cookie
    var cookies = document.cookie;

    // 判断是否存在cookie
    if(!cookies.length){
      return res;
    }

    // cookie字符串拆成数组
    cookies = cookies.split('; ');

    // 遍历数组，找出name对应cookie值
    for(var i=0;i<cookies.length;i++){
      // 拆分cookie名和cookie值
      var arr = cookies[i].split('=');
      if(arr[0] === name){
        res = arr[1];
        break;
      }
    }

    return res;
  }
}

