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
        }
    }
})