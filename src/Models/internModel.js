const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const internSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        mobile: {
            type: Number,
            required: true,
            unique: true
        },
        collegeId: {
            type: ObjectId,
            required: true,
            ref: "college"
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    }
)
module.exports = mongoose.model("intern",internSchema)