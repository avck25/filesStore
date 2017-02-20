/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package findproducts;

import java.io.BufferedInputStream;
import java.io.DataInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.jsoup.Jsoup;
import org.jsoup.nodes.DataNode;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

/**
 *
 * @author N Kurtz
 */
public class scriptStuff {

    public static void getItems3(String url) {
        URL u;
      InputStream is = null;
      DataInputStream dis;
      String s;


        try {
     u = new URL("https://www.walmart.com/ip/51801875?findingMethod=wpa&tgtp=2&cmp=-1&relRank=2&pt=hp&adgrp=-1&plmt=1145x345_B-C-OG_TI_7-20_HL-MID-HP&wpa_qs=US4qt28mt8KKR1irqfWUBODEZFU03QqU6B9iOEd_ZsU&bkt=1776976730&pgid=0&itemId=51801875&relUUID=306c5edb-f942-4cd0-ba11-38751373f423&adUid=cc2fe8b5-a703-439d-a00a-f2c81958f366&adiuuid=bb0b4c8b-9cf0-44f3-8dc2-bf0cf68f39cf&adpgm=hl&pltfm=desktop");
      
            try {
                //Elements parentElements = doc.getElementsByTag("script");
                //System.out.println(body +"/n");
                //Elements price = doc.select(priceElem);
                is = u.openStream();
            } catch (IOException ex) {
                Logger.getLogger(scriptStuff.class.getName()).log(Level.SEVERE, null, ex);
            }
      
            dis = new DataInputStream(new BufferedInputStream(is));    
                
            try {
                while ((s = dis.readLine()) != null) {
                    System.out.println(s);
                }  } catch (IOException ex) {
                Logger.getLogger(scriptStuff.class.getName()).log(Level.SEVERE, null, ex);
            }
            try {
            is.close();
         } catch (IOException ioe) {
            // just going to ignore this one
         }

        }

    
    catch (MalformedURLException ex) {
                System.out.println("hello you have an error");;
    }

    
}

public static void main(String[] args) {
        getItems3("https://www.walmart.com/ip/51801875?findingMethod=wpa&tgtp=2&cmp=-1&relRank=2&pt=hp&adgrp=-1&plmt=1145x345_B-C-OG_TI_7-20_HL-MID-HP&wpa_qs=US4qt28mt8KKR1irqfWUBODEZFU03QqU6B9iOEd_ZsU&bkt=1776976730&pgid=0&itemId=51801875&relUUID=d73a7ae1-c762-4ecd-92de-d82a5d59e86c&adUid=abbbdb1d-dfb9-41ee-9448-64f6fa59c54a&adiuuid=a3c598c1-698b-475f-9757-0c9d50fbf65b&adpgm=hl&pltfm=desktop");
    }
    
}
