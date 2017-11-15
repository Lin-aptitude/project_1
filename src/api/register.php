<?php
    
    // if(in_array($username, $all_user)){
    //     echo "no";
    // }else{
    //     echo "yes";
    // }


    // 获取前端传递的参数
    $username = isset($_GET['username'])?$_GET['username']:'';

    // 文件路径
    $file_url="./data/register.json";

    // 打开文件
    $myfile=fopen($file_url,'r');

    //读取文件
    $content=fread($myfile,filesize($file_url));
    
    //关闭文件
    fclose($myfile);
    
    //把读取的内容转成数组
    $arr=json_decode($content);

    $res= array();

    foreach($arr as $key => $value){
        var_dump($key,$value);
    }

    var_dump($arr)
    //根据分页截取数据
    // var res=array('' => , );

    // 将数组转成字符串
    // echo json_encode($res,JSON_UNESCAPED_UNICODE);

?>