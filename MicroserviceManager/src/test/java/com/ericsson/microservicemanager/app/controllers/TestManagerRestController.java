package com.ericsson.microservicemanager.app.controllers;

import com.ericsson.microservicemanager.app.dto.MicroservicePOJO;
import com.ericsson.microservicemanager.app.entities.Category;
import com.ericsson.microservicemanager.app.entities.LeadEngineer;
import com.ericsson.microservicemanager.app.entities.Microservice;
import com.ericsson.microservicemanager.app.repositories.MicroserviceRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)
@SpringBootTest
class TestManagerRestController {

    @Autowired
    ManagerRestController managerRestController;

    @Mock
    MicroserviceRepository microserviceRepository;
    List<Microservice> microservices;

    @Mock
    Microservice ms1;

    @Mock
    Microservice ms2;


    @BeforeEach
    void Setup() {
        managerRestController.setMicroserviceRepository(microserviceRepository);
    }

    @Test
    void TestGetAllMicroservices() {

        microservices = new ArrayList<>();
        microservices.add(ms1);
        microservices.add(ms2);
        when(microserviceRepository.findAll()).thenReturn(microservices);
        List<Microservice> result = managerRestController.getAllMicroservices();
        assertArrayEquals(microservices.toArray(), result.toArray());
    }

    @Test
    void TestGetMicroservice() {
        when(microserviceRepository.findByName(ms1.getName())).thenReturn(ms1);
        Microservice result = managerRestController.getMicroservice(ms1.getName());
        assertEquals(ms1.getName(), result.getName());
    }

    @Test
    void TestGetByCategory() {
        ArrayList<String> versions = new ArrayList<>();
        ArrayList<String> dependencies = new ArrayList<>();
        microservices = new ArrayList<>();

        microservices.add(new Microservice("ms01",
                Category.APPLICATION,
                new LeadEngineer("Francisco Leite", "X@fonseca.com"),
                "description",
                LocalDateTime.now(),
                versions,
                dependencies));
        microservices.add(new Microservice("ms03",
                Category.APPLICATION,
                new LeadEngineer("Francisco Leite", "X@fonseca.com"),
                "description",
                LocalDateTime.now(),
                versions,
                dependencies));

        when(microserviceRepository.findByCategory(Category.APPLICATION.toString())).thenReturn(microservices);
        List<Microservice> result = managerRestController.getByCategory(Category.APPLICATION.toString());
        assertArrayEquals(microservices.toArray(), result.toArray());
    }

    @Test
    void TestGetNoDependencies() {
        ArrayList<String> versions = new ArrayList<>();
        ArrayList<String> dependencies = new ArrayList<>();
        microservices = new ArrayList<>();

        microservices.add(new Microservice("ms01",
                Category.APPLICATION,
                new LeadEngineer("Francisco Leite", "X@fonseca.com"),
                "description",
                LocalDateTime.now(),
                versions,
                dependencies));
        microservices.add(new Microservice("ms03",
                Category.APPLICATION,
                new LeadEngineer("Francisco Leite", "X@fonseca.com"),
                "description",
                LocalDateTime.now(),
                versions,
                dependencies));

        when(microserviceRepository.findNoDependencies()).thenReturn(microservices);
        List<Microservice> result = managerRestController.getNoDependencies();
        assertArrayEquals(microservices.toArray(), result.toArray());
    }

    @Test
    void TestAddMicroservice() {

        ArrayList<String> versions = new ArrayList<>();
        ArrayList<String> dependencies = new ArrayList<>();

        MockHttpServletRequest request = new MockHttpServletRequest();
        RequestContextHolder.setRequestAttributes(new ServletRequestAttributes(request));
        MicroservicePOJO microservicePOJO = new MicroservicePOJO("ms03",
                Category.APPLICATION,
                new LeadEngineer("Francisco Leite", "X@fonseca.com"),
                "description",
                LocalDateTime.now(),
                versions,
                dependencies);
        ResponseEntity<String> responseEntity = managerRestController.addMicroservice(microservicePOJO);
        Mockito.lenient().when(managerRestController.addMicroservice(microservicePOJO)).thenReturn(responseEntity);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }

    @Test
    void TestAddMicroserviceWithEmptyDate() {

        ArrayList<String> versions = new ArrayList<>();
        ArrayList<String> dependencies = new ArrayList<>();

        MockHttpServletRequest request = new MockHttpServletRequest();
        RequestContextHolder.setRequestAttributes(new ServletRequestAttributes(request));
        MicroservicePOJO microservicePOJO = new MicroservicePOJO("ms03",
                Category.APPLICATION,
                new LeadEngineer("Francisco Leite", "X@fonseca.com"),
                "description",
                null,
                versions,
                dependencies);
        ResponseEntity<String> responseEntity = managerRestController.addMicroservice(microservicePOJO);
        Mockito.lenient().when(managerRestController.addMicroservice(microservicePOJO)).thenReturn(responseEntity);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }

    @Test
    void TestDeleteAll() {
        ArrayList<String> versions = new ArrayList<>();
        ArrayList<String> dependencies = new ArrayList<>();
        microservices = new ArrayList<>();

        microservices.add(new Microservice("ms01",
                Category.APPLICATION,
                new LeadEngineer("Francisco Leite", "X@fonseca.com"),
                "description",
                LocalDateTime.now(),
                versions,
                dependencies));
        microservices.add(new Microservice("ms03",
                Category.APPLICATION,
                new LeadEngineer("Francisco Leite", "X@fonseca.com"),
                "description",
                LocalDateTime.now(),
                versions,
                dependencies));

        managerRestController.deleteAll();
        List<Microservice> result = managerRestController.getAllMicroservices();
        assertEquals(0, result.toArray().length);
    }
    
    @Test
    void TestDeleteByName() {
        ArrayList<String> versions = new ArrayList<>();
        ArrayList<String> dependencies = new ArrayList<>();
        microservices = new ArrayList<>();

        microservices.add(new Microservice("ms01",
                Category.APPLICATION,
                new LeadEngineer("Francisco Leite", "X@fonseca.com"),
                "description",
                LocalDateTime.now(),
                versions,
                dependencies));
        microservices.add(new Microservice("ms03",
                Category.APPLICATION,
                new LeadEngineer("Francisco Leite", "X@fonseca.com"),
                "description",
                LocalDateTime.now(),
                versions,
                dependencies));

        managerRestController.deleteByName("ms01");
        Microservice result = managerRestController.getMicroservice("ms01");
        assertNull(result);
    }
}
