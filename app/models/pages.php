<?php

class Category {
    const NAME_DB = 'category';
    public static function getData() {
        $data = [];
        $db = Db::getConnection();
        $result = $db->query("SELECT * FROM `".self::NAME_DB."`", PDO::FETCH_ASSOC);
        while ($row = $result->fetch()) $data[] = $row;
        return $data;
    }
    public static function updateById($id, $category_name) {
        $db = Db::getConnection();
        $stmt = $db->prepare("UPDATE ".self::NAME_DB." SET category_name=? WHERE id=?");
        $stmt->execute([$category_name, $id]);
    }
    public static function add($data) {
        $db = Db::getConnection();
        $stmt = $db->prepare("INSERT INTO ".self::NAME_DB." (category_name, lang, post_type) VALUES (:category_name, :lang, :post_type)");
        $stmt->bindParam(':category_name', $data['category_name']);
        $stmt->bindParam(':lang', $data['lang']);
        $stmt->bindParam(':post_type', $data['post_type']);
        $stmt->execute();
        $result = $db->lastInsertId();
        return $result;
    }
    public static function deleteById($id){
        $db = Db::getConnection();
        $sql = "DELETE FROM ".self::NAME_DB." WHERE id = :id";
        $stmt = $db->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->execute();
    }
}