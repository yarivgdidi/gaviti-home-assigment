const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment')
const uuid = require('uuid');
const fs = require('fs');
const { db } = require('./db')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
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
        const fileId = uuid.v4()
        const csvres = await writeCsv(invoices, fileId)
        res.send({data: `http://localhost:3000/downlaod/${fileId}`})

    } catch (err) {
        res.status(500).send(`Server Error: ${err.message}`);
    }
})
app.get('/downlaod/:fileId', async (req, res) => {
    try {
        const { fileId } = req.params;
        const file = `public/results-${fileId}.csv`;
        res.download(file)
    } catch (err) {
        console.log(err)
        res.status(500).send(`Server Error: ${err.message}`);
    }
})

const writeCsv = async (data, uuid) => {
    const csvWriter = createCsvWriter({
        path: `public/results-${uuid}.csv`,
        header: [
            {id: 'customerId', title: 'Customer Id'},
            {id: 'invoiceId', title: 'Invoice Id'},
            {id: 'created_at', title: 'Created At'},
        ]
    });
    return await csvWriter.writeRecords(data)

}
app.listen(3000, ()=> {
    console.log('Listening on port 3000' );
})