import { Router } from "express";

const route = Router();

export default (app) =>{

  let id = 2;
  const signupList = [
    {
      id: 1,
      email: "할일",
      password: "123412",
      nickname: "nada",
    }
  ];
  
  app.use('/auth', route);

  app.get('/signup', (req, res ) => {
    res.json(signupList);
  })

  route.post('/signup', async (req, res) =>{
    const { email, password, nickname } = req.body;
    console.log(req.body);
    
    signupList.push({
      id: id++,
      email,
      password,
      nickname,
    });
    return res.status(200).json({ success: true });
  })
  
}

