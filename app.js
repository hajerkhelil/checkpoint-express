
const express= require('express');
const app=express();

const date= new Date();
const day= date.getDay();
const hours= date.getHours();
const midlleware= (req, res, next)=>{
    if (day >=1 && day<= 5 && hours>= 9 && hours< 18)
    {
        next();
    }else{
        res.send("serverclose")
    }
};

app.use(midlleware);


app.get("/", (req,res)=>{
    res.sendFile(__dirname+'/public/Home.html')
})


app.get("/contactus", (req,res)=>{
    res.sendFile(__dirname+'/public/contactus.html')
});


app.get("/services", (req,res)=>{
    res.sendFile(__dirname+'/public/services.html')
});

app.get("/style.css", (req,res)=>{
    res.sendFile(__dirname+'/public/style.css')
});

app.use((req,res) => {
    res.status(404).render("404");
})
const port = 5000
app.listen(port,() => console.log (`server is running on the port  ${port}` ));
