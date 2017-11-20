require(['config'],function(){
    require(['jquery','common'],function($,com){
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
        $('#d_footer').load('../html/header.html .footer',show);
    })
})
  