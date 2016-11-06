<?php

/**
* author: Beatrice Migaliza Lung'ahu
* date: 9th February,2016
* description: class containing database queries on the administrator tableau
*/

include("adb.php");

class commands extends adb {
    
    /**
     * function to sign up an individual
     */    
    function signup($name,$username,$email,$phone,$password){
        
        $str_query="INSERT INTO user (fullnane,username,email,phonenumber,password) VALUES($name,$username,$email,$phone,$password)";
        if($this->query($str_query)){
            //echo mysqli_error();
            return true;
        }
        else{

            trigger_error("Query Failed! SQL: $str_query - Error: ".mysqli_error(), E_USER_ERROR);
          //  echo mysqli_error(mysqli $str_query);

            return false;
        }

    }
    
    /* carpool user login */
    function user_login($token,$password){
        //SELECT AgencyName, location FROM administartor WHERE email='easy.coach@gmail.com' AND Assigned_pass='dckMS7aebjD'
        $str_query="SELECT AgencyName, location FROM administartor WHERE email='$email' AND Assigned_pass='$password'";
        if($this->query($str_query)){
            return true;
        }
        else{
            return false;
        }
    }
    
    
}

?>
