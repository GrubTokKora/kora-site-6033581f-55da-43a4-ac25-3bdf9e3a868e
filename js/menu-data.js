// Bheema's — site details and the guest-favorite cards. The menu itself is drawn by Kora from the site's
// menu data into the kora:data:menu region in index.html.
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
