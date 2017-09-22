define(['jquery','template','util'],function ($, template,util) {
    var tcId = util.qs('tcId');
    if(tcId) {
         // Id存在  编辑教师
        $.ajax({
            type:'get',
            url:'/api/teacher/edit',
            data:{tc_id:tcId},
            dataType:'json',
            success: function (data) {
                //console.log(data);
                data.result.operate = '编辑讲师';
                var html = template('teacheraddTpl', data.result);
                $('#teacheraddInfo').html(html);
            }
        })
    }else {
        // id 不存在   添加教师
        console.log(1);
        var html = template('teacheraddTpl',{operate:'添加讲师'});
        console.log(html);
        $('#teacheraddInfo').html(html);
    }



})