// 课时添加文件
define(['jquery','template','util','from'],function ($, template,util) {
    //console.log(1);
    // 设置导航栏被选中高亮显示
    util.setMenu('/course/course_add');
    //绑定表单单击提交事件
    $('#courseBtn').click(function () {
        $('#courseFrom').ajaxSubmit({   //此插件会自动将所有的数据提交至后台，所以不需要手动传参数
            type : 'post',
            url : '/api/course/create',
            dataType : 'json',
            success : function (data) {
                console.log(data);
                if(data.code == 200) {
                    location.href = '/course/basic?cs_id='+ data.result.cs_id;
                }
            }
        })
    })
})