// ��ʱ����ļ�
define(['jquery','template','util','from'],function ($, template,util) {
    //console.log(1);
    // ���õ�������ѡ�и�����ʾ
    util.setMenu('/course/course_add');
    //�󶨱������ύ�¼�
    $('#courseBtn').click(function () {
        $('#courseFrom').ajaxSubmit({   //�˲�����Զ������е������ύ����̨�����Բ���Ҫ�ֶ�������
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