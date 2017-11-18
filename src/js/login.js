jQuery(function(){
    //用于提示用
    var $hint=$('<span/>');
    $hint.css({
        position:'absolute',
        left:40,
        color:'#FF5073'
    }).appendTo($('.test'));

    $('.test').on('click','.btn',function(){
        //有户名验证
        var phone =$('#user').val();
        if(!/^1[34578]\d{9}$/.test(phone)){
            $hint.css({top:98}).html('你输入的账号有误？');
            return false;
        }
        //密码验证
        var password = $('#pwd').val();
        if(!/^[^\s]{1,19}$/.test(password)){
            $hint.css({top:158}).html('你输入的密码不符合要求');
            return false;
        }

         //验证用户名密码是否正确
         //发起ajax异步请求
        $.ajax({
            type:'get',
            url:'../api/login.php',
            data:{phone:phone,pwd:password},
            success:function(res){
                if(res==='right'){
                   alert('登录成功！');
                }else{
                   alert('输入的用户名或密码不对')
                }
              
            }
        })
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