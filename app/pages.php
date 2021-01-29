<?php
include 'models/Db.php';
include 'models/auth.php';
include 'models/session.php';
include 'models/category.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,HEAD,OPTIONS");
header("Access-Control-Allow-Headers: Origin,Content-Type,Accept,Authorization");
header("Access-Control-Allow-Headers: *");
$_POST = !empty($_POST) ? $_POST : json_decode(file_get_contents('php://input'), true);
$data = [
    'confirm' => 'error',
];
if($_POST['action'] === 'get_data') {
    if(Session::tokenExist($_POST['session'])) {
        $data['list'] = Category::getData();
        $data['confirm'] = 'ok';
    }
}
elseif ($_POST['action'] === 'delete') {
    if(Session::tokenExist($_POST['session'])) {
        Category::deleteById($_POST['id']);
        $data['confirm'] = 'ok';
    }
}
elseif ($_POST['action'] === 'add') {
    if(Session::tokenExist($_POST['session'])) {
        $arr_data = [
            'category_name' => isset($_POST['categoryName']) ? $_POST['categoryName'] : '',
            'lang' => isset($_POST['lang']) ? $_POST['lang'] : '',
            'post_type' => isset($_POST['post_type']) ? $_POST['post_type'] : ''
        ];
        $data['insertId'] = Category::add($arr_data);
        $data['confirm'] = 'ok';
    }
}
elseif ($_POST['action'] === 'update') {
    if(Session::tokenExist($_POST['session'])) {
        Category::updateById($_POST['id'], $_POST['category_name']);
        $data['confirm'] = 'ok';
    }
}
echo json_encode($data);