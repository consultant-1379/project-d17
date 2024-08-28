package com.ericsson.microservicemanager.app.entities;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class TestLeadEngineer {
    private LeadEngineer engineer;

    @BeforeEach
    void Init() {
        engineer = new LeadEngineer("Tom Smith", "tom.smith@gmail.com");
    }

    @Test
    void TestGetName() {
        assertEquals("Tom Smith", engineer.getName());
    }

    @Test
    void TestSetName() {
        engineer.setName("Jill Black");
        assertEquals("Jill Black", engineer.getName());
    }

    @Test
    void TestGetEmail() {
        assertEquals("tom.smith@gmail.com", engineer.getEmail());
    }

    @Test
    void TestSetEmail() {
        engineer.setEmail("jill.black@gmail.com");
        assertEquals("jill.black@gmail.com", engineer.getEmail());
    }

    @Test
    void TestToString() {
        String engineerString = engineer.toString();
        assertTrue(engineerString.contains(engineer.getName())
                && engineerString.contains(engineer.getEmail()));
    }
}