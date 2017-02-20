/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package findproducts;

import static java.awt.SystemColor.text;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import static sun.management.snmp.jvminstr.JvmThreadInstanceEntryImpl.ThreadStateMap.Byte0.runnable;

/**
 *
 * @author N Kurtz
 */
public class FindProducts {

    public static File writeFile(String siteName) {
        File file = null;
        try {
            String property = "user.home";
            String userPath = System.getProperty(property);
            System.out.println(userPath);
            file = new File(userPath + File.separatorChar + "Documents/amazonItems/" + siteName + ".txt");

            if (!file.exists()) {
                File folder = new File("c:" + File.separatorChar + "Users/N Kurtz/Documents/amazonItems");
                folder.mkdir();
                file.createNewFile();
            }
        } catch (IOException e) {

        }
        return file;
    }
    
    public static File writeJson(String category) {
        File file = null;
        try {
            String property = "user.home";
            String userPath = System.getProperty(property);
            System.out.println(userPath);
            file = new File("c:" + File.separatorChar + "xampp/htdocs/walmartApi/" +  category + "Ids.json");

            if (!file.exists()) {
                File folder = new File("c:" + File.separatorChar + "xampp/htdocs/walmartApi");
                folder.mkdir();
                file.createNewFile();
            }
        } catch (IOException e) {

        }
        return file;
    }

    public static void writeFileWriter(File file, String content) {
        FileWriter fw = null;
        BufferedWriter bw = null;
        try {

            fw = new FileWriter(file, true);
            bw = new BufferedWriter(fw);
            bw.write(content);
            bw.newLine();
            bw.flush();

            System.out.println("File Written Successfully");
        } catch (FileNotFoundException ex) {
            System.out.println("error");
        } catch (IOException ex) {
            System.out.println("error");
        } finally {
            try {
                fw.close();
                bw.close();
            } catch (IOException ex) {
                System.out.println("error");
            }
        }
    }

    public static HashMap<String, Float> getItems(String url, String parentElem, String nameElem, String priceElem, float percentOff,int pages) {
        ArrayList<Item> items = new ArrayList<>();
        HashMap<String, Float> hmItems = new HashMap<>();

        for (int i = 1; i <= pages; i++) {

            try {
                Document doc = Jsoup.connect(url).get();
                Elements parentElements = doc.select(parentElem);
                //Elements price = doc.select(priceElem);

                for (Element parentElement : parentElements) {
                   
                    if(!parentElement.select(nameElem).hasText() || !parentElement.select(priceElem).hasText() ) {
                        continue;
                    }
                    
                    float thePrice = 0;
                        try {
                            thePrice = Float.parseFloat(parentElement.select(priceElem).text().substring(1,5));
                            if (percentOff > 0) {
                                thePrice -= (thePrice * percentOff);
                            }
                            hmItems.put(parentElement.select(nameElem).text(), thePrice);
                             System.out.println(parentElement.select(nameElem).text() + " : " + thePrice );
                        } catch (NumberFormatException e) {
                            //System.out.println(name.get(i));
                        }
                }

                

            } catch (IOException ex) {
                Logger.getLogger(FindProducts.class.getName()).log(Level.SEVERE, null, ex);
            }

        }
        
        return hmItems;
    }
    
    
     public static String getJSON(String url,String element, int pages){
         String theString="[";
         
         for (int i = 1; i <= pages; i++) {

            try {
                Document doc = Jsoup.connect(url+i).get();
                Elements ids = doc.select(element+"[href]");
                //Elements price = doc.select(priceElem);

                for (Element id : ids) {
                    System.out.println(id.attr("href"));
                    String productId = id.attr("href").substring(id.attr("href").length() -8,id.attr("href").length()); 
                   theString += "{id: " + productId + "},";
                }
            } catch (IOException ex) {
                Logger.getLogger(FindProducts.class.getName()).log(Level.SEVERE, null, ex);
            }

        }
         theString += "]";
         
         return theString;
     }

    

    public static HashMap<String, Float> getFromAmazon(HashMap<String, Float> hm, String siteName) {

        String baseUrl = "https://www.amazon.com/s/field-keywords=";
        HashMap<String, Float> amazonList = new HashMap<>();
        new Thread(new Runnable() {

            @Override
            public void run() {
                for (Map.Entry<String, Float> entry : hm.entrySet()) {
                    float percentMore;
                    if (entry.getValue() <= 6) {
                        percentMore = 1.5f;
                    } else if (entry.getValue() <= 10) {
                        percentMore = 1.0f;
                    } else if (entry.getValue() <= 20) {
                        percentMore = .75f;
                    } else if(entry.getValue() <= 100) {
                        percentMore = .50f;
                    } else if(entry.getValue() <= 200) {
                        percentMore = .40f;
                    } else if(entry.getValue() <= 400) {
                        percentMore = .25f;
                    } else {
                        percentMore = .2f;
                    }
                    String url = baseUrl + entry.getKey();
                    try {
                        Document doc = Jsoup.connect(url)
                                .userAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.21 (KHTML, like Gecko) Chrome/19.0.1042.0 Safari/535.21")
                                .timeout(0)
                                .get();

                        float amazonPrice = 0;
                        try {
                            amazonPrice = Float.parseFloat(doc.select("#result_0 .sx-price-whole").text().toString());
                            if ((entry.getValue() + (entry.getValue() * percentMore)) < amazonPrice) {
                                String myContent = entry.getKey() + ";  " + entry.getValue() + "; " + amazonPrice;

                                File file = writeFile(siteName);
                                writeFileWriter(file, myContent);

                            }
                        } catch (NumberFormatException e) {
                            //System.out.println(entry.getKey());
                        }
                    } catch (IOException ex) {
                        Logger.getLogger(FindProducts.class
                                .getName()).log(Level.SEVERE, null, ex);
                    }
                    try {
                        Thread.sleep(5000);
                    } catch (InterruptedException ex) {

                    }
                }
            }
        }).start();

        return amazonList;
    }

    public static void main(String[] args) {
//        HashMap<String, Float> items = new HashMap<>();
//        String url = "http://www.thinkgeek.com";
//        String parentName = ".product";
//        String name = ".product-name";
//        String price = "p";
//        items = getItems(url,parentName, name, price, .2f ,1);
//        //getItems2(url, name, price, 0);
//        getFromAmazon(items, "thinkGeek");

//        new Thread(new Runnable() {
//
//            @Override
//            public void run() {
//                for (int i = 0; i < 50; i++) {
//                    System.out.println(i);
//                    try {
//                        Thread.sleep(2000);
//                    } catch (InterruptedException ex) {
//
//                    }
//                }
//            }
//        }).start();

    String url = "https://www.walmart.com/browse/baby/learning-toys/5427_491351_465041?cat_id=5427_491351_465041&page=";

    String json =  getJSON(url, ".js-product-image", 25);
       File file =  writeJson("babyLearningToys");
       
        writeFileWriter(file, json);
    }

}
