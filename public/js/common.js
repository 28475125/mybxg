define(['jquery','cookie'],function ($) {
    /*NProgress.start();
    NProgress.done();*/
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });


    //实现退出功能
    $("#logoutBtn").click(function () {
        $.ajax({
            type:"post",
            url: "/api/logout",
            datatype:'json',
            success:function (data) {
                //console.log(data)
                if(data.code ==200 ){
                    //重新跳转到登录页
                    location.href="/main/login";
                }
            }
        })
    })
    // 检测用户是否登录
    var flag = $.cookie('PHPSESSID');
    if(!flag && location.pathname != '/main/login'){
        // 如果cookie不存在就跳转到登录页
        location.href = '/main/login';
    }
    //设置用户的头像信息
    // console.log($.cookie('loginInfo'));
    var loginInfo = $.cookie('loginInfo');
     //console.log(JSON.parse(loginInfo));
    loginInfo = loginInfo && JSON.parse(loginInfo); //如果有，并存在，就使用JSON.parse();转换成对象形式
    // 设置用户的头像信息
    $('.aside .profile img').attr('src',loginInfo.tc_avatar);
    $('.aside .profile h4').html(loginInfo.tc_name);

});

                    
