(function () {
    'use strict';

    var itemIdArray = [],
        listBody = $('#listBody'),
        itemArray = [],
        myInterval,
        i = 0;

    function Item(name, upc, wmPrice, rank, amazonPrice) {
        this.name = name;
        this.upc = upc;
        this.wmPrice = wmPrice;
        this.rank = rank;
        this.amazonPrice = amazonPrice;
    }
    function clear(interval) {
        clearInterval(interval);
        itemArray.forEach(function (element, index) {

            $('<tr><td>' + (index + 1) + '</td><td>' + element.name + '</td><td>' + element.upc + '</td><td>' + element.wmPrice + '</td><td>' + element.rank + '</td><td>' + element.amazonPrice + '</td></tr>').appendTo('tbody');
        });
        localStorage.partyGames = JSON.stringify(itemArray);
    }

    function toDoInterval() {
        var url = 'http://api.walmartlabs.com/v1/items/' + itemIdArray[i++].id + '?apiKey=p2g5kwru3ty39kjkbj2d6ubk&format=json&callback=?';
        $.getJSON(url, function (itemInfo) {
            console.log(i);

            if (itemInfo.upc !== undefined) {

                $.getJSON('phpHandleXml.php', { upc: itemInfo.upc }, function (data) {
                    var tempArray = [];


                    if (data.Items.Item !== undefined) {
                        if (!Array.isArray(data.Items.Item)) {
                            tempArray.push(data.Items.Item);
                        } else if (Array.isArray(data.Items.Item)) {
                            tempArray = data.Items.Item;
                        }
                        if (tempArray.length > 0) {
                            tempArray.forEach(function (element) {

                                if (element.SalesRank && (element.SalesRank * 1) < 100000) {
                                    var number =
                                        Number(element.OfferSummary.LowestNewPrice.FormattedPrice.replace(/[^0-9\.]+/g, ""));
                                    var walmartPricePerce = itemInfo.salePrice + (itemInfo.salePrice * 0.40);
                                    if (walmartPricePerce < number) {
                                        itemArray.push(new Item(itemInfo.name, itemInfo.upc, itemInfo.salePrice, element.SalesRank, number));
                                        console.log('found', itemInfo.upc);

                                    }
                                }
                                console.log(itemInfo);
                                console.log(data);
                                console.log(element);
                                console.log("\n");

                            });
                        }
                    }

                });
            }
        });

        if (i === 100/*itemIdArray.length - 1*/) {
            clear(myInterval);
        }
    }

    $.getJSON('itemIds/healthCareIds.json', function (data) {

        itemIdArray = data;

        myInterval = setInterval(toDoInterval, 250);
    });


} ());