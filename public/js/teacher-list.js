/**
 * Created by hy on 2017/9/20.
 */
define(['jquery','template','bootstrap'],function ($, template) {
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success: function (data) {
            //console.log(data);
            var html = template('templateTpl',data);
            //console.log(html);
            $('#teacherInfo').html(html);

            //启用和注销功能
            $('.eod').click( function () {
                var that = this;
                var td = $(this).closest('td');     //closest 获取最近的父级元素
                var tcId = td.attr('data-tcId');
                var status = td.attr('data-status');
                //console.log(td,tcId,status);
                $.ajax({
                    type:'post',
                    url:'/api/teacher/handle',
                    data:{tc_id:tcId, tc_status:status},
                    datatype:'json',
                    success: function (data) {
                        //console.log(data);
                        if(data.code ==200) {
                            td.attr('data-status',data.result.tc_status);
                            if(data.result.tc_status == 0) {
                                $(that).text('注销');
                            }else{
                                $(that).text('启用');
                            }
                        }
                    }
                })
            })

            //讲师查看功能
            $('.preivew').click(function () {
                var td = $(this).closest('td');     //  closest 查找最近的父级元素
                var tcId = td.attr('data-tcId');
                //console.log(tcId);
                $.ajax({
                    type:'get',
                    url:'/api/teacher/view',
                    data:{tc_id:tcId},
                    dataType:'json',
                    success:function (data) {
                        //console.log(data);
                        var html = template('modulteacher',data);
                        $('#teachermodul').html(html);
                        $('#teacherModal').modal();     //此处要依赖bootstrap文件
                    }
                })
            })
        }
    })
})