    // ==UserScript==
    // @name         Item market experiment
    // @namespace    http://tampermonkey.net/
    // @version      0.1
    // @description  Makes buying items in torn easier
    // @author       Alex Skorulis
    // @match        https://www.torn.com/imarket.php
    // @match        https://www.torn.com/bazaar.php
    // @match        https://www.torn.com/*
    // @grant        none
    // ==/UserScript==

    //Map item names to prices
    let priceMapping = {
        "Empty Blood Bag":{buy:17500,sell:18500},
        "Morphine":{buy:48500,sell:51500},
        "Small First Aid Kit":{buy:19000,sell:21000},
        "First Aid Kit":{buy:30000,sell:32000},
        "Blood Bag : O+":27500,
        "Blood Bag : A+":{buy:27500,sell:34000},
        "Blood Bag : B+":28000,
        "Blood Bag : A-":{buy:40000,sell:45000},
        "Blood Bag : AB+":30000,
        "Blood Bag : O-":{buy:42000,sell:48000},
        "Blood Bag : B-":42000,
        "Blood Bag : AB-":63000,
        "Neumune Tablet":{buy:5000000,sell:6500000},

        "Bunch of Flowers":300,
        "Bunch of Black Roses":400,
        "Dozen Roses":400,
        "Single Red Rose":400,
        "Dahlia":{buy:2900,sell:3250},
        "Crocus":8600,
        "Banana Orchid":9100,
        "Ceibo Flower":45500,
        "Edelweiss":44000,
        "Orchid":25000,
        "Heather":48000,
        "Cherry Blossom":67000,
        "African Violet":64000,
        "Peony":73000,
        "Tribulus Omanense":79000,

        "Camel Plushie":{buy:96000,sell:100000},
        "Chamois Plushie":{buy:50000,sell:55000},
        "Jaguar Plushie":{buy:16000,sell:17500},
        "Kitten Plushie":{buy:500,sell:700},
        "Lion Plushie":{buy:70000,sell:77300},
        "Monkey Plushie":50000,
        "Nessie Plushie":46500,
        "Panda Plushie":{buy:75000,sell:79000},
        "Red Fox Plushie":46000,
        "Sheep Plushie":500,
        "Stingray Plushie":{buy:9200,sell:10500},
        "Teddy Bear Plushie":500,
        "Wolverine Plushie":{buy:8500,sell:9800},



        "Box of Chocolate Bars":500,
        "Box of Extra Strong Mints":500,
        "Box of Sweet Hearts":500,
        "Bag of Chocolate Kisses":500,
        "Bag of Bon Bons":500,
        "Lollipop":500,
        "Big Box of Chocolate Bars":{buy:3000,sell:3300},
        "Box of Bon Bons":{buy:5000,sell:6500},
        "Bag of Candy Kisses":{buy:25000,sell:32000},
        "Bag of Tootsie Rolls":{buy:45000,sell:50000},
        "Bag of Chocolate Truffles":{buy:98000,sell:102000},
        "Bag of Reindeer Droppings":{buy:98000,sell:102000},
        "Bag of Bloody Eyeballs":90000,
        "Jawbreaker":240000,
        "Pixie Sticks":240000,
        "Bag of Sherbet":240000,
        "Red Easter Egg":150000,
        "Blue Easter Egg":150000,
        "Orange Easter Egg":150000,
        "Yellow Easter Egg":150000,
        "Pink Easter Egg":150000,
        "Green Easter Egg":150000,
        "Black Easter Egg":150000,
        "Brown Easter Egg":150000,
        "Gold Easter Egg":1500000,
        "White Easter Egg":{buy:3500000,sell:4000000},

        "Bottle of Beer":810,
        "Bottle of Tequila":1400,
        "Bottle of Champagne":2000,
        "Bottle of Saké":6000,
        "Bottle of Kandy Kane":{buy:80000,sell:95000},
        "Bottle of Pumpkin Brew":{buy:80000,sell:95000},
        "Bottle of Minty Mayhem":{buy:160000,sell:190000},
        "Bottle of Wicked Witch":{buy:160000,sell:190000},
        "Bottle of Christmas Cocktail":{buy:160000,sell:190000},
        "Bottle of Mistletoe Madness":{buy:370000,sell:400000},
        "Bottle of Stinky Swamp Punch":{buy:370000,sell:400000},
        "Bottle of Green Stout":{buy:2800000,sell:3200000},
        "Bottle of Christmas Spirit":15000000,



        "Can of Munster":{buy:1950000,sell:2100000},
        "Can of Santa Shooters":{buy:1950000,sell:2100000},
        "Can of Red Cow":{buy:2250000,sell:2400000},
        "Can of Rockstar Rudolph":{buy:2250000,sell:2400000},
        "Can of Tourine Elite":{buy:3300000,sell:3500000},
        "Can of X-MASS":{buy:3300000,sell:3500000},

        "Cannabis":8800,
        "Vicodin":8500,
        "Shrooms":14000,
        "Ketamine":20000,
        "LSD":{buy:60000,sell:65000},
        "Ecstasy":{buy:65000,sell:76000},
        "Opium":{buy:80000,sell:90000},
        "PCP":96000,
        "Speed":145000,
        "Xanax":{buy:830000,sell:840000},
        "Love Juice":9000000,

        "Afro Comb":26000,
        "Fruitcake":400,
        "Generic Wrapping Paper":300,
        "Birthday Wrapping Paper":300,
        "Christmas Wrapping Paper":300,
        "Nodding Turtle":1200,
        "Mayan Statue":1200,
        "Pele Charm":1800,
        "Soccer Ball":{buy:2500,sell:5000},
        "Steel Drum":2500,
        "Pack of Cuban Cigars":300,
        "Box of Tissues":250,
        "Bolt Cutters":350,
        "Empty Box":300,
        "Soap on a Rope":250,
        "Crazy Straw":300,
        "Sumo Doll":{buy:5000,sell:10000},
        "Paper Weight":2500,
        "Elephant Statue":2000,
        "Chopsticks":2500,
        "Certificate of Awesome":{buy:20000,sell:30000},
        "Snowboard":5000,
        "Hockey Stick":7000,
        "Certificate of Lame":6000,
        "Yakitori Lantern":{buy:7000,sell:11000},
        "Sensu":9000,
        "Compass":9000,
        "Dart Board":9000,
        "Jade Buddha":{buy:14000,sell:20000},
        "Tailors Dummy":10000,
        "Yucca Plant":9000,
        "Sextant":{buy:12000,sell:20000},
        "Blank Tokens":15000,
        "Fire Hydrant":{buy:22000,sell:32000},
        "Blank Credit Cards":{buy:30000,sell:50000},
        "Model Space Ship":{buy:30000,sell:40000},
        "Stick of Dynamite":{buy:35000,sell:50000},
        "Ship in a Bottle":50000,
        "Polar Bear Toy":{buy:50000,sell:70000},
        "Sprig of Holly":{buy:50000,sell:70000},
        "Printing Paper":40000,
        "Advent Calendar":{buy:70000,sell:100000},
        "Maneki Neko":50000,
        "Christmas Angel":{buy:50000,sell:75000},
        "Santa's Snot":{buy:50000,sell:100000},
        "Gas Can":{buy:700000,sell:850000},
        "Salt Shaker":{buy:90000,sell:120000},
        "Gingerbread Man":100000,
        "Cinnamon Ornament":{buy:100000,sell:170000},
        "Coat Hanger":130000,
        "Electronic Pumpkin":{buy:50000,sell:150000},
        "Christmas Lights":{buy:200000,sell:400000},
        "Turkey Baster":{buy:200000,sell:300000},
        "C4 Explosive":200000,
        "Jack O Lantern Lamp":{buy:150000,sell:300000},
        "Lump of Coal":{buy:240000,sell:300000},
        "Golden Candy Cane":{buy:300000,sell:420000},
        "Glow stick":{buy:150000,sell:250000},
        "Mistletoe":{buy:150000,sell:350000},
        "Eggnog":350000,
        "Gingerbread House":{buy:150000,sell:400000},
        "Memory Locket":500000,
        "Christmas Express":600000,
        "Oriental Log":700000,
        "Mini Sleigh":{buy:600000,sell:950000},
        "Pack of Trojans":{buy:"30000000",sell:45000000},


        "Simple Virus":{buy:1000,sell:2500},
        "Tunnelling Virus":20000,
        "Polymorphic Virus":14000,
        "Firewalk Virus":{buy:40000,sell:65000},
        "Armored Virus":{buy:128000,sell:145000},
        "Stealth Virus":{buy:200000,sell:240000},

        "Jacket":400,
        "Pair of Trainers":300,
        "Tank Top":300,
        "Bandana":700,
        "Diving Gloves":2500,
        "Mediocre T-Shirt":{buy:3000,sell:6500},
        "Speedo":3000,
        "Sweater":6500,
        "Flippers":{buy:6000,sell:9000},
        "Proda Sunglasses":7000,
        "Sports Shades":7000,
        "Bikini":10000,
        "Kabuki Mask":10000,
        "Snorkel":12000,
        "Wetsuit":18000,
        "Mountie Hat":25000,
        "Old Lady Mask":35000,
        "Young Lady Mask":35000,
        "Nun Mask":41000,
        "Exotic Gentleman Mask":32000,
        "Moustache Man Mask":35000,
        "Scarred Man Mask":35000,
        "Festive Socks":45000,
        "Ginger Kid Mask":50000,
        "Santa Trousers":200000,


        "Gold Watch":300,
        "Gold Ring":300,
        "Plastic Watch":300,
        "Sapphire Ring":400,
        "Plain Silver Ring":500,
        "Gold Necklace":400,
        "Silver Necklace":500,
        "Stainless Steel Watch":1200,
        "Diamond Ring":4000,
        "Pearl Necklace":15000,

        "Brick":300,
        "Pepper Spray":1200,
        "Ninja Stars":2500,
        "Grenade":6500,
        "Fireworks":7500,
        "Stick Grenade":7800,
        "Claymore Mine":11500,
        "HEG":14000,
        "Trout":14000,
        "Throwing Knife":28000,
        "Snowball":33000,
        "Tear Gas":44000,
        "Flash Grenade":66500,
        "Smoke Grenade":{buy:94000,sell:99000},
        "Molotov Cocktail":{buy:195000,sell:225000},
        "Melatonin":285000,
        "Tyrosine":580000,
        "Epinephrine":850000,
        "Serotonin":1200000,
        "Book":1900000,

        "Heavy Duty Padlock":250000,
        "Duct Tape":230000,
        "Tumble Dryer":240000,
        "Pair of Glasses":235000,
        "High-Speed DVD Drive":230000,
        "Fanny Pack":270000,
        "Chloroform":290000,
        "Tracking Device":300000,
        "Wireless Dongle":460000,
        "Slim Crowbar":600000,
        "Screwdriver":800000,
        "Cut-Throat Razor":800000,
        "Ergonomic Keyboard":1000000,
        "Mountain Bike":1000000,
        "Advanced Driving Tactics Manual":900000,
        "Large Suitcase":9500000,

        "Lawyer Business Card":425000,
        "Gift Card":{buy:3000000,sell:3600000},
        "Erotic DVD":{buy:4600000,sell:4900000},
        "Book of Carols":10000000,
        "Feathery Hotel Coupon":14000000,

        "Personal Computer":250,
        "MP3 Player":250,
        "Pack of Blank CDs":250,
        "Hard Drive":250,
        "CD Player":250,
        "Pack of Music CDs":250,
        "Pack of Blank CDs : 100":250,
        "RS232 Cable":350,
        "Big TV Screen":1700,
        "DVD Player":2000,
        "Microwave":2000,
        "Xbox 360":70000,
        "Playstation":80000,
        "Xbox":80000,
        "Laptop":2500000,

        "Lottery Voucher":900000,
        "Box of Medical Supplies":930000,
        "Box of Grenades":950000,
        "Six Pack of Alcohol":1450000,
        "Drug Pack":4000000,

        "Chevrolet Cavalier":5000,
        "Peugeot 106":6000,
        "Volkswagen Beetle":6500,
        "Nissan Micra":7500,
        "Classic Mini":8500,
        "Honda Civic":8200,
        "Reliant Robin":7000,
        "Vauxhall Corsa":10000,
        "Renault Clio":10000,
        "Audi S4":11000,
        "Volkswagen Golf GTI":11000,
        "Seat Leon Cupra":14000,
        "Honda Integra R":13500,
        "Ford Mustang":15000,
        "Citroen Saxo":16000,
        "Hummer H3":18500,
        "Alfa Romeo 156":12000,
        "Honda Accord":20000,
        "Holden SS":22000,
        "Toyota MR2":26000,
        "Lotus Exige":30000,
        "Honda NSX":28000,
        "Honda S2000":31000,
        "BMW X5":30000,
        "Volvo 850":39000,
        "BMW M5":38000,
        "Chevrolet Corvette Z06":45000,
        "Ford Focus RS":45000,
        "Subaru Impreza STI":40000,
        "Audi TT Quattro":50000,
        "Pontiac Firebird":55000,
        "Vauxhall Astra GSI":45000,
        "Fiat Punto":54000,
        "BMW Z8":71000,
        "Dodge Charger":80000,
        "Porsche 911 GT3":82000,
        "Ford GT40":110000,
        "Audi R8":155000,
        "Mini Cooper S":100000,
        "TVR Sagaris":220000,
        "Nissan GT-R":250000,
        "Lamborghini Gallardo":900000,
        "Mercedes SLR":910000,
        "Ferrari 458":1000000,
        "Aston Martin One-77":1100000,
        "Lexus LFA":2800000,
        "Mitsubishi Evo X":2800000,
        "Sierra Cosworth":15000000,

        "Gold Noble Coin":1680000,
        "Leopard Coin":1680000,
        "Florin Coin":1680000,
        "Senet Board":6500000,
        "Vairocana Buddha Sculpture":5000000,
        "Black Senet Pawn":8600000,
        "White Senet Pawn":8600000,
        "Ganesha Sculpture":12500000,
        "Script from the Quran: Ibn Masud":	16000000,
        "Script from the Quran: Ali":17000000,
        "Script from the Quran: Ubay Ibn Kab":17000000,
        "Shabti Sculpture":26000000,
        "Egyptian Amulet":500000000,

        "Leather Boots":200,
        "Leather Pants":200,
        "Leather Helmet":200,
        "Leather Gloves":200,
        "Leather Vest":{buy:200,sell:2600},
        "Chain Mail":{buy:500,sell:5000},
        "Flak Jacket":{buy:1000,sell:5000},
        "Police Vest":{buy:3000,sell:10000},
        "Hiking Boots":{buy:3000,sell:10000},
        "Construction Helmet":{buy:20000,sell:40000},
        "Bulletproof Vest":{buy:35000,sell:50000},
        "Full Body Armor":{buy:40000,sell:70000},
        "Safety Boots":{buy:70000,sell:92000},
        "WWII Helmet":{buy:100000,sell:150000},
        "Kevlar Gloves":{buy:300000,sell:450000},
        "Outer Tactical Vest":{buy:600000,sell:850000},
        "Medieval Helmet":{buy:600000,sell:1250000},
        "Combat Gloves":{
            buy:1700000,
            sell:2500000,
            armorPrices:[
                {armor:38,value:2000000},
                {armor:40,value:3000000},
                {armor:40.8,value:4800000},
                {armor:41,value:15000000},
            ]
        },
        "Combat Boots":{
            buy:2000000,
            sell:2500000,
            armorPrices:[
                {armor:38,value:2000000},
                {armor:39.5,value:3000000},
                {armor:40,value:3500000},
                {armor:40.43,value:4500000},
                {armor:40.5,value:4800000},
                {armor:40.7,value:8000000}
            ]
        },
        "Combat Pants":{
            buy:2500000,
            sell:3000000,
            armorPrices:[
                {armor:38,value:2000000},
                {armor:39.5,value:3000000},
                {armor:40,value:3500000},
                {armor:40.43,value:4500000},
                {armor:40.5,value:4800000},
                {armor:40.7,value:8000000}
            ]
        },
        "Combat Helmet":{
            buy:2700000,
            sell:3500000,
            armorPrices:[
                {armor:38,value:2000000},
                {armor:39.5,value:3000000},
                {armor:40,value:3500000},
                {armor:40.43,value:4500000},
                {armor:40.5,value:4800000},
                {armor:40.7,value:8000000}
            ]
        },
        "Combat Vest":{buy:3000000,sell:4000000},
        "Liquid Body Armor":6500000,
        "Motorcycle Helmet":{
            buy:10000000,
            sell:12000000,
            armorPrices:[
                {armor:31.2,value:12000000},
                {armor:32.0,value:20000000},
                {armor:32.1,value:22000000},
                {armor:32.7,value:60000000},
                
                
            ]
        },
        "Flexible Body Armor":{buy:10000000,sell:13000000},

        "Butterfly Knife":"ignore",
        "Hammer":"ignore",
        "Lead Pipe":"ignore",
        "Baseball Bat":"ignore",
        "Plastic Sword":"ignore",
        "Crow Bar":"ignore",
        "Frying Pan":"ignore",
        "Spear":"ignore",
        "Pen Knife":"ignore",
        "Leather Bull Whip":"ignore",
        "Sai":"ignore",
        "Bo Staff":"ignore",
        "Kitchen Knife":100,
        "Dagger":100,
        "Swiss Army Knife":100,
        "Chain Whip":{buy:100,sell:2500},
        "Axe":{buy:1000,sell:3500},
        "Knuckle Dusters":200,
        "Ninja Claws":{buy:2000,sell:6000},
        "Taser":{buy:2000,sell:5000},
        "Wooden Nunchakus":{buy:2000,sell:5000},
        "Scimitar":{buy:4000,sell:56000},
        "Chainsaw":{buy:7000,sell:15000},
        "Katana":{buy:8000,sell:15000},
        "Cricket Bat":{buy:8000,sell:15000},
        "Ice Pick":{buy:15000,sell:25000},
        "Fine Chisel":{buy:280000,sell:410000},
        "Samurai Sword":45000,
        "Claymore Sword":{buy:60000,sell:80000},
        "Twin Tiger Hooks":73000,
        "Kama":{buy:75000,sell:100000},
        "Macana":{buy:80000,sell:140000},
        "Kodachi Swords":{buy:80000,sell:115000},
        "Wushu Double Axes":{buy:85000,sell:120000},
        "Guandao":140000,
        "Rusty Sword":{buy:160000,sell:210000},
        "Metal Nunchakus":380000,
        "Diamond Icicle":{buy:450000,sell:650000},
        "Diamond Bladed Knife":800000,
        "Pair of Ice Skates":800000,
        "Pillow":800000,
        "Ivory Walking Cane":2100000,
        "Blood Spattered Sickle":4000000,
        "Flail":7500000,
        "Yasukuni Sword":10000000,

        "Sawed-Off Shotgun":{buy:100,sell:3000},
        "Benelli M1 Tactical":{buy:100,sell:4000},
        "MP5 Navy":{buy:100,sell:5000},
        "Sks Carbine":{buy:2000,sell:6500},
        "P90":{buy:2000,sell:10000},
        "Thompson":{buy:2000,sell:15000},
        "Vektor CR-21":{buy:2000,sell:7000},
        "Ithaca 37":{buy:2000,sell:8000},
        "MP5k":{buy:5000,sell:10000},
        "Bushmaster Carbon 15 Type 21s":{buy:5000,sell:12000},
        "AK-47":{buy:5000,sell:13000},
        "XM8 Rifle":{buy:7000,sell:12000},
        "M4A1 Colt Carbine":{buy:12000,sell:30000},
        "Benelli M4 Super":{buy:15000,sell:30000},
        "Heckler & Koch SL8":{buy:28000,sell:40000},
        "M16 A2 Rifle":{buy:30000,sell:40000},
        "Mag 7":{buy:40000,sell:60000},
        "Sig 550":{buy:45000,sell:65000},
        "Steyr AUG":{buy:65000,sell:80000},
        "AK74u":{buy:65000,sell:95000},
        "TMP":{buy:20000,sell:85000},
        "MP 40":{buy:75000,sell:120000},
        "Enfield SA-80":{buy:240000,sell:300000},
        "Tavor TAR-21":{buy:350000,sell:400000},
        "Skorpion":{buy:85000,sell:100000},
        "9mm Uzi":{buy:520000,sell:650000},
        "M249 PARA LMG":{buy:650000,sell:800000},
        "Minigun":{buy:800000,sell:1500000},
        "Jackhammer":{buy:2000000,sell:4500000},
        "Swiss Army SG 550":{buy:5000000,sell:7000000},

        "Flare Gun":{buy:0,sell:2000},
        "Lorcin 380":1,
        "Raven MP25":1,
        "Glock 17":1,
        "Taurus":1,
        "Springfield 1911-A1":1,
        "Ruger 22/45":1,
        "Beretta M9":{buy:100,sell:2500},
        "Crossbow":100,
        "USP":100,
        "Slingshot":{buy:200,sell:5000},
        "Blowgun":{buy:200,sell:3000},
        "Luger":200,
        "Beretta 92FS":{buy:1000,sell:6000},
        "S&W Revolver":500,
        "Fiveseven":{buy:3000,sell:9000},
        "Blunderbuss":{buy:4000,sell:8000},
        "Magnum":{buy:20000,sell:30000},
        "S&W M29":{buy:12000,sell:30000},
        "BT MP9":{buy:30000,sell:55000},
        "Cobra Derringer":{buy:30000,sell:60000},
        "Desert Eagle":{buy:34000,sell:50000},
        "Harpoon":{buy:180000,sell:250000},
        "Qsz-92":{buy:50000,sell:220000},
        "Dual 92G Berettas":800000,
        "Flamethrower":{buy:2000000,sell:2700000},

        "Toilet Paper":1400000,
        "Dog Poop":1500000,
        "Stink Bombs":1500000,
        "Horse's Head":1500000,
        "Small Explosive Device":2400000,
        "Business Class Ticket":4500000,
        "Poison Mistletoe":18000000,
        "Donator Pack":{buy:24000000,sell:27000000},


    };

    //Highlight all the prices on the page
    function showPrices() {
        let items = document.querySelectorAll(".title .minprice")
        for (let price of items) {
            let container = price.parentElement;
            let name = container.getElementsByClassName("searchname")[0]
            highlight(price,name)
        }

        let bazaarPrices = document.querySelectorAll(".desc .wrap .price");
        for (let price of bazaarPrices) {
            let container = price.parentElement;
            let name = container.querySelectorAll("p.t-overflow")[0]
            highlight(price,name)
        }

    }

    function cleanNumber(text) {
        return text.replace(/[^0-9a-z\.]/gi, '')
    }

    function toNumber(text) {
        return parseInt(text.replace("$","").replace(",","").replace(",","").replace(",",""));
    }

    //Highlight a given element
    function highlight(amountElement,nameElement) {
        let amount = toNumber(amountElement.textContent);
        let lookupPrice = priceMapping[nameElement.textContent];
        if (!lookupPrice) {
            nameElement.style.border = "dashed grey";
            return;
        }

        if (!amount) {
            //Something has gone wrong
            nameElement.style.border = "dashed red";
            return;
        }

        let buyPrice;
        let sellPrice;

        if (lookupPrice === "ignore") {
            return; //Not interested in this item
        } else if (typeof lookupPrice === 'number') {
            //Only checking buy prices
            buyPrice = lookupPrice;
            sellPrice = Math.max(lookupPrice * 1.25,lookupPrice + 2000);
        } else {
            //Buy and sell prices
            buyPrice = lookupPrice.buy;
            sellPrice = lookupPrice.sell;
        }

        let savedPrice = window.localStorage.getItem(priceKey(nameElement.textContent));

        if (amount <= buyPrice * 0.90) {
            nameElement.style.border = "solid green";
        } else if (amount <= buyPrice) {
            nameElement.style.border = "solid black";
        } else if (savedPrice && amount <= savedPrice * 0.90) {
            nameElement.style.border = "dashed green";
        } else if (savedPrice && amount <= savedPrice * 0.95) {
            nameElement.style.border = "dashed black";
        } else if (amount >= sellPrice) {
            nameElement.style.border = "solid red";
        } else {
            nameElement.style.border = "none";
        }
    }

    function defaultBazaarNumbers() {
        let actionElements = document.querySelectorAll(".desc .act")
        for (let element of actionElements) {
            let stockNumber = element.parentElement.querySelector(".stock .instock").textContent;
            element.querySelector("input").value = stockNumber;
        }
    }

    function hideGarbage() {
        hideItem("collectibles")
        hideItem("cars")
        
        let titles = document.querySelectorAll("li.ttl");
        if (!titles) { return; }
        for (let x of titles) {
            x.style.display = "none";
        }
    }

    function hideItem(name) {
        let selector = "a[href='#" + name + "']";
        let element = document.querySelector(selector);
        if (!element) { return;  }
        element.parentElement.style.display="none";
    }

    let lastBoughtItems = Array();

    function findNextBuyButton() {
        let allButtons = document.querySelectorAll("a.yes-buy.t-blue"); 

        for (let i = allButtons.length - 1; i >= 0; --i) {
            let buyButton = allButtons[i];
            if (!lastBoughtItems.includes(buyButton.dataset.id)) {
                return buyButton;
            }
        }

        return null;
    }

    function findAndClickBuyButton() {
        let buyButton = findNextBuyButton();
        if (!buyButton) {
            return; //We didn't find the button so give up.
        }
        let itemId = buyButton.dataset.id;
        if (lastBoughtItems.includes(itemId)) {
            console.log("Skipping " + itemId);
            return; //We've already clicked this button, don't do it again
        }

        let holder = buyButton.parentElement.parentElement.parentElement;
        let itemName = holder.querySelector(".item-name").innerText.trim();
        let itemPrice = toNumber(holder.querySelector(".cost").innerText);

        let lookupPrice = priceMapping[itemName];
        if (!lookupPrice) {
            console.log("Unpriced item " + itemName);
            return; //Can't find expected price
        }

        lastBoughtItems.push(itemId);
        console.log("price " + lookupPrice);
        console.log("Auto buying item " + itemName + " with id " + itemId);

        let buyPrice = null;
        if (typeof lookupPrice === 'number') {
            buyPrice = lookupPrice;
        } else {
            buyPrice = lookupPrice.buy;
        }

        if (itemPrice <= buyPrice) {
            buyButton.parentElement.parentElement.style.display = "none";
            buyButton.click();
        }
    }
    
    function priceKey(itemName) {
        return "tcp-" + itemName
    }

    function updateAveragePrices() {
        let selector = "ul > li.show-item-info";
        let priceContainer = document.querySelector(selector);
        if (!priceContainer) {
            return;
        }

        let nameElement = priceContainer.querySelector("div.clearfix.info-wrap > div > div > span.info-msg > span");
        let priceElement = priceContainer.querySelector("div.info-content > div.clearfix.info-wrap > ul > li.t-left.graphs-stock.c-pointer > div.desc");
        
        if (!nameElement || !priceElement) {
            return;
        }

        let name = nameElement.innerText.replace("The ","")
        let price = toNumber(priceElement.innerText);

        if (name && price) {
            let key = priceKey(name);
            window.localStorage.setItem(key,price);
        }
    }

    function highlightArmor() {
        let containers = document.querySelectorAll("li.buy-show-item-info, .show-item-info");

        for (let c of containers) {
            highlightArmorContainer(c);
        }
        
    }

    function highlightArmorContainer(container) {
        let nameElement = container.querySelector("div.clearfix.info-wrap > div > div > span.info-msg > span");
        let priceElement = container.previousSibling.querySelector(".cost");
        let idElement = container.previousSibling.querySelector(".view-link");

        if (!priceElement) {
            let currentElement = container;
            let foundElement = null;
            while(currentElement.className != "first") {
                currentElement = currentElement.previousSibling;
                if (!currentElement) { return ;}
                
                if (currentElement.nodeName == "#text") {
                    continue;
                }

                let background = window.getComputedStyle(currentElement, null).getPropertyValue("background-color");
                if (background === "rgb(255, 255, 255)") {
                    foundElement = currentElement;
                    idElement = foundElement.querySelector("span.img-wrap");
                    break;
                }
            }
            if (!foundElement) {return;}
            priceElement = foundElement.querySelector(".price");
        }

        let armorElement = container.querySelector(".bonus-attachment-item-defence-bonus")
        if (!armorElement) { return;}
        armorElement = armorElement.parentElement;

        if (!nameElement || !priceElement || !armorElement) { return; }
        let name = nameElement.innerText.replace("The ","");
        let price = toNumber(priceElement.innerText);
        let armor = parseFloat(cleanNumber(armorElement.innerText));

        let lookupPrice = priceMapping[name];
        if (!lookupPrice || typeof lookupPrice != "object" ) { return ;}
        let armorPrices = lookupPrice.armorPrices;
        if (!armorPrices) { return ;}
        
        let worthBuying = false;
        for (let entry of armorPrices) {
            if (armor >= entry.armor) {
                if (price <= entry.value * 0.9) {
                    priceElement.style.border = "solid green";
                    worthBuying = true;
                } else if (price <= entry.value ) {
                    priceElement.style.border = "solid black";
                    worthBuying = true;
                }
            }
        }

        if (!worthBuying && idElement) {
            let id = idElement.dataset.armoury || idElement.getAttribute("armouryid");
            if (id) {
                window.localStorage.setItem("arm-id-" + id,Date());
            }            
        }
    }

    function hideSeenItems() {
        let allItems = document.querySelectorAll("span.img-wrap, span.view-link");


        for (let item of allItems) {
            let itemId = item.dataset.armoury || item.getAttribute("armouryid");
            
            if (!itemId) {
                continue;
            }
            let key = "arm-id-"+itemId;
            let seenValue = window.localStorage.getItem(key);
            if (seenValue) {
                item.parentElement.parentElement.style.opacity = 0.5;
            }
        }
    }

    (function() {
        'use strict';

        setInterval(showPrices,200); //Every 200ms apply price highlighting
        setTimeout(defaultBazaarNumbers,1000); //1 second after page load, set the count of each bazaar item
        setInterval(hideGarbage,300); //Get rid of things in the item market that aren't useful
        setInterval(findAndClickBuyButton,200); //Auto click buy buttons on the page
        setInterval(updateAveragePrices,200); //Find any average prices on the page and store locally
        setInterval(highlightArmor,100); //Highlight any armor based on good prices
        setInterval(hideSeenItems, 200); //Hide any items that have been seen

    })();