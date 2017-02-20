<?php 
        // create curl resource 
        $ch = curl_init(); 

        // set url 
        curl_setopt($ch, CURLOPT_URL, "https://www.walmart.com/browse/action-figures/all-action-figures/4171_4172_133130"); 

        //return the transfer as a string 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
        curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);

        // $output contains the output string 
        $output = curl_exec($ch); 

        print_r($output);

        // close curl resource to free up system resources 
        curl_close($ch);      
?>