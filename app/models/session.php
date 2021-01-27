<?php
class Session {
    const NAME_DB = 'session';
    public static function sessionExist($user_id) {
        $db = Db::getConnection();
        $result = $db->query("SELECT * FROM `".self::NAME_DB."` 
                                        WHERE user_id = '" . $user_id . "'",
            PDO::FETCH_ASSOC);
        $result = $result->fetch();
        if ($result) return true;
        return false;
    }
    public static function addSession($user_id, $session) {
        $candidate = SELF::sessionExist($user_id);
        if($candidate) {
            SELF::updateSession($user_id, $session);
            return true;
        }
        else {
            $db = Db::getConnection();
            $stmt = $db->prepare("INSERT INTO ".self::NAME_DB." (user_id, session) VALUES (:user_id, :session)");
            $stmt->bindParam(':user_id', $user_id);
            $stmt->bindParam(':session', $session);
            $stmt->execute();
            return true;
        }
    }
    public static function updateSession($user_id, $session) {
        $db = Db::getConnection();
        $stmt = $db->prepare("UPDATE ".self::NAME_DB." SET session=?, date=? WHERE user_id=?");
        $time = date('Y-m-d H:i:s');
        $stmt->execute([$session, $time, $user_id]);
    }
    public static function deleteSession($session) {
        $db = Db::getConnection();
        $stmt = $db->prepare("DELETE FROM ".self::NAME_DB." WHERE session=?");
        $stmt->execute([$session]);
        return true;
    }
    public static function tokenExist($token) {
        $db = Db::getConnection();
        $result = $db->query("SELECT * FROM `".self::NAME_DB."` 
                                        WHERE session = '" . $token . "'",
            PDO::FETCH_ASSOC);
        $result = $result->fetch();
        if ($result) return true;
        return false;
    }
}