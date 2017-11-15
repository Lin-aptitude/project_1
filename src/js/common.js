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
        }

