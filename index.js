const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello sir okkkkkkkkkkkkkk");
});

const users = [
  { id: 1, name: " asik", job: "frelancer", email: "asik@gmail.com" },
  { id: 2, name: " sumon", job: "frelancer", email: "sunon@gmail.com " },
  { id: 3, name: " palash", job: "frelancer", email: "palash@gmail.com" },
  { id: 4, name: " sazu", job: "frelancer", email: "sazu@gmail.com" },
  { id: 5, name: " hasu", job: "frelancer", email: "hasu@gmail.com  " },
  { id: 6, name: " sakib", job: "frelancer", email: "sakib@gmail.com" },
];

app.get("/users", (req, res) => {
         if(req.query.name){
            
             const search =req.query.name.toLowerCase()
             const match = users.filter(user=>user.name.toLowerCase().includes(search));
             res.send(match);
         }
         else{
             res.send(users)
         }
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});
app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "orange"]);
});
app.post('/user', (req, res)=>{
      const user = req.body;
      user.id = users.length + 1;
      users.push(user);
      res.send(user);
    res.json("post success");
})

app.listen(port, () => {
  console.log("listion to piort", port);
});
