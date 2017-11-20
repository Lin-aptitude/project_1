require(['config'],function(){
  require(['jquery','common','jqzoom'],function($,com){
    //导入头部
    $('#dq_head').load('../html/header.html .Header' )
    $('#dq_footer').load('../html/header.html .footer',show);
    $('#dq_aside').load('../html/header.html .r_aside',show);
    

    //图文详情部分的效果
    $('.dq_a2 ul li').first('li').css({
      color:'#FF76BD',
      backgroundColor:'#fff',
      borderBottom:'1px solid #FF5073'
    })
         
    $('.dq_a2 .cont .sa').first('.sa').show().siblings('.sa').hide();
    $('.dq_a2').on('click','li',function(){
          $(this).css({
              color:'#FF76BD',
              backgroundColor:'#fff',
              borderBottom:'1px solid #FF5073'
          }).siblings('li').css({
              backgroundColor:'#eee',
              borderBottom:0
          });
          var idx=$(this).index();
          $('.dq_a2 .cont .sa').eq(idx).show().siblings('.sa').hide();
    })

      // 获取传过来的参数
      var res=location.search;
      var str=res.slice(4,5);

      if(str==='L'){
        List(res);
      }
      else if(str==='I'){
        index(res);
      }
      //得到列表页传过来的的数据
      function List(){
        res=res.slice(5);
        $.ajax({
          type:'get',
          url:'../api/list.php',
          data:{id:res},
          success:function(str){
            var obj=$.parseJSON(str);
            var data=obj.date[0];
            func(data)
          }
        })
      }
      //得到首页传过来的的数据
      function index(){
        res=res.slice(5);
        $.ajax({
          type:'get',
          url:'../api/index.php',
          data:{id:res},
          success:function(str){
            var arr=$.parseJSON(str);
            var data=arr[0];
            func(data)
          }
        })
      }

      //数量增减效果
              var num=$('.int').val()*1;
              $('.qty').on('click','.jn',function(){
                num--;
                if(num<1){
                  num=1;
                }
                $('.int').val(num);
                
                // goodsdata.forEach(function(item,idx){
                //   if(idx===res){
                //     item.qty=num;
                //     break;
                //   }
                // })
                // Cookie.set('goodsdata',JSON.stringify(goodsdata),'','/');  
              }).on('click','.ja',function(){
                num++;
                $('.int').val(num);
                
                // goodsdata.forEach(function(item,idx){
                //   if(idx===res){
                //     item.qty=num;
                //     break;
                //   }
                // })
                // Cookie.set('goodsdata',JSON.stringify(goodsdata),'','/');  
              })

      //对数据进行处理（公共部分封装）
      function func(data){
              //大图显示
              $('.goods').attr({
                src:`../${data.imgurl}`,
                dataBig:`../${data.imgurl}`
              })
              //小图显示
              $('.cgoods').attr({
                src:`../${data.imgurl}`
              })
              //价格
              $('.sa')[0].innerHTML=`<del>${data.cprice}</del>`;
              $('.sa')[1].innerText=data.nprice;
              $('.til').html(data.til);
              //标题
              $('.title').html(data.name+data.dec);

              


              $('.dq_mr').on('click','.addcar',function(){
                  //到购车效果
                  // 获取Cookie
                  var goodsdata = Cookie.get('goodsdata');
                  if(!goodsdata){
                      goodsdata = [];
                  }else{
                      goodsdata = JSON.parse(goodsdata);
                  }

                  var da = goodsdata.some(function(goods,idx){
                      currentIdx = idx;
                      return goods.guid == res;
                  });
                  
                  if(da){
                      // 如果商品已经存在，则数量+1
                      goodsdata[currentIdx].qty++;
                  }else{
                      // 否则添加商品
                      var goods = {
                          guid:res,
                          qty:1,
                          dec:data.dec,
                          imgurl:data.imgurl,
                          name:data.name,
                          price:data.nprice
                      }
                      // 把当前商品添加到数组中
                      goodsdata.push(goods);
                      Cookie.set('goodsdata',JSON.stringify(goodsdata),'','/');
                  }



                  $(this).attr({
                    href:'shoppCart.html'
                  })
              });
      }

      //放大镜效果
      $('.bigPic').gdsZoom({width:400,height:432});

      

     
  })
})