export default {
    app: {
        port: process.env.PORT,
    },
    db: {
        connectionString: process.env.MONGO_DB || 'mongodb+srv://maqplan:30376333@tributos.scpjv.mongodb.net/TributosDB?retryWrites=true&w=majority'
    }
}