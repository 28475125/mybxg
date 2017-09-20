define(['jquery','cookie'],function ($) {
    //  登录功能
    $('#loginBtn').click(function () {
        $.ajax({
            type:'post',
            url:'/api/login',
            data:$('#loginForm').serialize(),   //获取所有的表单数据
            datatype:'json',
            success: function (data) {
                if(data.code==200){
                    //吧用户的登录信息存储到cookie中 方便跨页免共享数据
                    $.cookie('loginInfo',JSON.stringify(data.result))
                    //登录成功，跳转到主页面
                    location.href='/main/index';
                }

            }
        })
        return false    //阻止按钮的默认行为
    })

});