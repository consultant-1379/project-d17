package com.ericsson.microservicemanager.app.entities;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;
import java.util.List;


/**
 * Represents all the details about a microservice
 */
@Document("microservices")
public class Microservice {
    @Field("name")
    private String name;
    @Field("category")
    private Category category;
    @Field("engineer")
    private LeadEngineer engineer;
    @Field("description")
    private String description;
    @Field("localDateTime")
    private LocalDateTime localDateTime;
    @Field("versions")
    private List<String> versions;
    @Field("dependencies")
    private List<String> dependencies;

    /**
     * @param name          Name of the microservice
     * @param category      Category of the microservice
     * @param engineer      Name of the lead engineer for the microservice
     * @param description   Short description to describe the microservice
     * @param localDateTime Time that the microservice was created
     * @param versions      Released versions of the microservice
     * @param dependencies  Microservice dependencies that the microservice relies on
     */
    public Microservice(String name, Category category, LeadEngineer engineer, String description,
                        LocalDateTime localDateTime, List<String> versions, List<String> dependencies) {
        this.name = name;
        this.category = category;
        this.engineer = engineer;
        this.description = description;
        this.localDateTime = localDateTime;
        this.versions = versions;
        this.dependencies = dependencies;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public LeadEngineer getEngineer() {
        return engineer;
    }

    public void setEngineer(LeadEngineer engineer) {
        this.engineer = engineer;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getLocalDateTime() {
        return localDateTime;
    }

    public void setLocalDateTime(LocalDateTime localDateTime) {
        this.localDateTime = localDateTime;
    }

    public List<String> getVersions() {
        return versions;
    }

    /**
     * @return A string representing current microservice version
     */
    public String getCurrentVersion() {
        return versions.get(versions.size() - 1);
    }

    /**
     * @param version Adds a version to the internal List of versions
     */
    public void addVersion(String version) {
        versions.add(version);
    }

    public void setVersions(List<String> versions) {
        this.versions = versions;
    }

    public List<String> getDependencies() {
        return dependencies;
    }

    public void setDependencies(List<String> dependencies) {
        this.dependencies = dependencies;
    }

    @Override
    public String toString() {
        return "Microservice{" +
                "name='" + name + '\'' +
                ", category=" + category +
                ", engineer=" + engineer +
                ", description='" + description + '\'' +
                ", localDateTime=" + localDateTime +
                ", versions=" + versions +
                ", dependencies=" + dependencies +
                '}';
    }
}
