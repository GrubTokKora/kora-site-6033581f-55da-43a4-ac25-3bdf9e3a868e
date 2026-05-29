// Bheema's — site + menu data (synced from bheemasoh.com/menu)
window.SITE = {
  full: "Bheema's Indian Cuisine & Spirits",
  tagline: "Bold spices. Real recipes. A table worth returning to.",
  address: "6659 Western Row Rd, Mason, OH 45040",
  phone: "(227) 236-2277",
  phoneTel: "+12272362277",
  hoursShort: "Lunch 11:30–2:30 · Dinner 5:30–10",
  hours: [
    { d: "Mon – Thu", t: "11:30a–2:30p · 5:30p–10:00p" },
    { d: "Fri", t: "11:30a–2:30p · 5:30p–11:00p" },
    { d: "Sat", t: "11:30a–3:00p · 5:30p–11:00p" },
    { d: "Sun", t: "11:30a–3:00p · 5:30p–9:30p" },
  ],
  socials: [
    { name: "@bheemas_oh", icon: "instagram", href: "https://www.instagram.com/bheemas_oh/" },
    { name: "Bheema's Mason", icon: "facebook", href: "https://www.facebook.com/p/Bheemas-Indian-Cuisine-Spirits-61569122384849/" },
    { name: "BheemasMason", icon: "youtube", href: "https://www.youtube.com/@BheemasMason" },
  ],
  menuSource: "https://www.bheemasoh.com/menu",
};

window.FAVORITES = [
  { n: "Chicken 65", d: "Crispy, juicy, perfectly spiced — a house favorite.", p: "16.99", veg: false, heat: 3, badge: "Guest Favorite", img: "https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/6033581f-55da-43a4-ac25-3bdf9e3a868e/de8c94d8-887e-4625-825f-ec262dbc28df/1780063682_r507bc.jpg" },
  { n: "Veg Hakka Noodles", d: "Wok-tossed street-style noodles with crisp peppers and scallion.", p: "14.99", veg: true, heat: 1, img: "https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/6033581f-55da-43a4-ac25-3bdf9e3a868e/de8c94d8-887e-4625-825f-ec262dbc28df/1780063703_skrwnd.jpg" },
  { n: "Paneer Tikka Kabab", d: "Tandoor-charred paneer in a bold, aromatic marinade.", p: "16.99", veg: true, heat: 2, img: "https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/6033581f-55da-43a4-ac25-3bdf9e3a868e/de8c94d8-887e-4625-825f-ec262dbc28df/1780063697_zvjerw.jpg" },
];

