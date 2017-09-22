define(['jquery','template','util','datepicker','language','validate','from'],function ($, template,util) {


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
                submitForm('/api/teacher/update');
            }
        })
    }else {
        // id 不存在   添加教师
        var html = template('teacheraddTpl',{operate:'添加讲师'});
        //console.log(html);
        $('#teacheraddInfo').html(html);
        submitForm('/api/teacher/add');

    }

    //采用插件完成表单验证和提交功能
    function submitForm(url) {
            $('#teacherForm').validate({
            sendForm: false,    //阻止按钮跳转
            valid:function () {        // 所有验证成功
                $(this).ajaxSubmit({
                    type:'post',
                    url:url,
                    dataType:'json',
                    success: function (data) {
                        if(data.code == 200) {
                            location.href = '/teacher/teacher_list';
                        }
                    }
                })
            },
            description: {      // 提示信息
                tcName:{
                    required:'用户名不能为空',     // 空值的情况下
                },
                tcPass:{
                    required:'密码不能为空',
                    pattern:'密码必须为六位',      //  格式不对
                },
                tcJoinData: {
                    required:'日期不能为空',
                },
            }
        })
    }


    // 实现表单提交功能
    //function submitForm(url) {
    //    $("#teacherBtn").click(function () {
    //        $.ajax({
    //            type:'post',
    //            url: url,
    //            data: $("#teacherForm").serialize(),
    //            dataType: 'json',
    //            success: function (data) {
    //                console.log(data);
    //                if(data.code == 200) {
    //                    location.href = '/teacher/teacher_list';
    //                }
    //            }
    //        })
    //    })
    //
    //}

})