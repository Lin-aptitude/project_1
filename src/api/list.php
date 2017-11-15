<?php
    // 获取数据
    // 获取前端传递的参数
    $pageNo=isset($_GET['pageNo'])?$_GET['pageNo']:1;

    $qty=isset($_GET['qty'])?$_GET['qty']:10;

    // 文件路径
    $file_url="./data/list.json";

    // 打开文件
    $myfile=fopen($file_url,'r');

    //读取文件
    $content=fread($myfile,filesize($file_url));
    
    //关闭文件
    fclose($myfile);

    //把读取的内容转成数组
    $arr=json_decode($content);

    //根据分页截取数据
    $res=array(
        'date'=>array_slice($arr,($pageNo-1)*$qty,$qty),
        'total'=>count($arr)//得到数组长度
        );

    // 将数组转成字符串
    echo json_encode($res,JSON_UNESCAPED_UNICODE);

?>