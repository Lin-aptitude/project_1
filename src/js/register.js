jQuery(function($){
            //导入登录页的内容
            $('#z_header').load('../html/login.html #d_header');

            $('#z_banner').load('../html/login.html #d_banner',function(){
                //注册页面对引用来的登录页面进行修改
                //以下为注册页面与登录页面不同的部分
                $('h2').css({marginBottom:40});
                $('h2 span').html('注册MEMEBOX帐号');
                $('h2 a').html('立即登录>>').css({
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
                $(this).on('blur','#user',function(){
                    //发起ajax异步请求
                    var user=$('#user')[0].value;
                    $.ajax({
                        type:'get',
                        url:'../api/register.php',
                        data:{username:user},
                        success:function(res){
                            console.log(res);
                            
                        }
                    })
                })
          })
          
          

        //导入尾部
        $('#z_footer').load('../html/header.html .footer',function(){
            // 左侧尾部鼠标移入事件
            $('.ewm').on('mouseenter','.span',function(){
                //获取鼠标移入时的idx
                var idx=$(this).index('.span');
                //显示对应的第idx个span 
                $(this).siblings('i').eq(idx).show().siblings('i').hide();
            })
            //移出效果
            .on('mouseleave','.span',function(){
                var idx=$(this).index('.span');
                $(this).siblings('i').eq(idx).hide();
            });
        });
      })