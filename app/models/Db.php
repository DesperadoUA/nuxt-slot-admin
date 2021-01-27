<?php

class Db
{
    public static function getConnection()
    {
        $params = include('config.php');
        $dsn="mysql:host={$params['host']};dbname={$params['db_name']}";
        $db= new PDO($dsn, $params['user'], $params['password']);
        $db->exec("SET NAMES 'utf8' COLLATE 'utf8_general_ci'");
        $db->exec("SET CHARACTER SET 'utf8'");
        return $db;
    }
}