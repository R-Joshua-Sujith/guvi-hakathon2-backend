const mongoose = require("mongoose")
const OrderSchema = new mongoose.Schema({
    email: { type: String, required: true },
    product_Name: { type: String, required: true },
    quantity: { type: String, required: true },
    price: { type: String, required: true, },
    total_days: { type: String, required: true },
    image: { type: String, required: true },
    payment_id: { type: String, required: true }
})

const OrderModel = mongoose.model("orders", OrderSchema);
module.exports = OrderModel;