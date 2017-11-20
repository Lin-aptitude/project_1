require(['config'],function(){
    //等待config加载完后才执行
    require(['jquery','common'],function($,com){
        //导入头尾
        $('#l_head').load('../html/header.html .Header',function(){
            $('.index').attr({
                href:'../index.html'
            })
        });
        $('.l_aside').load('../html/header.html .r_aside',function(){
            show();
            $('.r_aside').on('click','.tocar',function(){
                $(this).attr({
                    href:'shoppCart.html'
                })
            })
        });
        $('#l_footer').load('../html/header.html .footer',function(){
            show();
            //到购车效果
            var datalist = Cookie.get('goodsdata');
            if(!datalist){
                datalist = [];
            }else{
                datalist = JSON.parse(datalist);
            }

            //购物车效果
            $mc_c.on('click','.btn',function(){
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
                    
                })

                Cookie.set('goodsdata',JSON.stringify(datalist),'','/');
            })    
        });
        
        //获取元素
        var $mc_c=$('.mc_c');
        var $page=$('<div/>').addClass('page');
        //根据数据生成html   
        var $l_list=$('<ul/>').addClass('llist clearfix');
        //自定义参数
        var pageNo=1;
        var qty=12;
        //发起ajax异步请求
        $.ajax({
            type:'get',
            url:'../api/list.php',
            dataType:'json',
            data:{pageNo:pageNo,qty:qty},
            success:showData
        })
        function showData(res){
            fun(res.date);
            function fun(arr){
                var cont=arr.map((item)=>{
                return `<li class="item fl" data-id="${item.id}">
                            <a href="#" class="msg">
                                <img src="${item.imgurl}"/>
                                <h3>${item.name}</h3>
                                <h4>${item.dec}</h4>
                            </a>
                            <p class="cpri"><span><del>${item.cprice}</del></span></p>
                            <p class="npri"><span>${item.nprice}</span></p>
                            <button class="btn"><a>加入购物车</a></button>
                        </li>`
                }).join('');

                //写入页面
                $mc_c.html('');
                $l_list.html(cont).appendTo($mc_c);


            }
            //排序效果
            $('.mc_t').on('mouseenter','.sort',function(){
                //价格升序降序切换
                this.classList.toggle('keybown');
                this.classList.toggle('arrowhead-left');
                $(this).css({
                    background:'#333',
                    color:'#fff'
                })
                //降序
                if(this.classList.contains('keybown')){
                    var arr=res.date.sort(function(a,b){
                        return a.nprice - b.nprice;
                    }).reverse();
                    fun(arr);
                    page(res)
                }
                //升序
                else{
                    var arr=res.date.sort(function(a,b){
                        return a.nprice - b.nprice;
                    });
                    fun(arr);
                    page(res);
                }
            }).on('mouseleave','.sort',function(){
                $(this).css({
                    background:'#fff',
                    color:'#333'
                })
            })
            page(res);
            function page(res){
                //生成分页
                var pagelen=Math.ceil(res.total/qty);
                $page.html('');//每次先清空前面的
                for(var i=0;i<pagelen;i++){
                    $a=$('<a href="#"/>');
                    $a.text(i+1);
                    if((i+1)===pageNo){
                        $a.addClass('active');
                    }
                    $page.append($a);
                }
                var $i=$('<i/>').text('页面');
                $i.prependTo($page);
                var $next=$('<a href="#"/>').addClass('iconfont jiantou-copy next');
                $next.appendTo($page)
                $page.insertAfter($l_list);

                //页码切换
                $page.on('click','a',function(){
                    console.log(this);
                    pageNo=$(this).text();
                    $.ajax({
                        type:'get',
                        url:'../api/list.php',
                        dataType:'json',
                        data:{pageNo:pageNo,qty:qty},
                        success:showData
                    })
                })

                //到详情页
                $mc_c.on('click','.msg',function(){
                    var $currli= $(this).closest('li');
                    var guid=$currli.attr('data-id');
                    // 跳转页面
                    location.href=`details.html?id=L${guid}`;
                })

            }
            

        }       
    })
})
