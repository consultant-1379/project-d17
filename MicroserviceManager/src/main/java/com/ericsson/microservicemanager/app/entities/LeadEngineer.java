package com.ericsson.microservicemanager.app.entities;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


/**
 * Represents the lead engineer of a microservice
 */
@Document("engineers")
public class LeadEngineer {
    @Field("name")
    private String name;
    @Field("email")
    private String email;

    /**
     * @param name Name of the lead engineer
     * @param email Email of the lead engineer
     */
    public LeadEngineer(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "LeadEngineer{" + "name='" + name + '\'' + ", email='" + email + '\'' + '}';
    }
}
