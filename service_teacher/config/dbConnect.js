import mongoose from "mongoose"


mongoose.connect("mongodb://mongodb/scholl").then(() => {
    console.log("conectado")
}).catch((err) => {
    console.log("não conectou ao mongo: " + err)
})


let db = mongoose.connection;

export default db;


