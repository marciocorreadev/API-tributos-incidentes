export default {
    app: {
        port: process.env.PORT || 3000,
    },
    db: {
        connectionString: process.env.MONGO_DB || 'mongodb+srv://maqplan:30376333@tributos.scpjv.mongodb.net/TributosDB?retryWrites=true&w=majority'
    }
}