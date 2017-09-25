define(['jquery','template','ckeditor','uploadify','region','datepicker','language','validate','from'],function ($,template,CKEDITOR) {
    // 发送 个人中心  表单数据
    $.ajax({
        type:'get',
        url:'/api/teacher/profile',
        dataType:'json',
        success: function (data) {
            //console.log(data);
            var html = template('teacherSettingsTpl', data.result);
            //console.log(html);
            $('#teacherSettings').html(html);

            // 上传头像部分
            $('#upfile').uploadify({    // 获取元素才可以添加事件
                width: 120,             // 设置宽高
                height: 120,
                buttonText:'',          //置空文字
                itemTemplate:'<span></span>',   //置空进度条
                swf:'/public/assets/uploadify/uploadify.swf',     //上传文件  必需的
                uploader:'/api/uploader/avatar',                  //等于ajax中的url
                fileObjName:'tc_avatar',                          //等于 ajax 中的传参data
                onUploadSuccess: function (a,b) {                 //成功时的回调函数
                    //console.log(b);
                    var obj = JSON.parse(b);
                    //console.log(obj);
                    $(".preview img").attr('src',obj.result.path);
                }
            })

            //处理省市级三级联动
            $('#pcd').region({
                url : '/public/assets/jquery-region/region.json'
            });

            //处理富文本
            CKEDITOR.replace('IntroDuce',{      //第一个参数为 ID    第二个参数是对象内容是定制样式，可修改
                toolbarGroups : [
                    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] }
                ]
            });

            //处理表单提交
            $('#settingsForm').validate({
                sendForm: false,            //禁掉按钮提交
                valid : function () {           //所有的表单控件通过后  调用函数
                    //获取家乡
                    var p = $("#p").find('option:selected').text();     //得到了选项被选中的内容
                    var c = $("#c").find('option:selected').text();     //得到了选项被选中的内容
                    var d = $("#d").find('option:selected').text();     //得到了选项被选中的内容
                    var hometown = p + "|" + c + "|" + d;
                    // t同步富文本内容
                    for( var instance in CKEDITOR.instances){       // 插件中的引用
                        CKEDITOR.instances[instance].updateElement();
                    };
                    //提交表单
                    $(this).ajaxSubmit({
                        type : 'post',
                        url : '/api/teacher/modify',
                        dateType: 'json',
                        data : {tc_hometown : hometown},
                        success : function (data) {
                            if(data.code == 200) {
                                //修改成功之后重新刷新本页面
                                location.reload();
                            }
                        }
                    })
                }
            });
        }
    })
})