<?php
/**
 * Created by PhpStorm.
 * User: sarah.amairi@epitech.eu
 * Date: 10/05/2017
 * Time: 15:53
 */

function isPrime($nbr = NULL) {
    if(is_int($nbr)){
        if ($nbr = 0 || $nbr = 1){
            return false;
        } else {
            $i = 2;
            while ($i < $nbr) {
                if ($nbr % $i == 0) {
                    echo 'premier';
                    return true;
                } else {
                    echo 'pas premier';
                    return false;
                }
                $i++;
            }
        }
    }
}