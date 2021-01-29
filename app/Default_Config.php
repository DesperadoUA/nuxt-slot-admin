<?php
class Default_Config {
   const POST_TYPES = [
       'static_page' => [
           'post_type' => 'static_page',
           'status' => 1,
           'thumbnail' => '{"src":"http://nuxt-slot-admin/admin/img/default.jpg","mobile_src":"http://nuxt-slot-admin/admin/img/default.jpg", "title":"","alt":""}',
           'short_desc' => '',
           'h1' => '',
           'description' => '',
           'meta_title' => '',
           'keywords' => '',
           'content' => '',
           'data_public' => '',
           'data_change' => '',
           'slug' => '',
           'lang' => 'ru'
       ]
   ];
   const DATA_FIELDS = ['data_public', 'data_change'];
   public static function checkFields($data, $post_type) {
       $time = new DateTime('now', new DateTimeZone('Europe/Kiev'));
       $time_stamp = $time->format('Y-m-d H:i:s');
       $arr_keys = array_keys(self::POST_TYPES[$post_type]);
       $default_state = self::POST_TYPES[$post_type];
       foreach (self::DATA_FIELDS as $field) $default_state[$field] = $time_stamp;
       $new_state = [];
       foreach ($arr_keys as $key) {
           if(!isset($data[$key]) or empty($data[$key])) {
               $new_state[$key] = $default_state[$key];
           }
       }
       return $new_state;
   }
   public static function test(){
      $arr = [];
      $new = self::checkFields($arr, 'static_page');
      echo "<pre>";
      var_dump($new);
      echo "</pre>";
   }
}