const {
    Schema,
    model
} = require("mongoose")

const schema = new Schema({
    title: {
        type: String,
        // esli net ni kakogo title, to dannaja model ne mozhet bit sozdana
        required: true
        // pole id ne nuzhen, sozdajotsia po umolchaniju
    },

    completed: {
        type: Boolean,
        // esli mi sozdali todoshko to ona eshe ne zavershena
        default: false
    }

})
// nazvanie modeli Todo, 2 - parametr schema po kotoroi neobxodimo sformirovat dannuju model 
module.exports = model('Todo', schema)