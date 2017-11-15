/*jQuery(function($){
            //导入头部
            $('#head').load('html/header.html .Header')

            //导入尾部
            $('#footer').load('html/header.html .footer',function(){

                // 左侧尾部鼠标移入事件
                $('.ewm').on('mouseenter','.span',function(){
                    //获取鼠标移入时的idx
                    var idx=$(this).index('.span');
                    //显示对应的第idx个span 
                    $(this).siblings('i').eq(idx).show().siblings('i').hide();
                }).on('mouseleave','.span',function(){
                    var idx=$(this).index('.span');
                    $(this).siblings('i').eq(idx).hide();
                });
            })

            // 导入右侧部分
            $('.raside').load('html/header.html .r_aside',function(){
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

            })

            $.ajax({
                url: '../api/data/index.json',
                type: 'GET',
                dataType: 'json',
                success:function(res){
                    // 首页main顶部数据
                    var $mct2=$('.mct2');
                    var $g0_list=$('<ul/>').addClass('olist clearfix');
                    var cont0=res.datatop.map((item)=>{
                        return `<li class="it_c">
                                    <a href="#" class="lia">
                                        <img src="${item.imgurl}" alt="">
                                        <h3>${item.title}</h3>
                                        <p>
                                            <span class="sp1">${item.nprice}</span>
                                            &nbsp;<span class="sp2">&nbsp;<del>${item.cprice}</del></span>
                                        </p>
                                    </a>
                                </li>`
                    });
                    $g0_list.html(cont0).appendTo($mct2);

                    var $mct=$('.mc_t');
                    //添加前后按钮并写入页面
                    var $next=$('<i/>');
                    $next.addClass('next iconfont jiantou-copy').appendTo($mct);
                    var $prev=$('<i/>');
                    $prev.addClass('prev iconfont jiantou-copy-copy-copy').appendTo($mct);

                    var $li=$('.it_c').first('li');
                    //复制第一个li到最后
                    var $cloneli=$li.clone();
                    $cloneli.appendTo($g0_list);
                    $g0_list.css({
                        width:$li.width()*(res.datatop.length+1),
                        height:$li.height()
                    })

                    //轮播效果
                    var len=$g0_list.children('li').length;
                    var idx=0;
                    var timer=setInterval(autoplay,3000);
                    $mct.on('click','.prev',()=>{
                        idx--;
                        show();
                    }).on('click','.next',()=>{
                        idx++;
                        show();
                    }).on('mouseenter','li',()=>{
                        clearInterval(timer);
                    }).on('mouseleave','li',()=>{
                        timer = setInterval(autoplay,3000);
                    })
                    function autoplay(){
                        idx++;
                        show();
                    }
                    function show(){
                        if(idx>len-4){
                            idx=1;//从第二张开始播放
                            $g0_list.css({left:0})//滚当到最后，瞬间让ul的left值变为零
                        }else if(idx<0){
                            idx=len
                        }
                         $g0_list.animate({left:-idx*$cloneli.outerWidth()});
                        
                    }

                    //首页main中间数据
                    //根据数据生成html   
                    var $g1_list=$('<ul/>').addClass('glist clearfix');
                    var $mc_c=$('.mc_c');
                    var cont1=res.datamain.map((item)=>{
                        return `<li class="item fl" data-id="it${item.id}">
                                    <a href="#" class="msg">
                                        <img src="${item.imgurl}"/>
                                        <h3>${item.title}</h3>
                                        <h4>${item.dec}</h4>
                                    </a>
                                    <div class="pStop clearfix">
                                        <div class="clearfix allp fl">
                                            <span class="npri fl">${item.now_price}</span>
                                            <div class="fl pri">
                                                <p class="cpri"><span><del>${item.cost_price}</del></span></p>
                                                <p class="spri">立省&nbsp;<span>${item.save_price}</span></p>
                                            </div>
                                        </div>
                                        <button class="fl">${item.btn}</button>
                                    </div>
                                </li>`
                    });
                    //写入页面
                    $g1_list.html(cont1).appendTo($mc_c);
                }
            })
            
        })*/

