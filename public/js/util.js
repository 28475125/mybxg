define(['jquery'],function ($) {
    return {
        qs: function (key) {
            var praem = location.search.substr(1);
            var result = null;
            if(praem){
                var pemp = praem.split('&');
                $.each(pemp,function (index, value) {   //����Ҫ��������ſ��Խ�ȡ
                    var peaem = value.split('=');
                    if(peaem[0] == key){
                        result = peaem[1];
                        return false;
                    }
                })
            }
            return result;
        },
        //���õ�������ѡ�и�����ʾ
        setMenu:function (url) {
            $('.aside .navs a[href="'+url+'"]').addClass('active').closest('ul').show();//�л�����Ӧ��ҳ���ʱ�������ʾ
        }
    }
})