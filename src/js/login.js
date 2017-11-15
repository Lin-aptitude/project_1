jQuery(function(){
    //用于提示用
    var $hint=$('<span/>');
    $('.test').css({position:'relative'});
    $hint.css({
        position:'absolute',
        left:40,
        color:'#FF5073'
    }).appendTo($('.test'));
    $('.test').on('click','.btn',function(){
        //有户名验证
        var username =$('#user')[0].value;
        if(!/^[a-z][\w\-]{5,19}$/.test(username)){
            $hint.css({top:98}).html('你输入的账号有误？');
            return false;
        }
        //密码验证
        var password = $('#pwd')[0].value;
        if(!/^[^\s]{1,19}$/.test(password)){
            $hint.css({top:158}).html('你输入的密码不符合要求');
            return false;
        }
    })

    //导入尾部
    $('#d_footer').load('../html/header.html .footer',function(){
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
    });
})