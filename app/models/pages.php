<?php

class Pages {
    const NAME_DB = 'pages';
    public static function getData() {
        $data = [];
        $db = Db::getConnection();
        $result = $db->query("SELECT * FROM `".self::NAME_DB."`", PDO::FETCH_ASSOC);
        while ($row = $result->fetch()) $data[] = $row;
        return $data;
    }
    public static function _updateById($id, $category_name) {
        $db = Db::getConnection();
        $stmt = $db->prepare("UPDATE ".self::NAME_DB." SET category_name=? WHERE id=?");
        $stmt->execute([$category_name, $id]);
    }
}