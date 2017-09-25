define(['jquery','template','util'],function ($, template, util) {
    //console.log(1);
    //设置导航菜单选中高亮显示
    util.setMenu('/course/course_list');
    $.ajax({
        type:'get',
        url : '/api/course',
        dataType: 'json',
        success: function (data) {
            //console.log(data);
            var html = template('courseTpl',{list:data.result});
            $('#courseInfo').html(html);
        }
    })
})