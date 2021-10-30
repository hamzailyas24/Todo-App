const mongoose = require('mongoose');

module.exports = async () => {
    try {
        
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        };
        
        await mongoose.connect("mongodb://localhost/todo-app", connectionParams);

        console.log('Connected to Database');

    } catch (error) {
        console.log('Could Not Connect to Database.', error);
    }
}