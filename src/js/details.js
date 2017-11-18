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
      function List(){
        res=res.slice(5);
        $.ajax({
          type:'get',
          url:'../api/list.php',
          data:{id:res},
          success:function(str){
            var obj=$.parseJSON(str);
            var data=obj.date[0];
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
            $('.sa')[0].innerHTML=`<del>${data.nprice}</del>`;
            $('.sa')[1].innerText=data.cprice;
            $('.til').html(data.til);
            //标题
            $('.title').html(data.name+data.dec);
          }
        })
      }
      
      function index(){
        res=res.slice(5);
        $.ajax({
          type:'get',
          url:'../api/index.php',
          data:{id:res},
          success:function(str){
            var arr=$.parseJSON(str);
            var data=arr[0];
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
            $('.sa')[0].innerHTML=`<del>${data.nprice}</del>`;
            $('.sa')[1].innerText=data.cprice;
            $('.til').html(data.til);
            //标题
            $('.title').html(data.name+data.dec);
          }
        })
      }
      
      //数量增减效果
      var res=$('.int').val()*1;
      $('.qty').on('click','.jn',function(){
        res--;
        if(res<1){
          res=1;
        }
        $('.int').val(res)
      }).on('click','.ja',function(){
        res++;
        $('.int').val(res);
      })
   


      //放大镜效果
      $('.bigPic').gdsZoom({width:400,height:432})
     
  })
})