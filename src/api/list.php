<?php
    include 'connect.php';

    $pageNo=isset($_GET['pageNo'])?$_GET['pageNo']:1;

    $qty=isset($_GET['qty'])?$_GET['qty']:10;

    $id=isset($_GET['id'])?$_GET['id']:'';


    //执行spl语句
    $sql = "select * from goods";

    if($id){
        $sql .= " where id='$id'";
        $str = $conn->query($sql);
    }
    
    // 执行sql语句
    // query()
    // 得到一个：查询结果集
    $result = $conn->query($sql);


    // 使用查询结果集
    // 返回数组
    $arr = $result->fetch_all(MYSQLI_ASSOC);

    //释放查询结果集，避免资源浪费
    $result->close();

    //根据分页截取数据
    $row=array(
        'date'=>array_slice($arr,($pageNo-1)*$qty,$qty),
        'total'=>count($arr)//得到数组长度
        );
    // 把数组转换成json字符串
    $res = json_encode($row,JSON_UNESCAPED_UNICODE);

    echo "$res";

    // 关闭数据库，避免资源浪费
    $conn->close();
?>