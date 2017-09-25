define(['jquery'],function ($) {
    return {
        qs: function (key) {
            var praem = location.search.substr(1);
            var result = null;
            if(praem){
                var pemp = praem.split('&');
                $.each(pemp,function (index, value) {   //这里要遍历数组才可以截取
                    var peaem = value.split('=');
                    if(peaem[0] == key){
                        result = peaem[1];
                        return false;
                    }
                })
            }
            return result;
        },
        //设置导航栏被选中高亮显示
        setMenu:function (url) {
            $('.aside .navs a[href="'+url+'"]').addClass('active').closest('ul').show();//切换到相应的页面的时候点亮显示
        }
    }
})