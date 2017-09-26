define(['jquery','template','util'],function ($, template,util) {
    //console.log(1);
    //导航栏被选中高亮显示
    util.setMenu('/course/course_add');
    // 获取课程ID
    var csId = util.qs('cs_id');
    //获取操作标志位
    var flag = util.qs('flag');
    //console.log(csId,flag);
    //根据课程ID查询课程相关信息
    $.ajax({
        type : 'get',
        url : '/api/course/basic',
        data : {cs_id : csId},
        dataType : 'json',
        success : function (data) {
            //console.log(data);
            if(flag) {
                data.result.operate = '课程编辑';
            }else {
                data.result.operate = '课程添加';
            }
            var html  = template('basicTpl',data.result)
            $('#basicInfo').html(html);
        }
    })

})