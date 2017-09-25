require.config({
    baseUrl:'/public/assets',
    paths:{
        jquery:'jquery/jquery',                     //jquery
        cookie:'jquery-cookie/jquery.cookie',       // cookie文件
        template: 'artTemplate/template-web',           //模板文件
        bootstrap:'bootstrap/js/bootstrap.min',         // bootstrap
        datepicker:'bootstrap-datepicker/js/bootstrap-datepicker.min',      //日期文件
        language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',     // 日期语言
        validate:'validate/jquery-validate',                // 表单验证文件
        from:'jquery-form/jquery.form',                        // 表单提交
        uploadify:'uploadify/jquery.uploadify.min',             // 上传文件
        region:'jquery-region/jquery.region',                   //省市级三级联动
        ckeditor:'ckeditor/ckeditor',                           // 处理富文本
        util : '../js/util',                 //工具包
        common: '../js/common',             //公用
        login:'../js/login',                 //登录
        teacherlist:'../js/teacher-list',     //讲师管理
        teacheradd:'../js/teacher-add',     // 讲师添加
        settings:'../js/settings',          //个人中心
    },
    shim : {
        bootstrap : {
            deps : ['jquery']               //依赖 jquery
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
            exports : 'CKEDITOR'        // 暴露 变量
        }
    }
});