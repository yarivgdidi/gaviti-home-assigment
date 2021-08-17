const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment')
const { db } = require('./db')
const { CustomerInvoice } = require('./db/model')

const app = express();
app.use(bodyParser.json());

app.post('/search', async (req, res) => {
    const {startDate = '' , endDate = ''} = req.body
    try {
        const start = moment(startDate).valueOf()
        const end = moment(endDate).valueOf()
        const invoices = await CustomerInvoice.
        find(
            {
                    created_at : {
                        $gte: start,
                        $lt: end
                    }
        })
        res.send({data: invoices})
    } catch (err) {
        res.status(500).send('Server Error');
    }
})

app.listen(3000, ()=> {
    console.log('Listening on port 3000' );
})