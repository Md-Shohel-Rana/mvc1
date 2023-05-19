const express = require ('express');
const userRouter = require("./routes/users.route");
const productRouter = require("./routes/product.route");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true}));
app.use(userRouter);
app.use(productRouter);





app.use((req,res,next)=>{
    res.status(404).json({
        message: "resource not found",
    });
});


app.listen(PORT, ()=>{
 
    console.log(`server is running at http://localhost:${PORT}`);
});