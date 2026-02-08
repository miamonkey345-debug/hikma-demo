// content.js
window.SITE = {
  title: "Hikma Cafe",
  brand: "Hikma Cafe",
  

  hero: {
    headline: "Authentic Somali Flavors",
    subhead: "Dine in • Takeout • Fresh daily",
    image: "images/Logo.png",
    meta: "📍33rd St mall"
  },

  about: {
    title: "About Hikma Cafe",
    text: "Hikma Cafe is one of the best up-and-coming Somali restaurants in the St. Cloud area, established in St. Cloud, Minnesota. We strive on our customers daily satisfaction by providing fresh and authentic Somali dishes. Our menu features a variety of traditional Somali meals, including savory stews, flavorful rice dishes, and delicious snacks. Whether you're craving a hearty meal or a quick bite, Hikma Cafe has something for everyone. Join us for a taste of Somalia right here in St. Cloud!"
  },

  menuNote: "All meals are freshly prepared daily. Ask about today’s specials.",

  // ✅ MENU WITH IMAGE SPOTS
  menu: [
    {
      category: "Starters",
      items: [
        {
          name: "Sambusa (3 pcs)",
          desc: "Crispy pastry stuffed with seasoned filling.",
          price: "$6.99",
          image: "images/Logo.png" // ✅ MENU ITEM IMAGE HERE
        },
        {
          name: "Fries",
          desc: "Golden fries with sauce.",
          price: "$4.99",
          image: "images/Logo.png" // ✅ MENU ITEM IMAGE HERE
        }
      ]
    },

    {
      category: "Mains",
      items: [
        {
          name: "Chicken Suqaar",
          desc: "Sautéed chicken with onions, peppers, Somali spices.",
          price: "$13.99",
          image: "images/Logo.png" // ✅ MENU ITEM IMAGE HERE
        },
        {
          name: "Beef Suqaar",
          desc: "Tender beef cubes sautéed with spices and vegetables.",
          price: "$14.99",
          image: "images/Logo.png" // ✅ MENU ITEM IMAGE HERE
        },
        {
          name: "Bariis & Chicken",
          desc: "Somali rice served with flavorful chicken.",
          price: "$15.99",
          image: "images/Logo.png" // ✅ MENU ITEM IMAGE HERE
        },
      ]
    },

    {
      category: "Drinks & Dessert",
      items: [
        {
          name: "Shaah (Somali Tea)",
          desc: "Warm spiced milk tea.",
          price: "$2.99",
          image: "images/Logo.png" // ✅ MENU ITEM IMAGE HERE
        },
        {
          name: "Mango Smoothie",
          desc: "Fresh mango blended smooth.",
          price: "$4.99",
          image: "images/Logo.png" // ✅ MENU ITEM IMAGE HERE
        },
        {
          name: "Avocado MilkShake Smoothie",
          desc: "Fresh avocado blended MIlkshake.",
          price: "$4.99",
          image: "images/Logo.png" // ✅ MENU ITEM IMAGE HERE
        }
      ]
    }
  ],
  // ✅ OPENING HOURS FORMAT [

  hours: [
    { day: "Mon–Thu", time: "10:00 AM – 8:00 PM" },
    { day: "Fri", time: "2:00 PM – 10:00 PM" },
    { day: "Sat", time: "10:00 AM – 8:00 PM" },
    { day: "Sun", time: "10:00 AM – 8:00 PM" }
  ],

  contact: {
    note: "Call ahead for large orders or catering.",
    phone: "(Sample phone number)",
    email: "contact@restaurant.com)",
    address: "3020 W Saint Germain St 56301 St. Cloud, MN",
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/gotlimts.mo/" },
      { label: "TikTok", url: "https://www.tiktok.com/@gotlimitsmo?lang=en" },
      { label: "Facebook", url: "https://www.facebook.com/" }
    ]
  },

  // ✅ GALLERY IMAGE SPOTS TOO
  gallery: [
    "images/Logo.png",
    "images/Logo.png",
    "images/Logo.PNG",
  ],
};
