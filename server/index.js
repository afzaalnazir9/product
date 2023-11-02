const express = require("express");
const app = express();
var cors = require("cors");

const port = 3001;

const productData = {
  name: "elevon aow04 PRO",
  price: 390.0,
  productDetails: [
    {
      title: "Elegant sleek Design",
      description:
        "The Elevon Water Flosser isn't merely functional; its sleek and sophisticated design suits any bathroom setting, merging top-tier oral care with a touch of class",
    },
    {
      title: "Adjustable water pressure",
      description:
        "Enjoy personalised comfort with our adjustable water pressure feature. Find the perfect setting, be it a gentle stream or a powerful flow, for a tailored and effective experience",
    },
    {
      title: "Larger water capacity no refills",
      description:
        "With its ample 1000ml water capacity, you can enjoy uninterrupted use without the need for frequent top-ups. Say goodbye to interruptions and concentrate on the heart of your routine",
    },
    {
      title: "Storage for multiple tips",
      description:
        "The Elevon Water Flosser provides a sleek storage solution for multiple water jet tips. Switch between tips with ease and keep everything neat, ensuring a smooth and bespoke flossing session every time",
    },
  ],
  image:
    "https://res.cloudinary.com/dyrxka2lb/image/upload/v1698879490/productimage-removebg-preview_jyycsf.png",
};

app.use(
  cors({
    origin: "*",
  })
);

app.get("/api/product", (req, res) => {
  res.json(productData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
