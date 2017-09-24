define(['jquery','template'],function ($,template) {
    $.ajax({
        type:'get',
        url:'/api/teacher/profile',
        dataType:'json',
        success: function (data) {
            var html = template('teacherSettingsTpl', data);
            console.log(html);
            $('#teacherSettings').html(html);
        }
    })
})