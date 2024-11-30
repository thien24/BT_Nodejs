import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const demoSchema = new Schema({
    name: {type: String, required: true},
    password: {type: String},
    email:{type: String, required: true},
    age: {type: Number}
}) 

const Demo = mongoose.model("Demo", demoSchema);
export default Demo;