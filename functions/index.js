const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")("sk_test_51Klc7QIx0ZhOngyzxhAZMfF6pR3ey9pI4sit2KlGwUOw7jB6gg9k2u5mIfnSaNRFYswaxby5F4ktD9rWcPd43ZEf00BspazeIt");

const app = express();
app.use(cors({origin:true}));
app.use(express.json());

app.get("/",
    (request,response)=>{
        response.status(200).send("Hello From Amazon Cloud")
    }
);

app.post("/payment/create",async (request,response)=>{
    const total = request.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"usd"
    });
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    });
})
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });'

express.api = functions.https.onRequest(app);