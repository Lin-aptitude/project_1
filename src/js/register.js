
require(['config'],function(){
     //等待config加载完后才执行
    require(['jquery','common'],function($,com){
        //导入登录页的内容
            $('#z_header').load('../html/login.html #d_header');
            $('#z_footer').load('../html/header.html .footer',show);

            $('#z_banner').load('../html/login.html #d_banner',function(){
                //注册页面对引用来的登录页面进行修改
                //以下为注册页面与登录页面不同的部分
                $('h2').css({marginBottom:40});
                $('h2 span').html('注册MEMEBOX帐号');
                $('h2 a').html('立即登录>>').attr({
                    href:'../html/login.html'
                });

                $('input')[0].placeholder='请输入手机号';
                $('input')[1].placeholder='请输入6-16位密码';
                // 创建验证码输入框
                var $yzm=$('<input/>');
                $yzm.insertBefore($('.btn')).css({
                    width:230,
                    marginRight:5
                }).addClass('yzm');

                $yzm[0].placeholder='请输入验证码';
                $('.btn a').html('注册');

                // 右边的发送按钮
                var $send=$('<a/>');
                $send.html('发送验证码').css({
                    href:'#',
                    float:'right',
                    width:114,
                    height:40,
                    color:'#FF5073',
                    textAlign:'center',
                    paddingTop:10,
                    border:'1px solid #FF5073'
                });
                $send.insertAfter($yzm);

                var $sp=$('<span/>')
                $sp.html('注册即表示您已同意')
                $('.link').prepend($sp).css({
                    textAlign:'center',
                    marginBottom:0
                })
                $('.link a').html('美美箱用户协议').css({
                    float:'none',
                    color:'#FF5073'
                });

                //判断用户名是否被占用
                $(this).on('click','.btn',function(){
                    //发起ajax异步请求
                    var phone=$('#user').val();
                    var pwd=$('#pwd').val();
                    var $ts=$('<span/>')
                    $ts.insertAfter($('#user')).css({
                        position:'absolute',
                        color:'#FF5073',
                        left:42,
                        top:98
                    });
                    //用于提示用
                    var $hint=$('<span/>');
                    $hint.css({
                        position:'absolute',
                        left:40,
                        color:'#FF5073'
                    }).appendTo($('.test'));

                    if(!/^1[34578]\d{9}$/.test(phone)){
                        $hint.css({top:98}).html('你输入的账号格式有误？');
                        return false;
                    }
                   
                    if(!/^[^\s]{1,19}$/.test(pwd)){
                        $hint.css({top:158}).html('你输入的密码不符合要求');
                        return false;
                    }

                    
                    $.ajax({
                        type:'get',
                        url:'../api/register.php',
                        data:{phone:phone,pwd:pwd},
                        success:function(res){
                            if(res=='no'){
                                $('#user').val('');
                                $('#user')[0].focus()
                                $('#user').css({
                                    borderColor:'#FF5073'
                                });
                               $ts.text('你输入的手机号已被注册！')
                            }else{
                                $('.btn a').attr({
                                     href:'../html/login.html'
                                })
                            }
                        }
                    })
                })
            })
    })
})
   