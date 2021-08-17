const mongoose = require('mongoose');

const customerInvoiceSchema = new mongoose.Schema({
    createdAt: Date,
    customerId: String,
    invoiceId: String,
});

module.exports = { customerInvoiceSchema }