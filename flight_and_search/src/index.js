const express=require("express");
const bodyparser= require("body-parser");

const{PORT}= require('./config/serverconfig');

const setupAndStartServer = async() => {
    
    //create the express object
    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));
    
    app.listen(PORT, () => {
        console.log(`server started at ${PORT}`);
        
    })

}

setupAndStartServer();