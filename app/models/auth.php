<?php

class User {
    const NAME_DB = 'users';
    public static function checkLogin($login, $password)
    {
        $login = md5($login);
        $password = md5($password);
        $db = Db::getConnection();
        $result = $db->query("SELECT id, role FROM `".self::NAME_DB."` 
                                        WHERE login = '" . $login . "' 
                                        AND password = '" . $password . "'",
                      PDO::FETCH_ASSOC);
        $user = $result->fetch();
        if ($user) return $user;
        return $user;
    }
}