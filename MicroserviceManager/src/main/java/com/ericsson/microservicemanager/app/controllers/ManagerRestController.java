package com.ericsson.microservicemanager.app.controllers;

import com.ericsson.microservicemanager.app.dto.MicroservicePOJO;
import com.ericsson.microservicemanager.app.entities.Microservice;
import com.ericsson.microservicemanager.app.repositories.MicroserviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;


/**
 * Directs and handles all REST requests to the application
 */
@CrossOrigin(origins = {"http://localhost:9090", "http://localhost:8080", "http://mongodb:8080", "http://mongodb:9090"})
@RestController
@RequestMapping("/ms")
public class ManagerRestController {

    @Autowired
    private MicroserviceRepository microserviceRepository;

    /**
     * @return List of all microservices inside the database
     */
    @GetMapping(value = "/", produces = {"application/json"})
    public List<Microservice> getAllMicroservices() {
        return microserviceRepository.findAll();
    }

    /**
     * @param name Name of the microservice
     * @return The microservice object if it was found, otherwise null
     */
    @GetMapping(value = "/name/{name}", produces = {"application/json"})
    public Microservice getMicroservice(@PathVariable String name) {
        return microserviceRepository.findByName(name);
    }

    /**
     * @param category String representation of the category to search for
     * @return List of all microservices matching the category
     */
    @GetMapping(value = "/category/{category}", produces = {"application/json"})
    public List<Microservice> getByCategory(@PathVariable String category) {
        return microserviceRepository.findByCategory(category.toUpperCase());
    }

    /**
     * @return All microservices that do not have dependencies
     */
    @GetMapping(value = "/no-dependencies", produces = {"application/json"})
    public List<Microservice> getNoDependencies() {
        return microserviceRepository.findNoDependencies();
    }

    /**
     * @param microservice The microservice object data to be added
     * @return Basic response entity, "200 OK" on success
     */
    @PostMapping(consumes = {"application/json"}, produces = {"application/json"})
    public ResponseEntity<String> addMicroservice(@RequestBody MicroservicePOJO microservice) {

        microserviceRepository.insert(new Microservice(
                microservice.name,
                microservice.category,
                microservice.engineer,
                microservice.description,
                // If there was no time added in the entry
                (microservice.localDateTime == null)
                        ? LocalDateTime.now() : microservice.localDateTime,
                microservice.versions,
                microservice.dependencies
        ));

        return ResponseEntity.ok().build();
    }

    /**
     * Deletes all microservices data inside the database
     */
    @DeleteMapping(value = "/delete")
    public void deleteAll() {
        microserviceRepository.deleteAll();
    }

    /**
     * @param name Delete from the database by name
     */
    @DeleteMapping(value = "/delete/{name}")
    public void deleteByName(@PathVariable String name) {
        microserviceRepository.deleteByName(name);
    }

    /**
     * @param microserviceRepository The new repository to substitute in
     */
    public void setMicroserviceRepository(MicroserviceRepository microserviceRepository) {
        this.microserviceRepository = microserviceRepository;
    }
}
