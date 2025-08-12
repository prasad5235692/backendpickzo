// backend/productsData.js

const products = [
  {
    title: "Samsung Galaxy M14 5G",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754305115/selvprhhwnt2u3m0slky.jpg",
    price: 12499,
    description: "Budget 5G smartphone with strong battery.",
    rating: 4.2,
    about: `6000mAh battery for extended use.\n6.6-inch FHD+ PLS LCD display.\nExynos 1330 processor, smooth multitasking.`,
    category:["Mobiles","Smartphones","mobile","mobiles","Mobile","Samsung Galaxy M14","Samsung","android","Android","android mobiles","Android mobiles"],
  },
   {
    title: "Apple iPhone 14",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754305476/jzdobuhkhqcsxq8w74y7.webp",
    price: 69999,
    description: "Flagship iPhone with top performance.",
    rating: 4.8,
    about: `A15 Bionic chip, super fast.\n12MP dual camera with Cinematic mode.\niOS updates and premium build.`,
    category:["Mobiles","Smartphones","mobile","mobiles","Mobile","iphone 14","Samsung","iphone","Apple iPhone 14"],
  },
  {
  
    title: "Sony WH-CH520 Headphones",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754305575/llv1xt4evxagfehlo765.webp",
    price: 3999,
    description: "Wireless headphones with deep bass.",
    rating: 4.3,
    about: `50-hour battery backup.\nComfortable fit with lightweight design.\nBluetooth 5.2 for stable connectivity.`,
    category:["Sony","Headphones","bluetooth","bluetooth Headphones"],
  },
  {
    title: "boAt Smartwatch Storm Call",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754305620/fpwzrjgmaslehremcgfe.webp",
    price: 1499,
    description: "Smartwatch with Bluetooth calling.",
    rating: 4.0,
    about: `1.69-inch HD display.\nTrack heart rate, sleep, SpO2.\nIP67 dust & water resistance.`,
    category:["boat watch","Watch","watch","boAt Smartwatch","boat smartwatch"],
  },
  {
    title: "OnePlus 11R 5G",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754305716/mucj4zfotmtlgojz51dr.png",
    price: 39999,
    description: "Flagship-level phone with 100W charging.",
    rating: 4.6,
    about: `Snapdragon 8+ Gen 1 processor.\n120Hz AMOLED display.\nHigh-quality triple camera setup.`,
    category:["Mobiles","Smartphones","mobile","mobiles","Mobile","OnePlus 11R 5G","OnePlus","oneplus","android","Android","android mobiles","Android mobiles"],
  },
  {
    title: "Realme Narzo N53",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754305755/mhcggtirqsv00ftguws3.jpg",
    price: 9999,
    description: "Affordable phone with stylish design.",
    rating: 4.1,
    about: `Unisoc T612 processor.\n90Hz display with punch-hole design.\n5000mAh battery with 33W fast charge.`,
    category:["Mobiles","Smartphones","mobile","mobiles","Mobile","Realme Narzo N53","Realme Narzo","realme","android","Android","android mobiles","Android mobiles"],
  },
  {
    
    title: 'Men’s Jeans',
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754320582/puudferpxqgxr9vbsk9w.webp",
    price: 1299,
    description: 'Slim fit blue denim jeans',
    rating: 4.0,
    about: 'Stretchable denim with a modern slim fit cut. Durable and stylish.',
    category:["pant","pants","Pant","Pants","pant for men","Jeans","Jeans pants","Jeanspant"],
  },
  {
    title: "Canon EOS 200D DSLR",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754305825/ly9thtdgskddospl8af3.jpg",
    price: 54999,
    description: "DSLR camera for beginners and creators.",
    rating: 4.5,
    about: `24.1MP APS-C CMOS Sensor.\nDual Pixel Autofocus.\nWiFi, NFC, Bluetooth connectivity.`,
    category:["DSLR","dslr","DSLR camera","dslr camera,","Canon EOS 200D DSLR"]
  },
  {
    title: "Samsung 55\" 4K Smart TV",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754305861/wyjf0kanv4rvfgdhpnn8.webp",
    price: 47999,
    description: "Ultra HD Smart TV with HDR10+ support.",
    rating: 4.6,
    about: `55-inch Crystal UHD panel.\nTizen OS with apps and voice support.\nMultiple HDMI & USB ports.`,
    category:["Smart TV","TV","tv","Samsung tv","4k tv","4k"]
  },
  {
    title: "Noise ColorFit Pulse 2",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754305936/gqxus7abfcsgl1jhnjw6.webp",
    price: 1999,
    description: "Fitness watch with health tracking.",
    rating: 4.0,
    about: `1.8” TFT LCD display.\n100+ cloud-based watch faces.\nHeart rate, SpO2, step tracking.`,
    category:["Noise watch","Watch","watch","Noise Smartwatch","nosie smartwatch","Noise ColorFit Pulse 2"],
  },
  {
    title: "Zebronics Keyboard",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754305973/u8nxc1qxjwlguuht1v9b.webp",
    price: 1299,
    description: "Gaming keyboard with LED backlight.",
    rating: 4.2,
    about: `Mechanical keys with tactile feedback.\nRGB lighting for style.\nDurable build for long use.`,
    category:["keyboard","Zebronics Keyboard","mechanical keyboard","wired keyboard"],
  },
  {
    title: "Logitech Wireless Mouse",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306005/njynbx07awhfrb2pydnc.jpg",
    price: 899,
    description: "Compact wireless mouse for daily use.",
    rating: 4.1,
    about: `2.4GHz wireless connection.\nBattery lasts up to 12 months.\nSmooth cursor control on most surfaces.`,
    category:["Mouse","Wireless Mouse","wireless mouse","mouse","Logitech Wireless Mouse"]
  },
   {
    title: "Dell Monitor 24 inch",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306044/eo9unqknsb22os68ikek.jpg",
    price: 10999,
    description: "Full HD monitor with wide viewing angles.",
    rating: 4.3,
    about: `24-inch LED-backlit display.\n75Hz refresh rate.\nAdjustable tilt and VESA mountable.`,
    category: ["Monitors", "Monitor", "monitors", "monitor", "Electronics", "electronics", "Display", "display"]
  },
  {
    title: "Mi Band 6",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306075/als2fyxyfkcyuud05nk4.jpg",
    price: 2799,
    description: "Smart band with AMOLED display.",
    rating: 4.2,
    about: `1.56” AMOLED touch screen.\n30 fitness modes with auto detection.\n14-day battery life.`,
    category: ["Wearables", "wearables", "Wearable", "wearable", "Fitness", "fitness", "Electronics", "electronics"]
  },
  {
    title: "Fire-Boltt Ninja 3 Smartwatch",
    image:"https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306105/j6xa21n3pif0s0psddxr.webp",
    price: 1499,
    description: "Affordable smartwatch with health sensors.",
    rating: 3.9,
    about: `SpO2 and heart rate monitoring.\nFull touch color display.\nIP68 waterproof rating.`,
    category: ["Smartwatches", "smartwatches", "Smartwatch", "smartwatch", "Wearables", "wearables", "Electronics", "electronics"]
  },
  {
    title: "Philips Trimmer BT3211",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306134/vcin0up68g3xf0qy8wzm.jpg",
    price: 1399,
    description: "Beard trimmer with self-sharpening blades.",
    rating: 4.0,
    about: `60 mins cordless use.\n20 length settings with zoom wheel.\nErgonomic and travel friendly.`,
    category: ["Grooming", "grooming", "Trimmers", "trimmers", "Trimmer", "trimmer", "Men's Care", "men's care"]
  },
  {
    title: "Dyson Hair Dryer",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306182/tyswhmcwi4mtooeoyuon.jpg",
    price: 29999,
    description: "Premium hair dryer with fast drying.",
    rating: 4.7,
    about: `Air Multiplier technology.\nLightweight and balanced.\nMagnetic attachments included.`,
    category: ["Hair Care", "hair care", "Appliances", "appliances", "Beauty", "beauty"]
  },
  {
    title: "Prestige Gas Stove 3 Burner",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306234/ceuec08dguwihjberxgw.jpg",
    price: 3599,
    description: "Manual ignition gas stove.",
    rating: 4.2,
    about: `Toughened glass top.\nPowder-coated body.\nEfficient tri-pin brass burners.`,
    category: ["Kitchen", "kitchen", "Home Appliances", "home appliances", "Cooking", "cooking"]
  },
  {
    title: "Bajaj Ceiling Fan",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306272/hozhay4xk7vykwuta7fq.jpg",
    price: 1999,
    description: "High-speed fan with wide air delivery.",
    rating: 4.1,
    about: `1200mm sweep size.\nSmooth noiseless operation.\nDouble ball bearing motor.`,
    category: ["Home Appliances", "home appliances", "Fans", "fans", "Fan", "fan", "Cooling", "cooling"]
  },
  {
    title: "Havells Electric Kettle",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306300/fsismfmitmebau9whmfh.webp",
    price: 1699,
    description: "Stainless steel kettle with auto shut-off.",
    rating: 4.3,
    about: `1.2 Litre capacity.\nCool-touch outer body.\n360-degree cordless operation.`,
    category: ["Kitchen", "Home Appliances", "Kettles"]
  },
  {
    title: "Philips Mixer Grinder",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306339/dfhnl7m4qm7wzlzbzfd5.jpg",
    price: 2999,
    description: "750W motor for efficient grinding.",
    rating: 4.2,
    about: `Advanced air ventilation system.\nStainless steel jars.\nCompact and durable design.`,
    category: ["Kitchen", "Grinders", "Home Appliances"]
  },
  {
    title: "Lenovo Wireless Earbuds",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306366/hjsfgzg0dzrlkkqymnmc.webp",
    price: 1499,
    description: "Bluetooth earbuds with charging case.",
    rating: 4.0,
    about: `Up to 20 hrs of playback.\nTouch controls with mic.\nType-C fast charging.`,
    category: ["Audio", "Accessories", "Earbuds", "Electronics"]
  },
  {
    title: "Portronics Bluetooth Speaker",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306393/qacjhrchxirqwnktxhji.webp",
    price: 1699,
    description: "Portable speaker with FM & AUX support.",
    rating: 4.3,
    about: `10W output with deep bass.\nTough build and compact design.\nBluetooth 5.0, FM & USB play.`,
    category: ["Speakers", "Audio", "Portable", "Electronics"]
  },
  {
    title: "Samsung SSD 1TB",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306425/bt53h3hyibuxzkn4rtyw.jpg",
    price: 6299,
    description: "Fast solid-state drive for storage.",
    rating: 4.6,
    about: `Read speed up to 550 MB/s.\nCompact and shock resistant.\nIdeal for gaming and multitasking.`,
    category: ["Storage", "SSD", "Computers", "Electronics"]
  },
  {
    title: "Seagate 2TB Hard Drive",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306456/h40spr6p0hih6hchclhd.jpg",
    price: 5199,
    description: "Reliable external hard disk.",
    rating: 4.4,
    about: `2TB capacity with USB 3.0.\nPlug-and-play design.\nBackup software included.`,
    category: ["Storage", "Hard Drives", "Computers", "Electronics"]
  },
  {
    title: "TP-Link WiFi Router",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306481/smunbcmonxeqiafkjyys.jpg",
    price: 1299,
    description: "High-speed router for home use.",
    rating: 4.2,
    about: `300Mbps wireless speed.\nEasy setup and parental control.\n2 external antennas for wider coverage.`,
    category: ["Networking", "Routers", "WiFi", "Electronics"]
  },
  {
    title: "ASUS Gaming Mouse",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306506/bkyrgefy5k9t7b1sj8mu.webp",
    price: 1499,
    description: "Ergonomic gaming mouse with RGB.",
    rating: 4.3,
    about: `7 programmable buttons.\nAdjustable DPI up to 7000.\nRGB lights and durable switches.`,
    category: ["Accessories", "Gaming", "Mice", "Computers"]
  },
  {
    title: "LG Washing Machine 7kg",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306533/npk7zdwioyz1fqrpua6o.webp",
    price: 21999,
    description: "Fully automatic top-load washer.",
    rating: 4.4,
    about: `Smart inverter technology.\nTurbo drum & child lock.\nEnergy efficient performance.`,
    category: ["Appliances", "Washing Machines", "Home"]
  },
  {
    title: "Voltas AC 1.5 Ton",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306567/zpeonmdepxmwml28mwvt.jpg",
    price: 30999,
    description: "Inverter AC with copper condenser.",
    rating: 4.5,
    about: `High ambient cooling.\n4-stage filtration system.\nEnergy efficient 5-star rating.`,
    category: ["Appliances", "Air Conditioners", "Cooling", "Home"]
  },
  {
    title: "Whirlpool Refrigerator 265L",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306599/rd1yqzagesem6iyjwq8a.jpg",
    price: 22999,
    description: "Frost-free fridge with inverter tech.",
    rating: 4.3,
    about: `265 L Double door design.\n6th Sense DeepFreeze tech.\nAuto defrost and stabilizer free.`,
    category: ["Appliances", "Refrigerators", "Kitchen", "Home"]
  },
  {
    title: "Amazon Basics Office Chair",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306634/rdobkgmgp7etyqsnkwkr.jpg",
    price: 7499,
    description: "Ergonomic chair with lumbar support.",
    rating: 4.2,
    about: `Adjustable height and tilt.\nMesh back for ventilation.\nDurable wheels and armrest.`,
    category: ["Furniture", "Office", "Chairs", "Work"]
  },
  {
    title: "Adidas Men's Running Shoes",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306664/qljp7unynudf6f1j0nm6.avif",
    price: 2899,
    description: "Lightweight shoes for running & gym.",
    rating: 4.4,
    about: `Breathable mesh upper.\nCushioned midsole for comfort.\nDurable rubber outsole grip.`,
    category:  [ "Men", "men",
      "Shoe", "shoe", "Shoes", "shoes",
      "Boot", "boot", "Boots", "boots",
      "Woodland", "woodland",
      "Outdoor", "outdoor"]
  },
  {
    title: "Lipstick Set",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306713/kjzjx553v5ptcltzhdnc.webp",
    price: 799,
    description: "Long-lasting matte lipstick pack",
    rating: 4.5,
    about: "Made with natural ingredients, paraben-free, cruelty-free.",
    category: ["Beauty", "Cosmetics", "Makeup", "Women"]
  },
{
  title: 'Men’s T-Shirt',
  image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306751/yhklsq0vkq4sonivj85n.webp",
  price: 499,
  description: 'Cotton round neck t-shirt for men',
  rating: 4.2,
  about: 'Soft cotton material, breathable design, perfect for summer wear.',
  category: [ "Men", "men",
      "TShirt", "tshirt", "TShirts", "tshirts",
      "Allen Solly", "allen solly",
      "Polo", "polo", "Striped", "striped", "Smart Casual", "smart casual"]
},
{
  title: 'Sports Shoes',
  image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306798/mha9exnqtmwcmj8yvd6a.webp",
  price: 1499,
  description: 'Comfortable shoes for running and walking',
  rating: 4.6,
  about: 'Lightweight and cushioned sole ideal for sports, gym, and daily wear.',
  category: [  "Men", "men",
      "Shoe", "shoe", "Shoes", "shoes",
      "Boot", "boot", "Boots", "boots",
      "Woodland", "woodland",
      "Outdoor", "outdoor"]
},
{
  title: '3-Seater Sofa',
  image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754306829/vtgtbgohnao50drmw240.webp",
  price: 15999,
  description: 'Comfortable fabric 3-seater sofa',
  rating: 4.3,
  about: 'Soft cushioning with durable fabric.\nFits any living space.\nStain resistant and easy to clean.',
  category: ["Furniture", "Living Room", "Sofas"]
},
{
  title: 'Sunglasses',
  image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754320514/ysisaq997if3nugiypci.webp",
  price: 699,
  description: 'UV-protected stylish sunglasses',
  rating: 4.3,
  about: 'Stylish sunglasses with UV400 protection, suitable for all face shapes.',
  category: ["Fashion", "Accessories", "Unisex"]
},
{
  title: "HP 15s Ryzen 5 Laptop",
  image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754305788/ctgfgnj9uaajn83trtzr.jpg",
  price: 45999,
  description: "Powerful Ryzen laptop for work and study.",
  rating: 4.4,
  about: `Ryzen 5 5500U processor.\n8GB RAM and 512GB SSD.\n15.6-inch Full HD display.`,
  category: ["Laptops", "laptops", "Laptop", "laptop", "Electronics", "HP", "Budget", "Student" ,"hp 15s"]
},
{
  title: 'Dining Table Set',
  image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754320654/pdcmrz7ef3p0ivrdopo9.jpg",
  price: 11999,
  description: '4-seater wooden dining set',
  rating: 4.1,
  about: 'Made from high-quality Sheesham wood.\nPolished surface with a sturdy base.\nPerfect for compact homes.',
  category: ["Furniture", "Dining", "Wooden"]
},

  {

    title: 'Samsung Galaxy S22',
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754320742/mlepk8l4wbtrg1suuca1.webp ",
    price: 59999,
    description: 'Samsung flagship with Snapdragon 8 Gen 1',
    rating: 4.4,
    about: 'The Galaxy S22 offers a sleek design, vibrant AMOLED display, and a strong camera experience. Great for gaming and media consumption.',
    category:["Mobiles","Smartphones","mobile","mobiles","Mobile","Samsung Galaxy s22","Samsung","android","Android","android mobiles","Android mobiles"],
  },
   {
    title: 'iPhone 13',
    price: 69999,
    image: 'https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754623770/ibju5vxywj73asbqebam.webp',
    description: 'Apple iPhone 13 with A15 Bionic chip',
    rating: 4.6,
    about: 'The iPhone 13 delivers a bright OLED display, powerful A15 chip, and excellent dual-camera system. Perfect for everyday performance and photography.',
   category:["Mobiles","Smartphones","mobile","mobiles","Mobile","iphone 13","Samsung","iphone","Apple iPhone 13"],
  },
  {
    title: 'OnePlus 10 Pro',
    price: 49999,
    image: 'https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754623898/mc54qrrbpz02hnzvpveg.webp',
    description: 'Smooth performance with 120Hz AMOLED',
    rating: 4.2,
    about: 'Powered by Snapdragon 8 Gen 1, the OnePlus 10 Pro is built for speed. Enjoy a clean UI and fast charging experience.',
    category:["Mobiles","Smartphones","mobile","mobiles","Mobile","OnePlus 10 Pro","OnePlus","oneplus","oneplus 10","android","Android","android mobiles","Android mobiles"],
  },
  {
    title: 'Realme Narzo 50',
    price: 15999,
    image: 'https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754623944/ko0ifbysj8ax8a5nz9fo.webp',
    description: 'Budget phone with strong battery life',
    rating: 4.0,
    about: 'Great value for money, the Narzo 50 features a large display, powerful battery, and reliable daily performance.',
     category:["Mobiles","Smartphones","mobile","mobiles","Mobile","Realme Narzo 50","Realme Narzo","realme","android","Android","android mobiles","Android mobiles"],
    
  },
  {
    title: 'Xiaomi Redmi Note 11',
    price: 12999,
    image: 'https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754624032/flc5oqk8zitucjnaplxh.webp',
    description: 'Affordable choice with great camera',
    rating: 4.1,
    about: 'Redmi Note 11 balances price and features with an AMOLED screen, 50MP camera, and smooth performance for budget users.',
    category: 'Mobiles',
     category:["Mobiles","Smartphones","mobile","mobiles","Mobile","Xiaomi Redmi Note 11"," Redmi"," redmi","android","Android","android mobiles","Android mobiles","Xiaomi","xiaomi"],

  },
  {
    title: 'Vivo V27',
    price: 18999,
    image: 'https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754624083/zcdwwoixuzgdng2w7dfl.webp',
    description: 'Stylish design with excellent selfies',
    rating: 4.3,
    about: 'Focused on style and camera quality, the V27 offers a curved display and high-quality selfies — ideal for social media users.',
   category:["Mobiles","Smartphones","mobile","mobiles","Mobile","Vivo V27","vivo v27","vivo","vivo mobiles","android","Android","android mobiles","Android mobiles"],
  
  },
  {
    title: 'iQOO Z6',
    price: 16999,
    image: 'https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754624147/m6kknp6pxlp3n0cukhvp.webp',
    description: 'Performance-focused mid-ranger',
    rating: 4.0,
    about: 'With a Snapdragon 695 processor, this phone handles multitasking well and is suited for performance-demanding users.',
    category:["Mobiles","Smartphones","mobile","mobiles","Mobile","iQOO Z6","iqoo z6","iqoo","iqoo mobiles","android","Android","android mobiles","Android mobiles"],
  
  },
  {
    title: 'Nothing Phone 1',
    price: 28999,
    image: 'https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754624256/mn4ft1gqrkf8adgdyodq.jpg',
    description: 'Unique transparent design',
    rating: 4.5,
    about: 'The Nothing Phone 1 stands out with its transparent design and Glyph interface, offering a smooth Android experience.',
    category:["Mobiles","Smartphones","mobile","mobiles","Mobile","Nothing Phone 1","nothing phone 1","nothing","Nothing","nothing mobiles","android","Android","android mobiles","Android mobiles"],
  },
  {
    title: 'Motorola Razr 40',
    price: 80999,
    image: 'https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754624303/dbbk1gsrh8mwp1caeldd.jpg',
    description: 'Clean UI with strong battery',
    rating: 4.2,
    about: 'A foldable phone with a nostalgic flip design and modern performance. Motorola’s clean UI is a bonus.',
    ategory:["Mobiles","Smartphones","mobile","mobiles","Mobile","Motorola Razr 40","motorola razr 40","moto","moto mobiles","android","Android","android mobiles","Android mobiles"],

  },
  {
    title: 'Google Pixel 6a',
    price: 31999,
    image: 'https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754624358/epyx6xwqbniuzqsxahjs.jpg',
    description: 'Pixel experience with best-in-class camera',
    rating: 4.6,
    about: 'Pixel 6a delivers incredible camera performance with Google’s AI and a smooth Android experience.',
     category:["Mobiles","Smartphones","mobile","mobiles","Mobile","Google Pixel 6a","google pixel 6a","pixel","6a","google pixel","google mobiles","android","Android","android mobiles","Android mobiles"],

  },
    {
    title: "Apple MacBook Air M2",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754624468/np9te4qco5tue6yle4tk.webp",
    price: 114900,
    description: "Apple MacBook Air with M2 chip, 13.6-inch Retina Display, 8GB RAM, 256GB SSD",
    rating: 4.8,
    about: "The MacBook Air M2 offers exceptional performance, long battery life, and ultra-thin design.",
    category: ["Laptops", "laptops", "Laptop", "laptop", "Electronics", "Apple", "MacBook", "Portable"]
  },
  {
    title: "Dell XPS 15",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754624575/zuwagormycwqe3rx9cii.webp",
    price: 149990,
    description: "Dell XPS 15 Laptop with Intel i7, 16GB RAM, 512GB SSD, NVIDIA GTX 1650",
    rating: 4.7,
    about: "A premium Windows laptop with a stunning display and powerful internals.",
    category: ["Laptops", "laptops", "Laptop", "laptop", "Electronics", "Dell", "Gaming", "Workstation"]
  },
  {
    title: "HP Pavilion 14",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754624660/ffovmwbql0hwemvrafwe.webp",
    price: 67999,
    description: "HP Pavilion 14 with AMD Ryzen 5, 16GB RAM, 512GB SSD",
    rating: 4.5,
    about: "A sleek and efficient laptop for students and professionals alike.",
    category: ["Laptops", "laptops", "Laptop", "laptop", "Electronics", "HP", "Budget", "Student"]
  },
  {
    title: "ASUS ROG Strix G16",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754624787/i9zag4pjnemdosstiteo.webp",
    price: 109999,
    description: "ASUS ROG Strix G16 with Intel i7, 16GB RAM, RTX 4060 GPU, 1TB SSD",
    rating: 4.6,
    about: "A beast gaming machine with RGB keyboard and high refresh rate display.",
    category: ["Laptops", "laptops", "Laptop", "laptop", "Electronics", "ASUS", "Gaming", "High Performance"]
  },
  {
    title: "Lenovo IdeaPad Slim 3",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754624888/ut6xypczs9etrv83ez9n.webp",
    price: 45999,
    description: "Lenovo IdeaPad Slim 3 with Intel i5 12th Gen, 8GB RAM, 512GB SSD",
    rating: 4.3,
    about: "A budget-friendly laptop with solid performance and a modern design.",
    category: ["Laptops", "laptops", "Laptop", "laptop", "Electronics", "Lenovo", "Budget", "Student"]
  },
  {
    title: "Microsoft Surface Laptop 5",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754625065/irm4h34sl4ud1p2glucv.jpg",
    price: 112999,
    description: "13.5-inch Surface Laptop 5 with Intel Evo i5, 8GB RAM, 256GB SSD",
    rating: 4.4,
    about: "Sleek, powerful, and elegant—perfect for productivity on the go.",
    category: ["Laptops", "laptops", "Laptop", "laptop", "Electronics", "Microsoft", "Portable", "Business"]
  },
  {
    title: "Acer Aspire 7",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754625199/ruk5ay541vqfi9qucy0k.webp",
    price: 58999,
    description: "Acer Aspire 7 with AMD Ryzen 5, GTX 1650, 8GB RAM, 512GB SSD",
    rating: 4.4,
    about: "A powerful laptop for both gaming and everyday productivity.",
    category: ["Laptops", "laptops", "Laptop", "laptop", "Electronics", "Acer", "Gaming", "Midrange"]
  },
  {
    title: "MSI Modern 14",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754625293/y1eaqraulea8ah3jgw26.webp",
    price: 62999,
    description: "MSI Modern 14 with Intel i5, 8GB RAM, 512GB SSD, Ultra-lightweight",
    rating: 4.3,
    about: "Lightweight and stylish, ideal for students and remote workers.",
    category: ["Laptops", "laptops", "Laptop", "laptop", "Electronics", "MSI", "Portable", "Student"]
  },
  {
    title: "Samsung Galaxy Book4",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754625360/wlkqvhccpqcz0czwblkh.webp",
    price: 89999,
    description: "Samsung Galaxy Book4 with Intel i5, AMOLED Display, 16GB RAM, 512GB SSD",
    rating: 4.5,
    about: "Premium laptop with gorgeous AMOLED display and seamless Galaxy ecosystem integration.",
    category: ["Laptops", "laptops", "Laptop", "laptop", "Electronics", "Samsung", "Portable", "Business"]
  },
  {
    title: "Realme Book Slim",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754625462/nfbon5oyqbfwxvzxi8b6.jpg",
    price: 44999,
    description: "Realme Book Slim with Intel i3, 8GB RAM, 256GB SSD",
    rating: 4.2,
    about: "Ultra-slim, affordable, and stylish—great for everyday use.",
    category: ["Laptops", "laptops", "Laptop", "laptop", "Electronics", "Realme", "Budget", "Student"]
  },
  
  {
    title: "iPhone 15 Pro Max",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754625550/mh0btlm2wov94mqgxxbm.webp",
    price: 139999,
    description: "Apple iPhone 15 Pro Max with A17 Pro chip and 5x Telephoto lens",
    rating: 4.9,
    about: "The most powerful iPhone yet, featuring titanium design, USB-C, and incredible performance.",
    category:["Mobiles","Smartphones","mobile","mobiles","Mobile","iphone 15 pro max","iphone","Apple iPhone 15 pro"],
  },
  {
    title: "iPhone 15",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754625637/gweodg3vvbwekh0xfzlm.webp",
    price: 79999,
    description: "Apple iPhone 15 with Dynamic Island and A16 Bionic chip",
    rating: 4.8,
    about: "iPhone 15 delivers a premium experience with a new camera system and updated design.",
    category:["Mobiles","Smartphones","mobile","mobiles","Mobile","iphone 15","iphone","Apple iPhone 15"],
  },
  {
    title: "iPhone 14 Pro",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754625688/hs6pzkfwyn9uiskxwi93.webp",
    price: 119999,
    description: "Apple iPhone 14 Pro with A16 chip and ProMotion display",
    rating: 4.7,
    about: "Experience the always-on display and Dynamic Island with the iPhone 14 Pro.",
   category:["Mobiles","Smartphones","mobile","mobiles","Mobile","iphone 14 pro max","iphone","Apple iPhone 14 pro"],
  },
  {
    title: "iPhone 13 Pro Max",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754625756/bm9kbgwj4mciu1usv4ne.webp",
    price: 109999,
    description: "Apple iPhone 13 Pro Max with A15 Bionic and 120Hz ProMotion",
    rating: 4.7,
    about: "Smooth display, long battery, and high-end cameras define the 13 Pro Max.",
    category: ["Mobiles","Mobile", "iPhone", "Smartphones", "Apple", "Pro","iPhone 13 Pro Max","iphone 13 pro max"]
  },
  {
    title: "iPhone SE (3rd Gen)",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754625798/qm8enxn2wqdrkmoton9c.webp",
    price: 49999,
    description: "Apple iPhone SE 2022 with A15 chip and compact design",
    rating: 4.2,
    about: "Classic design meets powerful internals for budget-conscious Apple fans.",
    category: ["Mobiles","Mobile","mobile","mobiles", "iPhone", "Smartphones", "Apple", "Budget","iphone se","se"]
  },
  {
    title: "iPhone 12 Pro",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754625838/hy4uunbypmutardflxih.webp",
    price: 84999,
    description: "Apple iPhone 12 Pro with triple camera system and LiDAR",
    rating: 4.5,
    about: "A powerful device with pro features, ideal for creators and professionals.",
    category: ["Mobiles","Mobile","mobile","mobiles", "iPhone", "Smartphones", "Apple", "Pro","iphone 12 pro","iPhone 12 Pro"]
  },
  {
    title: "iPhone 12",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754625928/p4zeypmmmo3l6m86w7my.jpg",
    price: 53999,
    description: "Apple iPhone 12 with Super Retina XDR display and A14 Bionic",
    rating: 4.4,
    about: "Sleek, powerful, and reliable—still a great option in 2025.",
    category: ["Mobiles","Mobile","mobile","mobiles", "iPhone", "Smartphones", "Apple","iphone12"]
  },
  {
    title: "iPhone 11",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754626012/dfgnyxcye4xvf0zqxw0w.webp",
    price: 43999,
    description: "Apple iPhone 11 with A13 chip and dual cameras",
    rating: 4.3,
    about: "Affordable and still capable, perfect for users who love simplicity.",
    category: ["Mobiles","Mobile","mobile","mobiles", "iPhone", "Smartphones", "Apple", "Budget"]
  },
  {
    title: "Wooden Coffee Table",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754727483/u90jtbccyfmt6pmepqxb.jpg",
    price: 5999,
    description: "Classic solid wood coffee table for your living room",
    rating: 4.5,
    about: "Made from premium Sheesham wood, adds elegance and utility to your home.",
    category: ["Home", "Furniture", "Living Room", "Wood"]
  },
  {
    title: "5-Seater Sofa Set",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754727586/qabowlekidvdzs6zj3pb.jpg",
    price: 24999,
    description: "Comfortable and spacious 5-seater fabric sofa set",
    rating: 4.6,
    about: "Ergonomic design, removable covers, perfect for family living spaces.",
    category: ["Home", "Furniture", "Sofa", "Living Room"]
  },
  {
    title: "LED Ceiling Light",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754727645/elgk7lkaohbqtpsyokcc.jpg",
    price: 1499,
    description: "Modern LED ceiling light with warm white tone",
    rating: 4.3,
    about: "Low power consumption with elegant design for any room.",
    category: ["Home", "Lighting", "Decor", "Electricals"]
  },
  {
    title: "Double Bed with Storage",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754727715/dwgxa2pvis5ykqdnymb4.jpg",
    price: 17999,
    description: "Queen size wooden bed with hydraulic storage",
    rating: 4.4,
    about: "Spacious storage compartments with strong build and aesthetic look.",
    category: ["Home", "Furniture", "Bedroom", "Storage"]
  },
  {
    title: "Non-stick Cookware Set",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754727771/gjbpqai2ryl0fxslhtrv.jpg",
    price: 2999,
    description: "8-piece non-stick cookware set for everyday cooking",
    rating: 4.7,
    about: "Durable, easy to clean, includes frying pans, kadai, and more.",
    category: ["Home", "Kitchen", "Cookware", "Essentials"]
  },
  {
    title: "Dining Table 4-Seater",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754727820/wd9zlmqycvr67g7ap9vu.jpg",
    price: 12999,
    description: "Compact 4-seater dining table with chairs",
    rating: 4.5,
    about: "Modern design with sturdy build, ideal for compact homes.",
    category: ["Home", "Furniture", "Dining Room", "Wood"]
  },
  {
    title: "Curtain Set (4 Pieces)",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754727869/ucovddkickzlbnsdxjgq.jpg",
    price: 1099,
    description: "Elegant window curtain set with floral print",
    rating: 4.2,
    about: "Blocks sunlight and adds style to your windows.",
    category: ["Home", "Decor", "Textiles", "Living Room"]
  },
  {
    title: "Wall Clock Modern",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754727919/bz7doiv5y9yq50a926u8.jpg",
    price: 799,
    description: "Stylish wall clock for modern interiors",
    rating: 4.3,
    about: "Silent sweep movement, perfect for hall or bedroom.",
    category: ["Home", "Decor", "Wall Decor", "Clocks"]
  },
  {
    title: "Storage Cabinet",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754727956/eok0vhhtakhdmywchbji.jpg",
    price: 3499,
    description: "Multi-purpose wooden storage cabinet",
    rating: 4.4,
    about: "Useful for organizing books, clothes, or kitchen items.",
    category: ["Home", "Furniture", "Storage", "Utility"]
  },
  {
    title: "King Size Mattress",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754728013/zrh3zsfmnsgffqdtzgxv.jpg",
    price: 9999,
    description: "Orthopedic king-size mattress with memory foam",
    rating: 4.6,
    about: "Supports spine alignment and ensures restful sleep.",
    category: ["Home", "Bedroom", "Mattress", "Comfort"]
  },
    {
    title: "Men's Formal White Shirt",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754735827/v5pvxxcjfvb1zfgkioai.jpg",
    price: 999,
    description: "Classic white formal shirt for office wear",
    rating: 4.4,
    about: "Cotton-rich fabric, regular fit, ideal for meetings and interviews.",
    category: ["Men", "shirt","shirts","Shirts", "men","Formal", "Office"]
  },
  {
    title: "Casual Checked Shirt",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754735896/kzvg9tmtpvoco6bhvafk.jpg",
    price: 799,
    description: "Casual checkered shirt for men",
    rating: 4.2,
    about: "Comfortable and stylish, perfect for daily wear or outings.",
    category: ["Men", "shirt","shirts", "Shirts","men", "Casual"]
  },
  {
    title: "Slim Fit Denim Shirt",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754735937/wu5i4mgm12ys4ddf4eg9.jpg",
    price: 1099,
    description: "Slim fit blue denim shirt",
    rating: 4.5,
    about: "Trendy and durable, can be worn as over-shirt too.",
    category: ["Men",  "shirt","shirts","Shirts", "men","Denim", "Casual"]
  },
  {
    title: "Printed Party Wear Shirt",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736022/q9bsulvr3rdo4ccg5pr3.jpg",
    price: 1199,
    description: "Printed shirt for parties and weekend wear",
    rating: 4.3,
    about: "Stylish prints, lightweight and wrinkle-resistant fabric.",
    category: ["Men",  "shirt","shirts","Shirts", "men","Party Wear", "Trendy"]
  },
  {
    title: "Linen Half Sleeve Shirt",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736068/pcdkdicme6idwsgw80mq.jpg",
    price: 899,
    description: "Breathable linen half sleeve shirt",
    rating: 4.1,
    about: "Perfect for summer outings or beach vacations.",
    category: ["Men", "shirt","shirts", "Shirts", "men","Summer", "Casual"]
  },
  {
    title: "Men's Black Formal Shirt",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736121/yk16zyo5oc53rfy29i4q.jpg",
    price: 1049,
    description: "Elegant black formal shirt with satin finish",
    rating: 4.6,
    about: "Regular fit, ideal for formal dinners or presentations.",
    category: ["Men", "shirt","shirts", "Shirts","men", "Formal", "Satin"]
  },
  {
    title: "Flannel Winter Shirt",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736179/rf3o5patqkkscu2ssgpk.jpg",
    price: 1299,
    description: "Warm flannel check shirt",
    rating: 4.5,
    about: "Soft and cozy, great for winter layering.",
    category: ["Men", "shirt","shirts", "Shirts","men", "Winter", "Flannel"]
  },
  {
    title: "Cotton Striped Shirt",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736249/nz51th2zscliz3xl24aj.jpg",
    price: 949,
    description: "Smart striped cotton shirt for everyday wear",
    rating: 4.2,
    about: "Subtle stripes add elegance to this soft cotton shirt.",
    category: ["Men", "shirt","shirts","men", "Shirts", "Casual"]
  },

  // ✅ Men's Pants
    {
    title: "Slim Fit Formal Trousers",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736298/h9qeif8bfiu8mkzjb42a.jpg",
    price: 1199,
    description: "Slim fit black formal pants",
    rating: 4.3,
    about: "Stretched material, modern fit, best for work or functions.",
    category: [
      "Men", "men",
      "Pant", "pant", "Pants", "pants",
      "Trouser", "trouser", "Trousers", "trousers",
      "Formal", "formal"
    ]
  },
  {
    title: "Casual Chino Pants",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736350/llxxf44rih7axk2hvqpx.jpg",
    price: 1099,
    description: "Men’s casual chinos with stretch",
    rating: 4.4,
    about: "Stylish slim chinos in multiple colors for outings and office.",
    category: [
      "Men", "men",
      "Pant", "pant", "Pants", "pants",
      "Chino", "chino", "Chinos", "chinos",
      "Casual", "casual"
    ]
  },
  {
    title: "Jogger Pants with Zipper",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736391/ukfwwsntzm71f8gjrpm1.jpg",
    price: 899,
    description: "Stylish black joggers for casual wear",
    rating: 4.1,
    about: "Comfortable joggers with elastic cuffs and zipped pockets.",
    category: [
      "Men", "men",
      "Pant", "pant", "Pants", "pants",
      "Jogger", "jogger", "Joggers", "joggers",
      "Casual", "casual"
    ]
  },
  {
    title: "Cotton Cargo Pants",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736439/fwr9sjysizcu00uvnkg4.webp",
    price: 1199,
    description: "Utility cargo pants with multiple pockets",
    rating: 4.2,
    about: "Durable and versatile for travel, hiking, or daily wear.",
    category: [
      "Men", "men",
      "Pant", "pant", "Pants", "pants",
      "Cargo", "cargo",
      "Utility", "utility"
    ]
  },
  {
    title: "Linen Trousers",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736490/o4ikxuvw0vrj4hjzkfjp.jpg",
    price: 999,
    description: "Breathable linen pants for men",
    rating: 4.3,
    about: "Ideal for hot climates, resorts, and weekend wear.",
    category: [
      "Men", "men",
      "Pant", "pant", "Pants", "pants",
      "Trouser", "trouser", "Trousers", "trousers",
      "Linen", "linen",
      "Summer", "summer"
    ]
  },
  {
    title: "Men's Blue Denim Jeans",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736550/oieps1rr9ppmnrll8lc0.jpg",
    price: 1299,
    description: "Classic blue jeans with regular fit",
    rating: 4.5,
    about: "Durable denim, slight fade style, timeless fashion.",
    category: [
      "Men", "men",
      "Pant", "pant", "Pants", "pants",
      "Jean", "jean", "Jeans", "jeans",
      "Denim", "denim"
    ]
  },
  {
    title: "Stretchable Formal Pants",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736601/c56v0m4mqzby5wkv3vjr.jpg",
    price: 1149,
    description: "Office-wear formal pants with premium stretch fabric",
    rating: 4.4,
    about: "Wrinkle-resistant and comfortable for all-day wear.",
    category: [
      "Men", "men",
      "Pant", "pant", "Pants", "pants",
      "Formal", "formal",
      "Stretch", "stretch"
    ]
  },
  {
    title: "Tapered Fit Trousers",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736641/a3ogm2lxizpygriy798w.jpg",
    price: 1049,
    description: "Smart tapered fit men’s trousers",
    rating: 4.2,
    about: "Looks sharp with both formal and semi-casual shirts.",
    category: [
      "Men", "men",
      "Pant", "pant", "Pants", "pants",
      "Trouser", "trouser", "Trousers", "trousers",
      "Tapered", "tapered",
      "Formal", "formal"
    ]
  },
   // Shoes
  {
    title: "Nike Air Max Alpha",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736690/v8la1fvjuek3dvjasuqw.jpg",
    price: 5499,
    description: "Training shoes with breathable upper and stable cushioning.",
    rating: 4.3,
    about: "Designed for tough training sessions, offering breathability and superior traction.",
    category: [
      "Men", "men",
      "Shoe", "shoe", "Shoes", "shoes",
      "Nike", "nike",
      "Sportswear", "sportswear"
    ]
  },
  {
    title: "Adidas Ultraboost 23",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736792/loif7bcqtjrynogr7ufu.jpg",
    price: 9999,
    description: "High-performance running shoes with Boost cushioning.",
    rating: 4.6,
    about: "Delivers energy return with ultra-comfort and grip for long-distance running.",
    category: [
      "Men", "men",
      "Shoe", "shoe", "Shoes", "shoes",
      "Adidas", "adidas",
      "Running", "running"
    ]
  },
  {
    title: "Puma Smash V2",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736848/l7lc62zej54yp0tb3mxe.jpg",
    price: 2999,
    description: "Casual sneakers with clean and timeless design.",
    rating: 4.2,
    about: "Classic court-inspired design for everyday wear and comfort.",
    category: [
      "Men", "men",
      "Shoe", "shoe", "Shoes", "shoes",
      "Puma", "puma",
      "Casual", "casual"
    ]
  },
  {
    title: "Woodland Leather Boots",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736903/eu7gmgguqtzzr8unpray.jpg",
    price: 4499,
    description: "Leather boots built for rugged terrains.",
    rating: 4.4,
    about: "Durable boots for adventurous journeys and trekking.",
    category: [
      "Men", "men",
      "Shoe", "shoe", "Shoes", "shoes",
      "Boot", "boot", "Boots", "boots",
      "Woodland", "woodland",
      "Outdoor", "outdoor"
    ]
  },
  {
    title: "Skechers Go Walk",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736945/ipqxbt6w3uyryfej2e8u.jpg",
    price: 3799,
    description: "Walking shoes with lightweight and responsive cushioning.",
    rating: 4.5,
    about: "Flexible, responsive design ideal for all-day comfort walking.",
    category: [
      "Men", "men",
      "Shoe", "shoe", "Shoes", "shoes",
      "Skechers", "skechers",
      "Comfort", "comfort",
      "Walking", "walking"
    ]
  },
  {
  title: "Under Armour Assert 10",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754829814/ccvczyfoeef23knuffvq.jpg",
    price: 7499,
    description: "Performance running shoes with Charged Cushioning.",
    rating: 4.6,
    about: "Lightweight mesh upper with durable outsole for speed.",
    category: ["Shoes", "shoes", "Shoe", "shoe", "Men", "men", "Running", "running", "Sports", "sports"]
  },


  // T-Shirts
  {
    title: "Levi's Graphic Tee",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754736997/sveq22m1tt0s3ontzhjv.jpg",
    price: 899,
    description: "Crew neck t-shirt with Levi's iconic branding.",
    rating: 4.4,
    about: "100% cotton fabric with modern fit and bold logo design.",
    category: [
      "Men", "men",
      "TShirt", "tShirt", "TShirts", "tshirts",
      "Levi's", "levi's",
      "Casual", "casual"
    ]
  },
  {
    title: "Roadster Solid T-Shirt",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754737034/z1t0l5xxpkumiuwcyrv9.jpg",
    price: 599,
    description: "Solid crew neck tee with minimal design.",
    rating: 4.1,
    about: "Soft cotton material perfect for layering or solo wear.",
    category: [
      "Men", "men",
      "TShirt", "tshirt", "TShirts", "tshirts",
      "Roadster", "roadster",
      "Basic Wear", "basic wear"
    ]
  },
  {
    title: "Hrithik Roshan Sports",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754737097/uupfsumwli23oqrxmg37.jpg",
    price: 749,
    description: "Activewear tee with quick-dry fabric.",
    rating: 4.3,
    about: "Moisture-wicking performance t-shirt for workouts or casual days.",
    category: [
      "Men", "men",
      "TShirt", "tshirt", "TShirts", "tshirts",
      "HRX", "hrx",
      "Activewear", "activewear"
    ]
  },
  {
    title: "Jack & Jones Printed T-Shirt",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754737144/lzi3gq2jeo2dkmhn3doo.jpg",
    price: 1099,
    description: "Modern print tee with slim fit.",
    rating: 4.5,
    about: "Trendy prints on soft cotton for fashion-forward look.",
    category: [
      "Men", "men",
      "TShirt", "tshirt", "TShirts", "tshirts",
      "Jack & Jones", "jack & jones",
      "Fashion", "fashion"
    ]
  },
  {
    title: "U.S. Polo Assn. V-Neck Tee",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754737186/urbiaxpdk5qzotv2gay8.jpg",
    price: 799,
    description: "Elegant V-neck tee with subtle branding.",
    rating: 4.2,
    about: "Stylish and versatile for semi-casual events or layering.",
    category: [
      "Men", "men",
      "TShirt", "tshirt", "TShirts", "tshirts",
      "US Polo", "us polo",
      "Classy Wear", "classy wear"
    ]
  },
   {
    title: "Bewakoof Typography",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754737252/kt0balxz34nfaqjlbynw.jpg",
    price: 499,
    description: "Trendy typography printed t-shirt from Bewakoof.",
    rating: 4.0,
    about: "Cotton-rich, relaxed fit tee ideal for casual days.",
    category: [
      "Men", "men",
      "TShirt", "tshirt", "TShirts", "tshirts",
      "Bewakoof", "bewakoof",
      "Printed", "printed", "Casual", "casual"
    ]
  },
  {
    title: "H&M Slim Fit Cotton T-Shirt",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754737296/jazw6jchnaredmhxezcb.jpg",
    price: 699,
    description: "Slim fit tee with breathable cotton fabric.",
    rating: 4.3,
    about: "Perfect for summer wear with minimal style.",
    category: [
      "Men", "men",
      "TShirt", "tshirt", "TShirts", "tshirts",
      "H&M", "h&m",
      "Slim Fit", "slim fit", "Casual", "casual"
    ]
  },
  {
    title: "Nike Dri-FIT Training T-Shirt",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754737353/fmt62popsxgc4z5b9kps.jpg",
    price: 1299,
    description: "High-performance dri-fit training tee from Nike.",
    rating: 4.6,
    about: "Sweat-wicking, stretchable tee ideal for workouts.",
    category: [
      "Men", "men",
      "TShirt", "tshirt", "TShirts", "tshirts",
      "Nike", "nike",
      "Sportswear", "sportswear", "Training", "training"
    ]
  },
  {
    title: "Superdry Vintage Logo Tee",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754737392/paptqxk7enxorl9lkdxs.jpg",
    price: 1199,
    description: "Superdry classic tee with bold vintage logo.",
    rating: 4.4,
    about: "Soft touch cotton and iconic Superdry branding.",
    category: [
      "Men", "men",
      "TShirt", "tshirt", "TShirts", "tshirts",
      "Superdry", "superdry",
      "Vintage", "vintage", "Casual", "casual"
    ]
  },
  {
    title: "Allen Solly Striped Polo T-Shirt",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754737447/imb1iutrcwsdffqydwso.jpg",
    price: 849,
    description: "Cotton polo with multi-color stripes.",
    rating: 4.2,
    about: "Casual yet polished – ideal for brunch or weekend outings.",
    category: [
      "Men", "men",
      "TShirt", "tshirt", "TShirts", "tshirts",
      "Allen Solly", "allen solly",
      "Polo", "polo", "Striped", "striped", "Smart Casual", "smart casual"
    ]
  },
  
  {
    title: "Prestige Pressure Cooker 5L",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754737510/ir3jsr1j5b49fhqs0jpq.jpg",
    price: 1899,
    description: "Aluminium pressure cooker with precision weight valve.",
    rating: 4.4,
    about: "Ensures faster cooking with energy efficiency. Safety lid lock system included.",
    category: [
      "Kitchen", "kitchen",
      "Cookware", "cookware", "Cookwares", "cookwares",
      "Home", "home",
      "Prestige", "prestige"
    ]
  },
  {
    title: "Philips Mixer Grinder",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754737579/q1swr6fprmdel2zy00x3.jpg",
    price: 2999,
    description: "3-speed mixer grinder with stainless steel jars.",
    rating: 4.2,
    about: "Compact, efficient and perfect for grinding and blending spices or chutneys.",
    category: [
      "Kitchen", "kitchen",
      "Appliance", "appliance", "Appliances", "appliances",
      "Home", "home",
      "Philips", "philips"
    ]
  },
  {
    title: "Pigeon Non-Stick Cookware",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754737656/c3yccgm2pfgttva40qyw.jpg",
    price: 1999,
    description: "Set of 3 non-stick cookware with lids.",
    rating: 4.3,
    about: "High-quality non-stick surface with even heat distribution.",
    category: [
      "Kitchen", "kitchen",
      "Cookware", "cookware", "Cookwares", "cookwares",
      "Home", "home",
      "Pigeon", "pigeon"
    ]
  },
  {
    title: "Wonderchef Nutri-Blend",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754737705/j8vcqatljk7ziclhdtdx.jpg",
    price: 2499,
    description: "Portable blender for smoothies, chutneys and masalas.",
    rating: 4.1,
    about: "Powerful motor and multiple jars make blending and grinding simple.",
    category: [
      "Kitchen", "kitchen",
      "Appliance", "appliance", "Appliances", "appliances",
      "Wonderchef", "wonderchef"
    ]
  },
  {
    title: "Butterfly Smart Gas Stove 2 Burner",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754737780/igilhcqjwb7me32qc44p.jpg",
    price: 2799,
    description: "Toughened glass-top gas stove with 2 burners.",
    rating: 4.0,
    about: "Efficient flame control with sleek modern design for your kitchen.",
    category: [
      "Kitchen", "kitchen",
      "Appliance", "appliance", "Appliances", "appliances",
      "Butterfly", "butterfly"
    ]
  },
  {
    title: "Milton Thermosteel Flask 1L",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754737836/yx3jzhvlck5sau7f9l34.jpg",
    price: 849,
    description: "Double-walled insulated stainless steel bottle.",
    rating: 4.6,
    about: "Keeps drinks hot or cold for 24 hours, perfect for kitchen or travel.",
    category: [
      "Kitchen", "kitchen",
      "Home", "home",
      "Milton", "milton"
    ]
  },
  {
    title: "Cello Plastic Containers Set (12 pcs)",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754737916/qpnv1hbs6okjt7qezi9o.jpg",
    price: 599,
    description: "Airtight plastic containers set for food storage.",
    rating: 4.3,
    about: "Microwave-safe, BPA-free and stackable for organized storage.",
    category: [
      "Kitchen", "kitchen",
      "Storage", "storage", "Storages", "storages",
      "Home", "home",
      "Cello", "cello"
    ]
  },
  {
    title: "Borosil Glass Mixing Bowl Set",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754737956/wjohyjtyhuml9hgr9c85.jpg",
    price: 699,
    description: "Set of 3 borosilicate glass mixing bowls.",
    rating: 4.5,
    about: "Durable and microwave-safe bowls ideal for cooking and storage.",
    category: [
      "Kitchen", "kitchen",
      "Cookware", "cookware", "Cookwares", "cookwares",
      "Borosil", "borosil"
    ]
  },
  {
    title: "Tupperware Chopper Handy",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754738000/z7d2crucc3zwcdl1imrd.jpg",
    price: 349,
    description: "Manual food chopper for vegetables and herbs.",
    rating: 4.4,
    about: "Easy pull-cord mechanism, perfect for daily kitchen tasks.",
    category: [
      "Kitchen", "kitchen",
      "Tool", "tool", "Tools", "tools",
      "Tupperware", "tupperware"
    ]
  },
  {
    title: "Prestige Sandwich Maker",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754738044/q3p0kcffb8uux3gtuvjk.jpg",
    price: 1399,
    description: "Non-stick sandwich toaster for quick breakfast.",
    rating: 4.0,
    about: "Easy to use, with indicator lights and compact design.",
    category: [
      "Kitchen", "kitchen",
      "Appliance", "appliance", "Appliances", "appliances",
      "Prestige", "prestige"
    ]
  },
  {
    title: "Hawkins Frying Pan 26cm",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754738096/a6mimhxv6kg8h5xq76jx.jpg",
    price: 799,
    description: "Non-stick frying pan with cool-touch handle.",
    rating: 4.2,
    about: "Perfect for stir-frying, shallow frying and searing.",
    category: [
      "Kitchen", "kitchen",
      "Cookware", "cookware", "Cookwares", "cookwares",
      "Hawkins", "hawkins"
    ]
  },
  {
    title: "Inalsa Hand Blender 250W",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754738137/ny16r8bc8ljq5ynbzola.jpg",
    price: 999,
    description: "Lightweight and powerful hand blender.",
    rating: 4.1,
    about: "Ideal for soups, sauces, shakes and batters.",
    category: ["Kitchen", "Appliances"]
  },
  
  
  {
    title: "Mamaearth Ubtan FaceWash",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754738262/z0cwvaokmwsop2eyjyvt.jpg",
    price: 299,
    description: "Turmeric and saffron face wash for glowing skin.",
    rating: 4.4,
    about: "Removes tan, brightens skin, and is free from harmful chemicals.",
    category: ["Beauty", "Skincare", "Face Wash"]
  },
  {
    title: "Lakme Eyeconic Kajal",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754738350/ia0edaz1i9g8iwpscebj.jpg",
    price: 210,
    description: "Smudge-proof and waterproof kajal.",
    rating: 4.3,
    about: "Lasts up to 22 hours, suitable for daily use.",
    category: ["Beauty", "Makeup", "Eyes"]
  },
  {
    title: "Bio Cucumber Toner",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754738425/stee0htuhhqigzvnzmbo.jpg",
    price: 175,
    description: "Refreshing toner for pore tightening.",
    rating: 4.2,
    about: "Removes dirt and tightens pores with natural ingredients.",
    category: ["Beauty", "Skincare", "Toner"]
  },
  {
    title: "Nivea Soft Light Moisturiser",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754738464/g9bcrl5humxbpjituetl.jpg",
    price: 285,
    description: "Moisturizer with Vitamin E and jojoba oil.",
    rating: 4.5,
    about: "Non-greasy formula for face, hands, and body.",
    category: ["Beauty", "Skincare", "Moisturizer"]
  },
  {
    title: "Plum Green Tea Day Cream",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754738554/edknolsaiufovvcttm54.jpg",
    price: 470,
    description: "Mattifying moisturizer for oily skin with SPF.",
    rating: 4.4,
    about: "Controls oil and protects from sun damage.",
    category: ["Beauty", "Skincare", "Day Cream"]
  },
  {
    title: " Tea Tree Oil",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754738604/rl49pibcm1jooomvjta2.jpg",
    price: 745,
    description: "Targeted treatment for blemish-prone skin.",
    rating: 4.3,
    about: "Reduces pimples and soothes inflammation naturally.",
    category: ["Beauty", "Skincare", "Oils"]
  },
  {
    title: "Colorbar Velvet Matte Lipstick",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754738647/vqn3ihqbc3tolla8mrvo.png",
    price: 325,
    description: "Long-wearing matte lipstick with creamy texture.",
    rating: 4.2,
    about: "Highly pigmented and hydrating formula for vibrant lips.",
    category: ["Beauty", "Makeup", "Lips"]
  },
  {
    title: "Garnier Micellar Cleansing Water",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754738692/hx4qwsdulwjbh2rptcga.jpg",
    price: 275,
    description: "Makeup remover and skin cleanser in one.",
    rating: 4.6,
    about: "Removes makeup, cleanses skin without rubbing or rinsing.",
    category: ["Beauty", "Skincare", "Cleanser"]
  },
  {
    title: "Wow Skin Science Onion Hair Oil",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754738780/ztgqadrmjtzg6qartcvw.jpg",
    price: 349,
    description: "Reduces hair fall and promotes growth.",
    rating: 4.1,
    about: "Blended with onion black seed oil and almond oil.",
    category: ["Beauty", "Hair Care", "Hair Oil"]
  },
  {
    title: "Tresemme Keratin Smooth Shampoo",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754738832/bkar8xidm27jex6dlofk.jpg",
    price: 499,
    description: "Salon-quality shampoo with keratin and argan oil.",
    rating: 4.5,
    about: "Controls frizz and adds shine to your hair.",
    category: ["Beauty", "Hair Care", "Shampoo"]
  },
   {
    title: "L'Oreal Paris Revitalift Night Cream",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754738181/lfg99opdagvow3w35iel.jpg",
    price: 899,
    description: "Anti-aging night cream with pro-retinol.",
    rating: 4.5,
    about: "Reduces wrinkles and firms skin overnight for a youthful glow.",
    category: ["Beauty", "Skincare", "Night Care"]
  },
  {
    title: "Maybelline Fit Me Matte+Poreless Foundation",
    image: "https://res.cloudinary.com/dnqjvt7yb/image/upload/v1754738225/ispfrn4z849cza69uzjk.jpg",
    price: 549,
    description: "Foundation for normal to oily skin with matte finish.",
    rating: 4.6,
    about: "Blends easily, minimizes pores, and stays fresh all day.",
    category: ["Beauty", "Makeup", "Face"]
  },








];

export default products; 

