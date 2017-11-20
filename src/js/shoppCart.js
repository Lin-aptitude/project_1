require(['config'],function(){
    //等待config加载完后才执行
    require(['jquery','common'],function($,com){
        $('.Header').load('../html/header.html  .Header #top');
        $('#c_footer').load('../html/header.html .footer');
        $('.r_aside').load('../html/header.html .r_aside',show);


        // 获取Cookie
        var goodsdata = Cookie.get('goodsdata');
        if(!goodsdata){
            goodsdata = [];
        }else{
            goodsdata = JSON.parse(goodsdata);
        }
        var alltol=0;
        var $ul=$('<ul/>').addClass('list');
        function fun(){
            // 获取Cookie
            var goodsdata = Cookie.get('goodsdata');
            if(!goodsdata){
                goodsdata = [];
            }else{
                goodsdata = JSON.parse(goodsdata);
            }
            
            //生成HTML
            
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
        //删除单个商品
        $('.shop').on('click','.del',function(){
            var $currli=$(this).closest('li');
            var id=$currli.attr('data-id');
            for(var i=0;i<goodsdata.length;i++){
                var item=goodsdata[i];
                if(item.guid===id){
                    goodsdata.splice(i,1);
                    break;
                }
            }
            var currprice=$currli.find('.sp2').text()*1;
            var currqty=$currli.find('.qty').val()*1;
            alltol-=currprice*currqty;
            if(alltol<0){
                alltol=0;
            }
            $('.alltol').text(alltol);

            Cookie.set('goodsdata',JSON.stringify(goodsdata),'','/');
            $currli.remove();
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
            var currprice=$currli.find('.sp2').text()*1;
            var currqty=$currli.find('.qty').val()*1;
            alltol-=currprice;
            if(currqty<=1){
                alltol=alltol;
            }
            if(alltol<0){
                alltol=0;
            }
            $('.alltol').text(alltol);
            var id=$currli.attr('data-id');
            for(var i=0;i<goodsdata.length;i++){
                var item=goodsdata[i];
                if(item.guid===id){
                    item.qty=res;

                    break;
                }
            }
            Cookie.set('goodsdata',JSON.stringify(goodsdata),'','/');
            
        })
        // 数量增加
        .on('click','.add',function(){
            var $input=$(this).prev('input');
            var res=$input.val()*1;
            res++;
            $input.val('');
            $input.val(res);
            var $currli=$(this).closest('li');

            var currprice=$currli.find('.sp2').text()*1
            var currqty=$currli.find('.qty').val()*1
            alltol+=currprice;
            $('.alltol').text(alltol);

            var id=$currli.attr('data-id');
            for(var i=0;i<goodsdata.length;i++){
                var item=goodsdata[i];
                if(item.guid===id){
                    item.qty=res;
                    break;
                }
            }
            Cookie.set('goodsdata',JSON.stringify(goodsdata),'','/');
           
        })
        
        //清空购物车
        $('.mct4').on('click','.qingchu',function(){
            $ul.html('');
            Cookie.remove('goodsdata','/');
            $('.alltol').text(0);
        })

    })
})
    
    
