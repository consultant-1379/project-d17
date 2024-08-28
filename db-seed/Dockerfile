FROM mongo

COPY data.json /data.json
CMD mongoimport --host mongodb --db MicroserviceManagementDB --collection microservices \
 --type json --file /data.json --jsonArray --mode=upsert