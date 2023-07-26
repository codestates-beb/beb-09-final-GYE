const express = require('express')
const app = express()
const port = 4000

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

let id = 2;

const signupList = [
  {
    id: 1,
    text: "할일 1",
    done: false,
  }
]

app.get('/api/signup', (req, res ) => {
  res.json(signupList);
})

app.post('/api/signup', (req, res) => {
  const { text, done } = req.body;
  console.log(text);
  signupList.push({
    id: id++,
    text,
    done,
  });
  return res.send("success");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})