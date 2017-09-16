<?php

//后端路由（根据URL的不同响应不同的页面）

//header('content-type:text/html; charset=utf8');

//echo "<div>主页面</div>";
// include('') 在当前php页面内部嵌入一个子页面

// include('./views/main/index.html');


// 通过URL区分用户想访问那个页面
// $_SERVER是一个数组
//var_dump($_SERVER);



// 获取地址栏中的URL
// $path = $_SERVER['PATH_INFO'];
//echo $path;
//include('./views/'.$path.'.html')


//array_key_exists('PATH_INFO',$_SERVER);   如果PATH_INFO在$_SERVER中存在 就是true
//默认目录名称 
$dir = 'main';
//默认文件名称
$filename = 'index';
//处理URL路径
if(array_key_exists('PATH_INFO', $_SERVER)){
    // PATH_INFO属性存在
    $path = $_SERVER['PATH_INFO'];  //  可能是 /main/index
    //去掉第一个斜杠
    $str = substr($path,1); // 截完之后就是  main/index
    // 字符串分割  和js中的split方法很像
    $ret = explode('/',$str); // 按斜杠分为几部分
    // var_dump($ret);
    
    if(count($ret) ==2) {   // count计数
        //路由有两层
        $dir = $ret[0]; //覆盖目录
        $filename = $ret[1];    // 覆盖文件名称
    }else{
        // 其它情况全部跳转到登录页面
        $filename = 'login';
    }

}
// 嵌入子页面
include('./views/'.$dir.'/'.$filename.'.html');









?>