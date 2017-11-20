<?php
    include 'connect.php';
    //执行spl语句
    $sql = "select * from goods";

    $id=isset($_GET['id'])?$_GET['id']:'';
    $hot=isset($_GET['hot'])?$_GET['hot']:'';
    
    if($id){
        $sql .= " where id='$id'";
        $str = $conn->query($sql);
    }

    if($hot){
        $sql .= " where hot='$hot'";
        $str = $conn->query($sql);
    }
    // 执行sql语句
    // query()
    // 得到一个：查询结果集
    $result = $conn->query($sql);


    // 使用查询结果集
    // 返回数组
    $arr = $result->fetch_all(MYSQLI_ASSOC);

   

    // 把数组转换成json字符串
    $res = json_encode($arr,JSON_UNESCAPED_UNICODE);

    //释放查询结果集，避免资源浪费
    $result->close();

    echo "$res";

    // 关闭数据库，避免资源浪费
    $conn->close();
?>