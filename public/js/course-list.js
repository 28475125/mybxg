define(['jquery','template','util'],function ($, template, util) {
    //console.log(1);
    //���õ����˵�ѡ�и�����ʾ
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