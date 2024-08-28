package com.ericsson.microservicemanager.app;

import com.ericsson.microservicemanager.MicroserviceManagerApplication;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

class TestMicroserviceManagerApplication {

    @Test
    void TestApplicationMain() {
        String[] args = {"main.exe"};

        assertDoesNotThrow(() -> MicroserviceManagerApplication.main(args));
    }
}
