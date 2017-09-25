require.config({
    baseUrl:'/public/assets',
    paths:{
        jquery:'jquery/jquery',                     //jquery
        cookie:'jquery-cookie/jquery.cookie',       // cookie�ļ�
        template: 'artTemplate/template-web',           //ģ���ļ�
        bootstrap:'bootstrap/js/bootstrap.min',         // bootstrap
        datepicker:'bootstrap-datepicker/js/bootstrap-datepicker.min',      //�����ļ�
        language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',     // ��������
        validate:'validate/jquery-validate',                // ����֤�ļ�
        from:'jquery-form/jquery.form',                        // ���ύ
        uploadify:'uploadify/jquery.uploadify.min',             // �ϴ��ļ�
        region:'jquery-region/jquery.region',                   //ʡ�м���������
        ckeditor:'ckeditor/ckeditor',                           // �����ı�
        util : '../js/util',                 //���߰�
        common: '../js/common',             //����
        login:'../js/login',                 //��¼
        teacherlist:'../js/teacher-list',     //��ʦ����
        teacheradd:'../js/teacher-add',     // ��ʦ���
        settings:'../js/settings',          //��������
        index : '../js/index',              //��ҳ
        courselist : '../js/course-list',   //�γ��б�
    },
    shim : {
        bootstrap : {
            deps : ['jquery']               //���� jquery
        },
        language : {
            deps : ['jquery','datepicker']
        },
        validate : {
            deps : ['jquery']
        },
        uploadify:{
            deps : ['jquery']
        },
        ckeditor : {
            exports : 'CKEDITOR'        // ��¶ ����
        }
    }
});