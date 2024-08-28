package com.ericsson.microservicemanager.app.dto;

import com.ericsson.microservicemanager.app.entities.Category;
import com.ericsson.microservicemanager.app.entities.LeadEngineer;

import java.time.LocalDateTime;
import java.util.List;


/**
 * POJO that represents a simplified version of Microservice, for instantiation through the rest controller
 * without introducing vulnerability associated with instantiating Java bean entities through user controlled data.
 */
public class MicroservicePOJO {
    public String name;
    public Category category;
    public LeadEngineer engineer;
    public String description;
    public LocalDateTime localDateTime;
    public List<String> versions;
    public List<String> dependencies;

    public MicroservicePOJO(String name,
                            Category category,
                            LeadEngineer engineer,
                            String description,
                            LocalDateTime localDateTime,
                            List<String> versions,
                            List<String> dependencies) {
        this.name = name;
        this.category = category;
        this.engineer = engineer;
        this.description = description;
        this.localDateTime = localDateTime;
        this.versions = versions;
        this.dependencies = dependencies;
    }
}
