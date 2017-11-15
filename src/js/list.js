jQuery(function(){
        //获取元素
        var $mc_c=$('.mc_c');
        
        //自定义参数
        var pageNo=1;
        var qty=10;
        //发起ajax异步请求
        $.ajax({
            type:'get',
            url:'../api/list.php',
            dataType:'json',
            data:{pageNo:pageNo,qty:qty},
            success:function(res){
                console.log( typeof res);
                //根据数据生成html   
                var $l_list=$('<ul/>').addClass('llist clearfix');
                console.log($l_list);
                var $mc_c=$('.mc_c');
                console.log(res.date);
                var cont=res.date.map((item)=>{
                    return `<li class="item fl" data-id="it${item.id}">
                                <a href="#" class="msg">
                                    <img src="${item.imgurl}"/>
                                    <h3>${item.title}</h3>
                                    <h4>${item.dec}</h4>
                                </a>
                                <p class="cpri"><span><del>${item.cost_price}</del></span></p>
                                <p class="npri"><span>${item.now_price}</span></p>
                                <button class="btn"><a href="#">${item.btn}</a></button>
                            </li>`
                });
                //写入页面
                $l_list.html(cont).appendTo($mc_c);

                // //生成分页
                // var pagelen=Math.ceil(res.total/qty);
                // $page.html('');//每次先清空前面的
                // for(var i=0;i<pagelen;i++){
                //     $span=$('<span/>');
                //     $span.text(i+1);
                //     if((i+1)===pageNo){
                //         $span.addClass('active');
                //     }
                //     $page.append($span);
                // }
            }
        })
        //分页切换
        // $page.on('click','span',function(){
        //     pageNo=$(this).text()*1;
        //     $.ajax({
        //         type:'get',
        //         dataType:'json',
        //         url:'../api/list.php',
        //         data:{pageNo:pageNo,qty:qty},
        //         success:function(res){
        //             // 创建ul
        //             var $ul=$('<ul/>');
        //             $ul.html('');
        //             console.log(res);
        //             var cont=res.date.map(item=>{
        //                 return `<li>
        //                             <h4>${item.name}</h4>
        //                             <p>${item.content}</p>
        //                         </li>`
        //             }).join('');
        //             $ul.html(cont);
        //             $datalist.html(' ');
        //             $ul.appendTo($datalist);

        //             //生成分页
        //             var pagelen=Math.ceil(res.total/qty);
        //             $page.html('');//每次先清空前面的
        //             for(var i=0;i<pagelen;i++){
        //                 $span=$('<span/>');
        //                 $span.text(i+1);
        //                 if((i+1)===pageNo){
        //                     $span.addClass('active');
        //                 }
        //                 $page.append($span);
        //             }
        //         }
        //     })
        // })


})
