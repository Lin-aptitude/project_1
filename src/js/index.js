
require(['config'],function(){
    //等待config加载完后才执行
    require(['jquery','common'],function($,com){
            //导入头部
            $('#head').load('html/header.html .Header')

            //导入尾部
            $('#footer').load('html/header.html .footer',show);

            // 导入右侧部分
            $('.raside').load('html/header.html .r_aside',function(){
                show();
                



            });

            

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
                    $.ajax({
                        type:'get',
                        url:'../api/index.php',
                        dataType:'json',
                        success:function(res){
                           var cont1=res.map((item)=>{
                                return `<li class="item fl" data-id="${item.id}">
                                            <a href="#" class="msg" title="${item.til}">
                                                <img src="${item.imgurl}"/>
                                                <h3>${item.name}</h3>
                                                <h4>${item.dec}</h4>
                                            </a>
                                            <div class="pStop clearfix">
                                                <div class="clearfix allp fl">
                                                    <span class="npri fl">${item.nprice}</span>
                                                    <div class="fl pri">
                                                        <p class="cpri"><span><del>${item.cprice}</del></span></p>
                                                        <p class="spri">立省&nbsp;<span>${item.cprice-item.nprice}</span></p>
                                                    </div>
                                                </div>
                                                <button class="fl btn">${item.btn}</button>
                                            </div>
                                        </li>`
                            }).join('');
                            //写入页面
                            $g1_list.html(cont1).appendTo($mc_c);
                        }
                    }) 
                    

                    //点击图片到详情页
                    $mc_c.on('click','.msg',function(){
                        var $currli= $(this).closest('li');
                        var guid=$currli.attr('data-id');
                        // 跳转页面
                        location.href=`html/details.html?id=I${guid}`;
                    })

                    var datalist = Cookie.get('datalist');

                    if(!datalist){
                        datalist = [];
                    }else{
                        datalist = JSON.parse(datalist);
                    }
                    //加入购物车效果
                    $mc_c.on('click','.btn',function(){
                        var $carlist=$('.carlist');
                        var $currli=$(this).closest('li');
                        var $currimg=$currli.find('img');

                        var guid=$currli.attr('data-id');

                        var currentIdx;
                        var res = datalist.some(function(goods,idx){
                            currentIdx = idx;
                            return goods.guid == guid;
                        });

                        if(res){
                            // 如果商品已经存在，则数量+1
                            datalist[currentIdx].qty++;
                        }else{
                            // 否则添加商品
                            var goods = {
                                guid:guid,
                                qty:1,
                                dec:$currli.find('h4').text(),
                                imgurl:$currimg.attr('src'),
                                name:$currli.find('h3').text(),
                                price:$currli.find('.npri').text()
                            }
                            // 把当前商品添加到数组中
                            datalist.push(goods);
                        }

                        Cookie.set('goodsdata',JSON.stringify(datalist));// * JSON.stringify():把js对象（数组）转换成json字符串


                        //复制当前面图片用于动画效果
                        var $cloneimg=$currimg.clone();
                        //设置样式
                        $cloneimg.css({
                            position:'absolute',
                            top:$currimg.offset().top,
                            left:$currimg.offset().left,
                            width:$currimg.width()
                        });
                        //写入页面
                        $cloneimg.appendTo('body');

                        //添加动画
                        $cloneimg.animate({
                            top:$('.gouwuche').offset().top,
                            left:$('.gouwuche').offset().left,
                            width:20},'10000',function(){
                            //删除图片
                            $cloneimg.remove();
                            car();
                            
                        })
                        //获取cookie
                        var goodsdata= Cookie.get('goodsdata');
                        if(goodsdata){
                            goodsdata = JSON.parse(goodsdata);
                        }

                        function car(){
                            // 计算总价
                            var totolprice=0;
                            // 计算总数量
                            var qty=0;
                            var $ra_cont=$('.ra_cont');
                            var $carlist=$('<ul/>').addClass('carlist');
                            var cont=goodsdata.map((item)=>{
                                totolprice+=item.price*item.qty
                                qty+=item.qty;
                                return `<li class="clearfix" data-id="${item.guid}">
                                            <img class="fl" src="${item.imgurl}"/>
                                            <div class="msg fl">
                                                <h2 >${item.name}</h2>
                                                <p class="p1">
                                                    <a href="#" class="a1">-</a>
                                                    <span>${item.qty}</span>
                                                    <a href="#" class="a2">+</a>
                                                </p>
                                                <p class="p2 clearfix">
                                                    <span class="fl">${item.price}</span>
                                                    <a href="#" class="fr iconfont delete"></a>
                                                </p>
                                            </div>
                                            
                                        </li>`
                            }).join('');
                            $carlist.html('');
                            $carlist.html(cont).insertBefore($('.total'));
                            $('.qty').text(qty);
                            $('.tol').text(totolprice.toFixed(2));

                        }
                        //实现商品的增减效果
                        $('.ra_cont').on('click','.a1',function(){
                            
                        }).on('click','.a2',function(){
                            
                        }).on('click','.delete',function(){
                            var $currli=$(this).closest('li');
                            $currli.remove();
                            var curridx=$currli.attr('data-id');
                            for(var i=0;i<goodsdata.length;i++){
                                if(goodsdata[i].id === curridx){
                                    goodsdata.splice(i,1);
                                    break;
                                }
                            }
                            var date = new Date();
                            date.setDate(date.getDate()+15);
                            document.cookie = 'goodsdata=' + JSON.stringify(goodsdata) + ';expires=' + date.toUTCString();

                        })
                    })

                }
            })
    });
});
