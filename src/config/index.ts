export default {
    app: {
        port: process.env.PORT,
    },
    db: {
        connectionString: process.env.MONGO_DB
    }
}