require(['config'],function(){
    //等待config加载完后才执行
    require(['jquery','common'],function($,com){
            //导入头部
            $('#head').load('html/header.html .Header')

            //导入尾部
            $('#footer').load('html/header.html .footer',show);

            // 导入右侧部分
            $('.raside').load('html/header.html .r_aside',show);

            $.ajax({
                url: '../api/data/index.json',
                type: 'GET',
                dataType: 'json',
                success:function(res){
                    // 首页main顶部数据
                    var $mct2=$('.mct2');
                    var $g0_list=$('<ul/>').addClass('olist clearfix');
                    var cont0=res.datatop.map((item)=>{
                        return `<li class="it_c">
                                    <a href="#" class="lia">
                                        <img src="${item.imgurl}" alt="">
                                        <h3>${item.title}</h3>
                                        <p>
                                            <span class="sp1">${item.nprice}</span>
                                            &nbsp;<span class="sp2">&nbsp;<del>${item.cprice}</del></span>
                                        </p>
                                    </a>
                                </li>`
                    });
                    $g0_list.html(cont0).appendTo($mct2);

                    var $mct=$('.mc_t');
                    //添加前后按钮并写入页面
                    var $next=$('<i/>');
                    $next.addClass('next iconfont jiantou-copy').appendTo($mct);
                    var $prev=$('<i/>');
                    $prev.addClass('prev iconfont jiantou-copy-copy-copy').appendTo($mct);

                    var $li=$('.it_c').first('li');
                    //复制第一个li到最后
                    var $cloneli=$li.clone();
                    $cloneli.appendTo($g0_list);
                    $g0_list.css({
                        width:$li.width()*(res.datatop.length+1),
                        height:$li.height()
                    })

                    //轮播效果
                    var len=$g0_list.children('li').length;
                    var idx=0;
                    var timer=setInterval(autoplay,3000);
                    $mct.on('click','.prev',()=>{
                        idx--;
                        show();
                    }).on('click','.next',()=>{
                        idx++;
                        show();
                    }).on('mouseenter','li',()=>{
                        clearInterval(timer);
                    }).on('mouseleave','li',()=>{
                        timer = setInterval(autoplay,3000);
                    })
                    function autoplay(){
                        idx++;
                        show();
                    }
                    function show(){
                        if(idx>len-4){
                            idx=1;//从第二张开始播放
                            $g0_list.css({left:0})//滚当到最后，瞬间让ul的left值变为零
                        }else if(idx<0){
                            idx=len
                        }
                         $g0_list.animate({left:-idx*$cloneli.outerWidth()});
                        
                    }

                    //首页main中间数据
                    //根据数据生成html   
                    var $g1_list=$('<ul/>').addClass('glist clearfix');
                    var $mc_c=$('.mc_c');
                    var cont1=res.datamain.map((item)=>{
                        return `<li class="item fl" data-id="it${item.id}">
                                    <a href="#" class="msg">
                                        <img src="${item.imgurl}"/>
                                        <h3>${item.title}</h3>
                                        <h4>${item.dec}</h4>
                                    </a>
                                    <div class="pStop clearfix">
                                        <div class="clearfix allp fl">
                                            <span class="npri fl">${item.now_price}</span>
                                            <div class="fl pri">
                                                <p class="cpri"><span><del>${item.cost_price}</del></span></p>
                                                <p class="spri">立省&nbsp;<span>${item.save_price}</span></p>
                                            </div>
                                        </div>
                                        <button class="fl">${item.btn}</button>
                                    </div>
                                </li>`
                    });
                    //写入页面
                    $g1_list.html(cont1).appendTo($mc_c);
                }
            })
    });
});
