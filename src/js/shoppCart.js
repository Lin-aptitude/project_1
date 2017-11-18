require(['config'],function(){
    //等待config加载完后才执行
    require(['jquery','common'],function($,com){
        $('.Header').load('../html/header.html  .Header #top');
        $('#c_footer').load('../html/header.html .footer',show);
        $('.r_aside').load('../html/header.html .r_aside',show);


        // 获取Cookie
        var goodsdata = Cookie.get('goodsdata');
        if(!goodsdata){
            goodsdata = [];
        }else{
            goodsdata = JSON.parse(goodsdata);
        }
       
        function fun(){
            
            var alltol=0;
            //生成HTML
            var $ul=$('<ul/>').addClass('list');
            var cont=goodsdata.map((item)=>{
                alltol+=item.price*item.qty;
                return `<li data-id="${item.guid}" class="clearfix">
                           <i class="iconfont ic_check_box_px"></i>
                           <a class="fl mcl" href="#"><img src="../${item.imgurl}" /></a>
                           <div class="fl mcr">
                                <a class="name">${item.name}</a>
                                <p class="msg clearfix">
                                    <span class="fl sp1">${item.dec}</span>
                                    <span class="fl sp2">${item.price}</span>
                                    <a class="sub sa fl">-</a>
                                    <input class="fl qty" value="${item.qty}"/>
                                    <a class="add fl sa">+</a>
                                    <a class="fl a3 del">删除</a>
                                </p>
                           </div>
                        </li>`
            }).join('');
            $ul.html('');
            $('.alltol').text(alltol);
            $ul.html(cont).insertBefore($('.tol'));
        }

        fun();

        $('.shop').on('click','.del',function(){
            var $currli=$(this).closest('li');
            var id=$currli.attr('data-id');
            $currli.remove();
            for(var i=0;i<goodsdata.length;i++){
                var item=goodsdata[i];
                if(item.guid===id){
                    goodsdata.slice(i,1);
                    console.log(goodsdata.slice(i,1));
                    break;
                }
            }

            if(goodsdata){
                 Cookie.set('goodsdata',JSON.stringify(goodsdata));
                 fun();
            }
            
        })
        //数量减少
        .on('click','.sub',function(){
            var $input=$(this).next('input');
            var res=$input.val()*1;
            res--;
            if(res<1){
                res=1;
            }
            $input.val(res);
            var $currli=$(this).closest('li');
            var id=$currli.attr('data-id');
            for(var i=0;i<goodsdata.length;i++){
                var item=goodsdata[i];
                if(item.guid===id){
                    item.qty=res;
                    break;
                }
            }
            Cookie.set('goodsdata',JSON.stringify(goodsdata));
            fun()
        })
        // 数量增加
        .on('click','.add',function(){
            var $input=$(this).next();
            var res=$input.val()*1;
            res++;
            $input.val(res);
            var $currli=$(this).closest('li');
            var id=$currli.attr('data-id');
            for(var i=0;i<goodsdata.length;i++){
                var item=goodsdata[i];
                if(item.guid===id){
                    item.qty=res;
                    break;
                }
            }
            Cookie.set('goodsdata',JSON.stringify(goodsdata));
            fun();
        })
        


    })
})
    
    
