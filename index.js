import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


const Blogs = [
    { id: 1, title:  "Beyond the Basics: Discovering Unique Smoothie Bases for Every Mood", link: "/basics", content: "Here’s a guide to unique fruit-based smoothie blends that explore unconventional bases and cater to every mood,", comment: [] },
    { id: 2, title: "Beyond Liquid: Experimenting with Frozen, Gel, and Puree Smoothie Bases", link: "/beyond-liquid", content: "When it comes to smoothies, most of us think of using liquid bases like milk, water, or juice. ", comment: [] },
    { id: 3, title: "Which Smoothie Base is Right for You? A Guide to Customizing Your Blend", link: "/customizing", content: "Here’s a guide to help you choose the perfect smoothie base for your needs and mood. ", comment: [] },
    { id: 4, title: "The Great Smoothie Debate: Milk, Juice, or Something New?", link: "/debate", content: "When it comes to making the perfect smoothie ", comment: [] },
    { id: 5, title: "Eco-Friendly Smoothie Bases You Can Make at Home", link: "/Eco-friendly", content: " In the world of smoothie-making, the base is where it all begins.", comment: [] },
    { id: 6, title: "One Base, Endless Smoothies: Experimenting with Milk-Based Smoothies", link: "/endless", content: "Milk-based smoothies are a classic go-to for smoothie lovers everywhere, ", comment: [] },
    { id: 7, title: "Juice it Up! How Fruit, Vegetable, and Exotic Juices Change Your Smoothie Game", link: "/juice-it-up", content: " Adding juices to your smoothies brings a whole new level of flavor,", comment: [] },
    { id: 8, title: "Tea to Tofu: The Most Unusual Smoothie Bases You’ve Never Thought Of", link: "/unusual", content: " If you're ready to move beyond the basics and truly experiment with your smoothie recipes,", comment: [] },
];
app.get("/", (req, res) => {
  res.render("index.ejs", {Blogs});
});

app.get("/basics", (req, res) => {
    Blogs.comments = Blogs.comments || [];
  res.render("basics.ejs", {Blogs});
});

app.get("/beyond-liquid", (req, res) => {
    Blogs.comments = Blogs.comments || [];
  res.render("beyond-liquid.ejs",{Blogs} );
});

app.get("/customizing", (req, res) => {
    Blogs.comments = Blogs.comments || [];
    res.render("customizing.ejs", {Blogs});
});

app.get("/debate", (req, res) => {
    Blogs.comments = Blogs.comments || [];
    res.render("debate.ejs", {Blogs});
});

app.get("/Eco-friendly", (req, res) => {
    Blogs.comments = Blogs.comments || []; 
    res.render("Eco-friendly.ejs", {Blogs});
});

app.get("/endless", (req, res) => {
    Blogs.comments = Blogs.comments || [];
    res.render("endless.ejs",{Blogs} );
});

app.get("/juice-it-up", (req, res) => {
    Blogs.comments = Blogs.comments || [];
    res.render("juice-it-up.ejs", {Blogs});
});

app.get("/unusual", (req, res) => {
    Blogs.comments = Blogs.comments || [];
    res.render("unusual.ejs", {Blogs});
});

app.post("/post/:id/comment", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = Blogs.find(p => p.id === postId);
    if (post) {
      const comment = req.body.comment;
      Blogs.comments.push(comment);
      console.log(`New comment on post ${postId}: ${comment}`);
      res.redirect(`/post/${postId}`);
    } else {
      res.status(404).send("Post not found");
    }
  });
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});