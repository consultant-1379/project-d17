package com.ericsson.microservicemanager.app.repositories;

import com.ericsson.microservicemanager.app.entities.Microservice;
import org.springframework.data.mongodb.repository.DeleteQuery;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


/**
 * Interfaces queries to the mongo database
 */
public interface MicroserviceRepository extends MongoRepository<Microservice, String> {

    @Query(value = "{name: :#{#name}}")
    Microservice findByName(@Param("name") String name);

    @Query(value = "{category: :#{#category}}")
    List<Microservice> findByCategory(@Param("category") String category);

    @Query(value = "{dependencies: []}")
    List<Microservice> findNoDependencies();

    @DeleteQuery(value = "{name: :#{#name}}")
    Long deleteByName(@Param("name") String name);
}
