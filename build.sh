#!/bin/bash

# Clean build absolutely everything

cd ./MicroserviceManager/ \
  && mvn clean install \
  && cd .. \
  && docker build -t msm/microservice-manager ./MicroserviceManager/ \
  && docker build -t msm/web-app ./web-app/ \
  && docker build -t msm/db-seed ./db-seed/ \
  && docker-compose build \
  && docker-compose up