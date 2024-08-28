package com.ericsson.microservicemanager.app.entities;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;
import java.time.Month;
import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class TestMicroservice {
    private Microservice microservice;
    private final String description = "A microservice that provides logging support for " +
            "various different logging libraries.";
    private final ArrayList<String> versions = new ArrayList<>() {{
        add("0.1.0");
        add("0.1.1");
        add("0.1.2");
        add("0.2.5");
        add("1.0.0");
        add("1.0.1");
        add("1.1.0");
    }};

    @BeforeEach
    void Init() {
        // Microservice to be tested
        microservice = new Microservice(
                "Web-app",
                Category.MESSAGING,
                new LeadEngineer("John Smith", "john.smith@gmail.com"),
                description,
                LocalDateTime.of(2019, Month.JANUARY, 17, 16, 30, 12),
                versions,
                createDependencies());
    }

    @Test
    void Constructor() {
        LeadEngineer engineer = new LeadEngineer("Jacob Samuel", "jacob.samuel@gmail.com");
        LocalDateTime localDateTime = LocalDateTime.of(2017, Month.APRIL, 10, 17,
                20, 10);

        Microservice ms = new Microservice(
                "Data-logger",
                Category.DATABASE,
                engineer,
                description,
                localDateTime,
                versions,
                createDependencies());

        assertEquals("Data-logger", ms.getName());
        assertEquals(Category.DATABASE, ms.getCategory());
        assertEquals(engineer, ms.getEngineer());
        assertEquals(description, ms.getDescription());
        assertEquals(localDateTime, ms.getLocalDateTime());
        assertEquals(versions, ms.getVersions());
        assertEquals(createDependencies(), ms.getDependencies());
    }

    @Test
    void TestGetName() {
        assertEquals("Web-app", microservice.getName());
    }

    @Test
    void TestSetName() {
        microservice.setName("DB-logger");
        assertEquals("DB-logger", microservice.getName());
    }

    @Test
    void TestGetCategory() {
        assertEquals(Category.MESSAGING, microservice.getCategory());
    }

    @Test
    void TestSetCategory() {
        microservice.setCategory(Category.DATABASE);
        assertEquals(Category.DATABASE, microservice.getCategory());
    }

    @Test
    void TestGetEngineer() {
        assertEquals("John Smith", microservice.getEngineer().getName());
    }

    @Test
    void TestSetEngineer() {
        microservice.setEngineer(new LeadEngineer("Jack Black", "jack.black@gmail.com"));
        assertTrue(microservice.getEngineer().toString().contains("Jack Black")
                && microservice.getEngineer().toString().contains("jack.black@gmail.com"));
    }

    @Test
    void TestGetDescription() {
        assertEquals(description, microservice.getDescription());
    }

    @Test
    void setDescription() {
        String newDescription = "A microservice that provides database logging support for " +
                "various different logging libraries.";
        microservice.setDescription(newDescription);
        assertEquals(newDescription, microservice.getDescription());
    }

    @Test
    void TestGetLocalDateTime() {
        assertEquals(
                LocalDateTime.of(2019, Month.JANUARY, 17, 16, 30, 12),
                microservice.getLocalDateTime());
    }

    @Test
    void TestSetLocalDateTime() {
        LocalDateTime localDateTime = LocalDateTime.now();
        microservice.setLocalDateTime(localDateTime);
        assertEquals(localDateTime, microservice.getLocalDateTime());
    }

    @Test
    void TestGetVersions() {
        assertEquals(versions, microservice.getVersions());
    }

    @Test
    void TestGetCurrentVersion() {
        assertEquals("1.1.0", microservice.getCurrentVersion());
    }

    @Test
    void TestSetVersions() {
        ArrayList<String> newVersions = new ArrayList<>() {{
            add("1.0.0");
            add("1.2.3");
            add("1.2.4");
        }};
        microservice.setVersions(newVersions);
        assertEquals(newVersions, microservice.getVersions());
    }

    @Test
    void TestGetDependencies() {
        assertEquals("Avatar-generator", microservice.getDependencies().get(0));
        assertEquals("Data-logger", microservice.getDependencies().get(1));
    }

    @Test
    void TestSetDependencies() {
        microservice.setDependencies(new ArrayList<>());
        assertTrue(microservice.getDependencies().isEmpty());
    }

    @Test
    void TestAddVersion() {
        microservice.addVersion("3.0.1");
        assertEquals("3.0.1", microservice.getCurrentVersion());
    }

    @Test
    void TestToString() {
        String service = microservice.toString();
        assertTrue(service.contains(microservice.getName())
                && service.contains(microservice.getDescription())
                && service.contains(microservice.getVersions().toString()));
    }

    /**
     * @return Names that represent mocked microservices
     */
    ArrayList<String> createDependencies() {
        return new ArrayList<>() {{
            add("Avatar-generator");
            add("Data-logger");
        }};
    }
}