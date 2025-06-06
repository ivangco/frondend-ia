require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    openai: {
        apiKey: process.env.OPENAI_API_KEY,
        assistantId: process.env.OPENAI_ASSISTANT_ID || 'pruebas-cu'
    },
    cors: {
        origin: process.env.CORS_ORIGIN || '*'
    }
}; 