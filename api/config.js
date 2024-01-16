module.exports = {
    FRONTEND_URL: process.env.FRONTEND_URL || true,  
    DB_USER: process.env.DB_USER || "postgres",
    DB_PASSWORD: process.env.DB_PASSWORD || "admin",
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_NAME: process.env.DB_NAME || "contact_directory_kc_lash",
    DB_PORT: process.env.DB_PORT || 5432,
    PORT: process.env.PORT || 3001,
  };