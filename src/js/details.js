jQuery(function($){
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
});