// 265 items · 12 categories · source: bheemasoh.com/menu
window.MENU = [
  {
    cat: "SOUPS",
    items: [
      {
        n: "Tomato Soup",
        p: "6.99",
        veg: true
      },
      {
        n: "Veg Sweet Corn Soup",
        p: "7.99",
        veg: true
      },
      {
        n: "Veg Hot & Sour Soup",
        p: "7.99",
        veg: true
      },
      {
        n: "Chicken Sweet Corn Soup",
        p: "9.99",
        veg: false
      },
      {
        n: "Chicken Hot & Sour Soup",
        p: "9.99",
        veg: false
      }
    ]
  },
  {
    cat: "APPETIZERS",
    items: [
      {
        n: "Corn Samosa (5)",
        p: "6.99",
        veg: true
      },
      {
        n: "Onion Samosa (5)",
        p: "6.99",
        veg: true
      },
      {
        n: "Samosa (3)",
        p: "7.99",
        veg: true
      },
      {
        n: "Samosa Chat",
        p: "10.99",
        veg: true
      },
      {
        n: "Veg Pakora",
        p: "8.99",
        veg: true
      },
      {
        n: "Onion Pakora",
        p: "8.99",
        veg: true
      },
      {
        n: "Spinach Pakora",
        p: "8.99",
        veg: true
      },
      {
        n: "Kaju Spinach Pakora",
        p: "9.99",
        veg: true
      },
      {
        n: "Cut Mirchi",
        p: "8.99",
        veg: true
      },
      {
        n: "Mirchi Bajji",
        p: "8.99",
        veg: true
      },
      {
        n: "Podi Idly Vepudu",
        p: "10.99",
        veg: true
      },
      {
        n: "Aloo Bonda (4)",
        p: "7.99",
        veg: true
      },
      {
        n: "Veg Cutlet",
        p: "8.99",
        veg: true
      },
      {
        n: "Veg Manchurian",
        p: "14.99",
        veg: true
      },
      {
        n: "Karappodi Gobi",
        p: "14.99",
        veg: true
      },
      {
        n: "Gobi 65",
        p: "14.99",
        veg: true
      },
      {
        n: "Gobi Manchurian",
        p: "14.99",
        veg: true
      },
      {
        n: "Masala Corn Fry",
        p: "8.99",
        veg: true
      },
      {
        n: "Baby Corn 65",
        p: "14.99",
        veg: true
      },
      {
        n: "Baby Corn Manchurian",
        p: "14.99",
        veg: true
      },
      {
        n: "Baby Corn Pepper Fry",
        p: "14.99",
        veg: true
      },
      {
        n: "Bheema's Baby Corn",
        p: "14.99",
        veg: true
      },
      {
        n: "Water Chestnut Manchurian",
        p: "14.99",
        veg: true
      },
      {
        n: "Water Chestnut Pepper Fry",
        p: "14.99",
        veg: true
      },
      {
        n: "Chilli Paneer",
        p: "15.99",
        veg: true
      },
      {
        n: "Karivepaku Paneer",
        p: "15.99",
        veg: true
      },
      {
        n: "Kothimeera Paneer",
        p: "15.99",
        veg: true
      },
      {
        n: "Bheema's Paneer",
        p: "15.99",
        veg: true
      },
      {
        n: "Egg Bonda",
        p: "10.99",
        veg: false
      },
      {
        n: "Omlette",
        p: "10.99",
        veg: false
      },
      {
        n: "Chicken 65",
        p: "16.99",
        veg: false
      },
      {
        n: "Chicken 555",
        p: "16.99",
        veg: false
      },
      {
        n: "Charminar Chicken",
        p: "16.99",
        veg: false
      },
      {
        n: "Chicken - RRR",
        p: "16.99",
        veg: false
      },
      {
        n: "Amaravathi Chicken",
        p: "16.99",
        veg: false
      },
      {
        n: "Dhaba Chicken Appetizer",
        p: "16.99",
        veg: false
      },
      {
        n: "Dhamaka Chicken",
        p: "16.99",
        veg: false
      },
      {
        n: "Thagubothu Kodi Vepudu (Drinker’s chicken)",
        p: "15.99",
        veg: false
      },
      {
        n: "Karaikudi Chicken Roast",
        p: "16.99",
        veg: false
      },
      {
        n: "Karimnagar Kodi Roast",
        p: "16.99",
        veg: false
      },
      {
        n: "Chicken Lollipop - Dry",
        p: "17.99",
        veg: false
      },
      {
        n: "Chicken Lollipop - Wet",
        p: "17.99",
        veg: false
      },
      {
        n: "Chilli Chicken",
        p: "16.99",
        veg: false
      },
      {
        n: "Chicken Majestic",
        p: "16.99",
        veg: false
      },
      {
        n: "Chicken Manchurian",
        p: "16.99",
        veg: false
      },
      {
        n: "Karivepaku Chicken",
        p: "16.99",
        veg: false
      },
      {
        n: "Kothimeera Chicken",
        p: "16.99",
        veg: false
      },
      {
        n: "Pepper Chicken Fry",
        p: "16.99",
        veg: false
      },
      {
        n: "Bell Bottom Chicken (BBC)",
        p: "16.99",
        veg: false
      },
      {
        n: "Goat Sukka - Bone In",
        p: "19.99",
        veg: false
      },
      {
        n: "Lamb Sukka",
        p: "19.99",
        veg: false
      },
      {
        n: "Chilli Fish",
        p: "17.99",
        veg: false
      },
      {
        n: "Apollo Fish",
        p: "17.99",
        veg: false
      },
      {
        n: "Tawa Fish",
        p: "17.99",
        veg: false
      },
      {
        n: "Tawa Pomfret",
        p: "20.99",
        veg: false
      },
      {
        n: "Banana Leaf Pomfret",
        p: "21.99",
        veg: false
      },
      {
        n: "Chilli Shrimp",
        p: "17.99",
        veg: false
      }
    ]
  },
  {
    cat: "TANDOORI",
    items: [
      {
        n: "Tandoori Papad",
        p: "3.99",
        veg: true
      },
      {
        n: "Paneer Tikka Kabab",
        p: "16.99",
        veg: true
      },
      {
        n: "Malai Paneer Tikka Kabab",
        p: "16.99",
        veg: true
      },
      {
        n: "Tandoori Chicken",
        p: "16.99",
        veg: false
      },
      {
        n: "Gongura Tandoori Chicken",
        p: "17.99",
        veg: false
      },
      {
        n: "Chicken Tikka Kabab",
        p: "17.99",
        veg: false
      },
      {
        n: "Malai Chicken Tikka Kabab",
        p: "17.99",
        veg: false
      },
      {
        n: "Tandoori Pomfret",
        p: "20.99",
        veg: false
      },
      {
        n: "Tandoori Shrimp",
        p: "18.99",
        veg: false
      }
    ]
  },
  {
    cat: "SOUTH INDIAN BREAKFAST",
    items: [
      {
        n: "Idly (3)",
        p: "7.99",
        veg: true
      },
      {
        n: "Chilli Idly",
        p: "10.99",
        veg: true
      },
      {
        n: "Sambar Idly",
        p: "10.99",
        veg: true
      },
      {
        n: "Medu Vada (3)",
        p: "9.99",
        veg: true
      },
      {
        n: "Sambar Medu Vada",
        p: "11.99",
        veg: true
      },
      {
        n: "Plain Dosa",
        p: "12.99",
        veg: true
      },
      {
        n: "Onion Dosa",
        p: "13.99",
        veg: true
      },
      {
        n: "Onion Chilli Dosa",
        p: "13.99",
        veg: true
      },
      {
        n: "Karam Dosa",
        p: "13.99",
        veg: true
      },
      {
        n: "Masala Dosa",
        p: "14.99",
        veg: true
      },
      {
        n: "Mysore Masala Dosa",
        p: "15.99",
        veg: true
      },
      {
        n: "Cheese Dosa",
        p: "13.99",
        veg: true
      },
      {
        n: "Kid's Cone Dosa w/ Chocolate Syrup",
        p: "8.99",
        veg: true
      },
      {
        n: "Nutella Dosa",
        p: "9.99",
        veg: true
      },
      {
        n: "Onion Utappam",
        p: "13.99",
        veg: true
      },
      {
        n: "Veg Utappam",
        p: "14.99",
        veg: true
      },
      {
        n: "Poori (3) w/ Bhaji",
        p: "13.99",
        veg: true
      }
    ]
  },
  {
    cat: "INDO CHINESE",
    items: [
      {
        n: "Veg Fried Rice",
        p: "13.99",
        veg: true
      },
      {
        n: "Veg Street Fried Rice",
        p: "13.99",
        veg: true
      },
      {
        n: "Veg Schezwan Fried Rice",
        p: "13.99",
        veg: true
      },
      {
        n: "Veg Street Noodles",
        p: "14.99",
        veg: true
      },
      {
        n: "Veg Hakka Noodles",
        p: "14.99",
        veg: true
      },
      {
        n: "Veg Schezwan Noodles",
        p: "14.99",
        veg: true
      },
      {
        n: "Egg Fried Rice",
        p: "14.99",
        veg: false
      },
      {
        n: "Egg Street Fried Rice",
        p: "14.99",
        veg: false
      },
      {
        n: "Egg Schezwan Fried Rice",
        p: "14.99",
        veg: false
      },
      {
        n: "Chicken Fried Rice",
        p: "15.99",
        veg: false
      },
      {
        n: "Chicken Street Fried Rice",
        p: "15.99",
        veg: false
      },
      {
        n: "Chicken Schezwan Fried Rice",
        p: "15.99",
        veg: false
      },
      {
        n: "Shrimp Fried Rice",
        p: "16.99",
        veg: false
      },
      {
        n: "Shrimp Street Fried Rice",
        p: "16.99",
        veg: false
      },
      {
        n: "Shrimp Schezwan Fried Rice",
        p: "16.99",
        veg: false
      },
      {
        n: "Egg Hakka Noodles",
        p: "15.99",
        veg: false
      },
      {
        n: "Egg Street Noodles",
        p: "15.99",
        veg: false
      },
      {
        n: "Egg Schezwan Noodles",
        p: "15.99",
        veg: false
      },
      {
        n: "Chicken Hakka Noodles",
        p: "16.99",
        veg: false
      },
      {
        n: "Chicken Street Noodles",
        p: "16.99",
        veg: false
      },
      {
        n: "Chicken Schezwan Noodles",
        p: "16.99",
        veg: false
      },
      {
        n: "Shrimp Hakka Noodles",
        p: "17.99",
        veg: false
      },
      {
        n: "Shrimp Street Noodles",
        p: "17.99",
        veg: false
      },
      {
        n: "Shrimp Schezwan Noodles",
        p: "17.99",
        veg: false
      }
    ]
  },
  {
    cat: "PAROTTA / KOTHU PAROTTA",
    items: [
      {
        n: "Chilli Parotta",
        p: "10.99",
        veg: true
      },
      {
        n: "Veg Kothu Parotta",
        p: "14.99",
        veg: true
      },
      {
        n: "Malabar Parotta (2) w/ Veg Salna",
        p: "15.99",
        veg: true
      },
      {
        n: "Egg Kothu Parotta",
        p: "15.99",
        veg: false
      },
      {
        n: "Chicken Kothu Parotta",
        p: "16.99",
        veg: false
      },
      {
        n: "Malabar Parotta (2) w/ Egg Salna",
        p: "16.99",
        veg: false
      },
      {
        n: "Malabar Parotta (2) w/ Chicken Salna",
        p: "17.99",
        veg: false
      },
      {
        n: "Malabar Parotta (2) w/ Goat Salna",
        p: "19.99",
        veg: false
      }
    ]
  },
  {
    cat: "BREADS",
    items: [
      {
        n: "Plain Naan",
        p: "2.99",
        veg: true
      },
      {
        n: "Butter Naan",
        p: "3.99",
        veg: true
      },
      {
        n: "Garlic Naan",
        p: "3.99",
        veg: true
      },
      {
        n: "Bullet Naan",
        p: "3.99",
        veg: true
      },
      {
        n: "Cheese Naan",
        p: "4.99",
        veg: true
      },
      {
        n: "Tandoori Roti",
        p: "3.99",
        veg: true
      },
      {
        n: "Onion Kulcha",
        p: "4.99",
        veg: true
      },
      {
        n: "Paneer Kulcha",
        p: "4.99",
        veg: true
      },
      {
        n: "Parotta (2)",
        p: "4.99",
        veg: true
      },
      {
        n: "Poori (2)",
        p: "4.99",
        veg: true
      }
    ]
  },
  {
    cat: "RICE",
    items: [
      {
        n: "Plain Rice",
        p: "5.99",
        veg: true
      },
      {
        n: "Bagara Rice",
        p: "7.99",
        veg: true
      },
      {
        n: "Dum Rice",
        p: "9.99",
        veg: true
      },
      {
        n: "Kuska - Jeera Samba Rice",
        p: "10.99",
        veg: true
      },
      {
        n: "Sambar Rice w/ Papad",
        p: "12.99",
        veg: true
      }
    ]
  },
  {
    cat: "CURRIES",
    items: [
      {
        n: "Dal Tadka",
        p: "11.99",
        veg: true
      },
      {
        n: "Palak Dal",
        p: "12.99",
        veg: true
      },
      {
        n: "Veg Tikka Masala",
        p: "13.99",
        veg: true
      },
      {
        n: "Kadai Veg",
        p: "13.99",
        veg: true
      },
      {
        n: "Madurai Veg",
        p: "13.99",
        veg: true
      },
      {
        n: "Veg Chettinad",
        p: "13.99",
        veg: true
      },
      {
        n: "Nilgiri Veg",
        p: "13.99",
        veg: true
      },
      {
        n: "Aloo Gobi",
        p: "13.99",
        veg: true
      },
      {
        n: "Chana Masala",
        p: "12.99",
        veg: true
      },
      {
        n: "Baingan Masala",
        p: "14.99",
        veg: true
      },
      {
        n: "Bhindi Masala",
        p: "13.99",
        veg: true
      },
      {
        n: "Bhindi Kaju Fry",
        p: "14.99",
        veg: true
      },
      {
        n: "Tindora Peanut Fry",
        p: "14.99",
        veg: true
      },
      {
        n: "Navratan Korma",
        p: "15.99",
        veg: true
      },
      {
        n: "Malai Kofta",
        p: "15.99",
        veg: true
      },
      {
        n: "Palak Paneer",
        p: "15.99",
        veg: true
      },
      {
        n: "Kadai Paneer",
        p: "15.99",
        veg: true
      },
      {
        n: "Mutter Paneer",
        p: "15.99",
        veg: true
      },
      {
        n: "Paneer Butter Masala",
        p: "15.99",
        veg: true
      },
      {
        n: "Paneer Tikka Masala",
        p: "15.99",
        veg: true
      },
      {
        n: "Methi Chaman",
        p: "15.99",
        veg: true
      },
      {
        n: "Shahi Paneer",
        p: "15.99",
        veg: true
      },
      {
        n: "Madhurai Paneer",
        p: "15.99",
        veg: true
      },
      {
        n: "Paneer Chettinad",
        p: "15.99",
        veg: true
      },
      {
        n: "Nilgiri Paneer",
        p: "15.99",
        veg: true
      },
      {
        n: "Rasam",
        p: "7.99",
        veg: true
      },
      {
        n: "Sambar",
        p: "10.99",
        veg: true
      },
      {
        n: "Egg Burji",
        p: "13.99",
        veg: false
      },
      {
        n: "Egg Masala",
        p: "13.99",
        veg: false
      },
      {
        n: "Egg Tikka Masala",
        p: "13.99",
        veg: false
      },
      {
        n: "Avakaya Chicken Curry",
        p: "15.99",
        veg: false
      },
      {
        n: "Butter Chicken",
        p: "15.99",
        veg: false
      },
      {
        n: "Chicken Chettinad",
        p: "15.99",
        veg: false
      },
      {
        n: "Chicken Korma",
        p: "15.99",
        veg: false
      },
      {
        n: "Chicken Tikka Masala",
        p: "15.99",
        veg: false
      },
      {
        n: "Mango Chicken Tikka Masala",
        p: "15.99",
        veg: false
      },
      {
        n: "Chicken Vindaloo",
        p: "15.99",
        veg: false
      },
      {
        n: "Gongura Chicken Curry",
        p: "15.99",
        veg: false
      },
      {
        n: "Kadai Chicken",
        p: "15.99",
        veg: false
      },
      {
        n: "Kodi Vepudu (Semi Gravy)",
        p: "15.99",
        veg: false
      },
      {
        n: "Madhurai Chicken Curry",
        p: "15.99",
        veg: false
      },
      {
        n: "Madras Chicken Curry",
        p: "15.99",
        veg: false
      },
      {
        n: "Palak Chicken Curry",
        p: "15.99",
        veg: false
      },
      {
        n: "Pepper Chicken Curry",
        p: "15.99",
        veg: false
      },
      {
        n: "Nilgiri Chicken Curry",
        p: "15.99",
        veg: false
      },
      {
        n: "Andhra Veta Mamsam",
        p: "18.99",
        veg: false
      },
      {
        n: "Gongura Goat Curry",
        p: "18.99",
        veg: false
      },
      {
        n: "Madhurai Goat Curry",
        p: "18.99",
        veg: false
      },
      {
        n: "Madras Goat Curry",
        p: "18.99",
        veg: false
      },
      {
        n: "Mirapakaya Mamsam",
        p: "18.99",
        veg: false
      },
      {
        n: "Nilgiri Goat Curry",
        p: "18.99",
        veg: false
      },
      {
        n: "Kadai Lamb",
        p: "19.99",
        veg: false
      },
      {
        n: "Lamb Chettinad",
        p: "19.99",
        veg: false
      },
      {
        n: "Lamb Curry",
        p: "19.99",
        veg: false
      },
      {
        n: "Lamb Korma",
        p: "19.99",
        veg: false
      },
      {
        n: "Lamb Saag",
        p: "19.99",
        veg: false
      },
      {
        n: "Lamb Tikka Masala",
        p: "19.99",
        veg: false
      },
      {
        n: "Lamb Vindaloo",
        p: "19.99",
        veg: false
      },
      {
        n: "Nilgiri Lamb Curry",
        p: "19.99",
        veg: false
      },
      {
        n: "Nellore Chepala Pulusu",
        p: "18.99",
        veg: false
      },
      {
        n: "Shrimp Curry",
        p: "18.99",
        veg: false
      }
    ]
  },
  {
    cat: "BIRYANIS & PULAVS",
    items: [
      {
        n: "Veg Biryani",
        p: "14.99",
        veg: true
      },
      {
        n: "Avakaya Veg Biryani",
        p: "15.99",
        veg: true
      },
      {
        n: "Gongura Veg Biryani",
        p: "15.99",
        veg: true
      },
      {
        n: "Mughlai Veg Biryani",
        p: "15.99",
        veg: true
      },
      {
        n: "Ulavacharu Veg Biryani",
        p: "15.99",
        veg: true
      },
      {
        n: "Vijayawada Veg Biryani",
        p: "15.99",
        veg: true
      },
      {
        n: "Star Veg Biryani",
        p: "15.99",
        veg: true
      },
      {
        n: "Nilgiri Veg Biryani",
        p: "15.99",
        veg: true
      },
      {
        n: "Veg Ghee Roast w/ Jeera Samba Rice",
        p: "16.99",
        veg: true
      },
      {
        n: "Guthi Vankaya Biryani",
        p: "15.99",
        veg: true
      },
      {
        n: "Gongura Paneer Biryani",
        p: "16.99",
        veg: true
      },
      {
        n: "Mughlai Paneer Biryani",
        p: "16.99",
        veg: true
      },
      {
        n: "Ulavacharu Paneer Biryani",
        p: "16.99",
        veg: true
      },
      {
        n: "Vijayawada Paneer Biryani",
        p: "16.99",
        veg: true
      },
      {
        n: "Star Paneer Biryani",
        p: "16.99",
        veg: true
      },
      {
        n: "Nilgiri Paneer Biryani",
        p: "16.99",
        veg: true
      },
      {
        n: "Bheema's Paneer Biryani",
        p: "16.99",
        veg: true
      },
      {
        n: "Paneer Ghee Roast w/ Jeera Samba Rice",
        p: "17.99",
        veg: true
      },
      {
        n: "Egg Biryani",
        p: "15.99",
        veg: false
      },
      {
        n: "Egg Fry Biryani",
        p: "15.99",
        veg: false
      },
      {
        n: "Egg Gongura Biryani",
        p: "15.99",
        veg: false
      },
      {
        n: "Vijayawada Special Egg Biryani",
        p: "15.99",
        veg: false
      },
      {
        n: "Star Egg Biryani",
        p: "15.99",
        veg: false
      },
      {
        n: "Egg Ghee Roast w/ Jeera Samba Rice",
        p: "16.99",
        veg: false
      },
      {
        n: "Avakaya Chicken Biryani",
        p: "15.99",
        veg: false
      },
      {
        n: "Avakaya Boneless Chicken Biryani",
        p: "16.99",
        veg: false
      },
      {
        n: "Bezawada Chicken Fry Piece Biryani",
        p: "16.99",
        veg: false
      },
      {
        n: "Boneless Chicken Biryani",
        p: "16.99",
        veg: false
      },
      {
        n: "Chicken Dum Biryani",
        p: "15.99",
        veg: false
      },
      {
        n: "Chicken Dum Biryani (Family Pack)",
        p: "42.99",
        veg: false
      },
      {
        n: "Vijayawada Special Bone-In Chicken Biryani",
        p: "15.99",
        veg: false
      },
      {
        n: "Vijayawada Special Boneless Chicken Biryani",
        p: "16.99",
        veg: false
      },
      {
        n: "Star Chicken Joint Biryani",
        p: "17.99",
        veg: false
      },
      {
        n: "Chicken Ghee Roast w/ Jeera Samba Rice",
        p: "17.99",
        veg: false
      },
      {
        n: "Gongura Boneless Chicken Biryani",
        p: "16.99",
        veg: false
      },
      {
        n: "Gongura Chicken Biryani",
        p: "15.99",
        veg: false
      },
      {
        n: "Mughlai Chicken Biryani",
        p: "16.99",
        veg: false
      },
      {
        n: "Ulavacharu Chicken Biryani",
        p: "15.99",
        veg: false
      },
      {
        n: "Ulavacharu Boneless Chicken Biryani",
        p: "16.99",
        veg: false
      },
      {
        n: "Nilgiri Chicken Biryani w/ Bagara Rice",
        p: "15.99",
        veg: false
      },
      {
        n: "Bheema's Boneless Chicken Biryani",
        p: "16.99",
        veg: false
      },
      {
        n: "Goat Dum Biryani",
        p: "17.99",
        veg: false
      },
      {
        n: "Goat Dum Biryani (Family Pack)",
        p: "49.99",
        veg: false
      },
      {
        n: "Goat Fry Biryani",
        p: "18.99",
        veg: false
      },
      {
        n: "Goat Ghee Roast w/ Jeera Samba Rice",
        p: "19.99",
        veg: false
      },
      {
        n: "Goat Kheema Biryani",
        p: "18.99",
        veg: false
      },
      {
        n: "Vijayawada Goat Biryani",
        p: "18.99",
        veg: false
      },
      {
        n: "Gongura Goat Biryani",
        p: "18.99",
        veg: false
      },
      {
        n: "Gongura Goat Kheema Biryani",
        p: "18.99",
        veg: false
      },
      {
        n: "Mamsam Roast Biryani",
        p: "18.99",
        veg: false
      },
      {
        n: "Ulavacharu Goat Biryani",
        p: "18.99",
        veg: false
      },
      {
        n: "Nilgiri Goat Biryani w/ Bagara Rice",
        p: "18.99",
        veg: false
      },
      {
        n: "Old City Boneless Lamb Biryani",
        p: "19.99",
        veg: false
      },
      {
        n: "Vijayawada Lamb Biryani",
        p: "19.99",
        veg: false
      },
      {
        n: "Lamb Ghee Roast w/ Jeera Samba Rice",
        p: "20.99",
        veg: false
      },
      {
        n: "Fish Biryani",
        p: "18.99",
        veg: false
      },
      {
        n: "Vijayawada Fish Biryani",
        p: "18.99",
        veg: false
      },
      {
        n: "Shrimp Biryani",
        p: "19.99",
        veg: false
      },
      {
        n: "Shrimp Fry Biryani",
        p: "19.99",
        veg: false
      },
      {
        n: "Vijayawada Shrimp Biryani",
        p: "19.99",
        veg: false
      },
      {
        n: "Shrimp Ghee Roast w/ Jeera Samba Rice",
        p: "20.99",
        veg: false
      }
    ]
  },
  {
    cat: "DESSERTS",
    items: [
      {
        n: "Gulab Jamun (3)",
        p: "4.99",
        veg: true
      },
      {
        n: "Rasmalai (3)",
        p: "5.99",
        veg: true
      },
      {
        n: "Mango Rasmalai (2)",
        p: "5.99",
        veg: true
      }
    ]
  },
  {
    cat: "BEVERAGES",
    items: [
      {
        n: "Coke / Diet Coke / Pepsi / Sprite",
        p: "1.99",
        veg: true
      },
      {
        n: "Thums Up",
        p: "2.99",
        veg: true
      },
      {
        n: "Mango Lassi",
        p: "4.99",
        veg: true
      },
      {
        n: "Chikoo Shake",
        p: "4.99",
        veg: true
      },
      {
        n: "Rose Milk",
        p: "4.99",
        veg: true
      }
    ]
  }
];
