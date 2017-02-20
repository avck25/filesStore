<?php 
class Item{
    private $id;
    private $name;
    private $price;
    private $categories;
    private $picture;
    private $site_name;

    public function __construct($values)
    {
        $this->id=$this->getValue('id',$values);
        $this->name=$this->getValue('name',$values);
        $this->price=$this->getValue('price',$values);
        $this->categories=$this->getValue('categories',$values);
        $this->picture=$this->getValue('picture',$values);
        $this->site_name=$this->getValue('site_name',$values);
    }



     private function getValue($key, $array)
    {
        if(!empty($array[$key]))
        {
            return $array[$key];
        }
        return null;
    }

    public function getId()
    {
        return $this->id;
    }
     public function getName()
    {
        return $this->name;
    }
     public function getPrice()
    {
        return $this->price;
    }  
     public function getCategories()
    {
        return $this->categories;
    }
     public function getPicture()
    {
        return $this->picture;
    }
     public function getSite_name()
    {
        return $this->site_name;
    }
}

?>