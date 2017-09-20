define(['jquery','cookie'],function ($) {
    //  ��¼����
    $('#loginBtn').click(function () {
        $.ajax({
            type:'post',
            url:'/api/login',
            data:$('#loginForm').serialize(),   //��ȡ���еı�����
            datatype:'json',
            success: function (data) {
                if(data.code==200){
                    //���û��ĵ�¼��Ϣ�洢��cookie�� �����ҳ�⹲������
                    $.cookie('loginInfo',JSON.stringify(data.result))
                    //��¼�ɹ�����ת����ҳ��
                    location.href='/main/index';
                }

            }
        })
        return false    //��ֹ��ť��Ĭ����Ϊ
    })

});