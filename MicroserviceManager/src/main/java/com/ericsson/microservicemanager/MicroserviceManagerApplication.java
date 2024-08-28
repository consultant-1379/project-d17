package com.ericsson.microservicemanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


/**
 * Main class
 */
@SpringBootApplication
public class MicroserviceManagerApplication {

    /**
     * Application entry point
     *
     * @param args Unused
     */
    public static void main(String[] args) {
        SpringApplication.run(MicroserviceManagerApplication.class, args);
    }
}
