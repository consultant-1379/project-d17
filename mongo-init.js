// Script that will be run when MongoDB starts
db.createUser(
    {
        user: "user",
        pwd: "pass",
        roles: [
            {
                role: "readWrite",
                db: "MicroserviceManagementDB"
            }
        ]
    }
);
db.createCollection("microservices");
