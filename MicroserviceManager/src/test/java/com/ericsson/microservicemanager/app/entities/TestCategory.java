package com.ericsson.microservicemanager.app.entities;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

class TestCategory {

    @Test
    void TestValues() {
        assertArrayEquals(new Category[]{Category.DATABASE, Category.MESSAGING, Category.APPLICATION},
                Category.values());
    }

    @Test
    void TestValueOf() {
        assertEquals(Category.APPLICATION, Category.valueOf("APPLICATION"));
    }
}