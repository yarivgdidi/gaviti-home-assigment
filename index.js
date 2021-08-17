const express = require('express');
const bodyParser = require('body-parser');
const { db } = require('./db')
const { CustomerInvoice } = require('./db/model')

const app = express();
app.use(bodyParser.json());

app.post('/search', async (req, res) => {
    const {startDate, endDate} = req.body
    const invoices = CustomerInvoice.find({ }).exec((err, invoices) => {
        if(err) {
            res.status(500).send(err )
        } else {
            res.send({data: invoices})
        }
    })

})

app.listen(3000, ()=> {
    console.log('Listening on port 3000' );
})