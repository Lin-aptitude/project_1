<?php
    include 'connect.php';
    // 接受前端数据
    $phone = isset($_GET['phone']) ? $_GET['phone'] : '';
    $password = isset($_GET['pwd']) ? $_GET['pwd'] : '';

    //执行spl语句
    $sql = "select * from user where phone='$phone'and password='$password'";

    // 得到一个：查询结果集
    $result = $conn->query($sql);

    if($result->num_rows>0){
        echo "right";
    }else{
        echo "file";
    }

    $result->free();

    $conn->close();
?>