import request from 'request';
import express from 'express';
import bodyParser from "body-parser";
import rp from 'request-promise';





var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.listen((process.env.PORT || 5000));


app.get("/", function (req, res) {
	res.send("Hello world")
});	

app.get('/get_payout', (req, res) => {
    var options = {
        uri: "https://api.sandbox.paypal.com/v1/payments/payouts",
        method: "POST",
        auth: {
            'user': 'AdXvnK_chV33XXc4i9vOvspGcMwILu0xwIwndbzOoN_pQwGAffikrN6958h3nUV3VexstvvBLQevhFVZ',
            'pass': 'EFIon930BGsm88onKoPvvo-N7LER1iydZNpNf8FEIUXehUlHZm0BGhu4FfpvpPqceTdar4wq1cAjN-tD'
        },   
        body: {
            sender_batch_header: {
                sender_batch_id: 2014021202 + Math.floor(Math.random() * 1000),
                email_subject: "You have a payout!",
                email_message: "You have received a payout! Thanks for using our service!"
            },
            items: [
                {
                    recipient_type: "EMAIL",
                    amount: {
                        value: 0.01,
                        currency: "USD"
                    },
                    note: "Here are your rewards for reaching the budget goal!",
                    sender_item_id: 201403140001,
                    receiver: "ethanchen1337-buyer@gmail.com"
                },
                {
                    recipient_type: "EMAIL",
                    amount: {
                        value: 0.01,
                        currency: "USD"
                    },
                    note: "Here are your rewards for reaching the budget goal!",
                    sender_item_id: 201403140002,
                    receiver: "testacc_1_2020@gmail.com"
                }
            ]
        },
        json: true
    }    
    // payment happens here
	rp(options)
    .then((res1, err) => {
        // create "trigger" to send transaction to frontend
        res.json({state:'success'});
        // can't link to frontend due to no API to retrieve paypal balance
    })
})



