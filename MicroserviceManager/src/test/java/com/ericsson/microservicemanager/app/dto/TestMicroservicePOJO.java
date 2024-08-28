package com.ericsson.microservicemanager.app.dto;

import com.ericsson.microservicemanager.app.entities.Category;
import com.ericsson.microservicemanager.app.entities.LeadEngineer;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class TestMicroservicePOJO {

    // Object to be tested
    MicroservicePOJO microservicePOJO;
    LeadEngineer leadEngineer = new LeadEngineer("John Smith", "john.smith@gmail.com");

    List<String> versions = new ArrayList<>() {{
        add("1.0.0");
        add("1.0.2");
        add("1.0.4");
    }};

    @BeforeEach
    void Init() {
        microservicePOJO = new MicroservicePOJO(
                "Web-app",
                Category.MESSAGING,
                leadEngineer,
                "My new webapp microservice",
                LocalDateTime.of(2019, Month.JANUARY, 17, 16, 30, 12),
                versions,
                new ArrayList<>() {{
                    add("DB-Logger");
                }}
        );
    }

    @Test
    void TestMemberVariables() {
        assertEquals("Web-app", microservicePOJO.name);
        assertEquals(Category.MESSAGING, microservicePOJO.category);
        assertEquals(leadEngineer, microservicePOJO.engineer);
        assertEquals("My new webapp microservice", microservicePOJO.description);
        assertEquals(LocalDateTime.of(2019, Month.JANUARY, 17, 16, 30, 12),
                microservicePOJO.localDateTime);
        assertEquals(versions, microservicePOJO.versions);
        assertEquals("DB-Logger", microservicePOJO.dependencies.get(0));
    }
}