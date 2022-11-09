const express = require('express');
const app = express();
// const port = 8000;

app.get('/', (req, res) => {
  res.send('<h1>Express Demo App</h1> <h4>Message: Success</h4> <p>Version 1.1</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 100
    },
    {
      productId: '102',
      price: 150
    }
  ])
})



const router=require("./routes/route")

const port=process.env.PORT ||3000;

app.use(express.json());
app.use("/",router)


app.listen(port,()=>{
    console.log(`connection is live at port no.${port}`)
})






app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})