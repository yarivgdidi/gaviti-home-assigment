const mongoose = require("mongoose");
const { customerInvoiceSchema } = require('./customerInvoice')

const CustomerInvoice = mongoose.model('CustomerInvoice', customerInvoiceSchema )
module.exports = {
    CustomerInvoice
}

