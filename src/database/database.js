import  Sequelize  from "sequelize"

export const sequelize = new Sequelize(
    "railway", // Nombre DB
    "postgres", // Usuario
    "OyEKhbnn2XRDAGVItQvh", // Password
    { 
        host:"containers-us-west-67.railway.app",
        port:"5459",
        dialect: "postgres"
    }
)