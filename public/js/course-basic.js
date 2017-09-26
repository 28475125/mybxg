define(['jquery','template','util','ckeditor'],function ($, template,util,CKEDITOR) {
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

            //处理二级风类下拉联动
            $("#firstType").change(function () {
                var pid = $(this).val();
                //根据一级分类的id查询二分类的id
                $.ajax({
                    type:'get',
                    url:'/api/category/child',
                    data:{cg_id:pid},
                    dataType: 'json',
                    success : function (data) {
                        //拼接二级分类的下拉选项
                        var tpl = '<option>请选择二级分类...</option>{{each list}}<option value ="{{$value.cg_id}}">{{$value.cg_name}}</option>{{/each}}';
                        var html = template.render(tpl,{list:data.result});
                        $("#secondType").html(html);

                    }
                })

            })
            //处理富文本
            CKEDITOR.replace('editor',{
                toolbarGroups : [
                    {name:'clipboard', groups : ['clipboard','undo']},
                    {name:'editing', groups :['find', 'selection', 'spellchecker','editing']}
                ]
            });
        }
    })

})