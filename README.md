# CarCar

Team:

* Person 1 - Which microservice?
* Person 2 - Which microservice?

## Design

## Service microservice

Created models Technician , AutomobileVO and appointment model that has relations with the technician model. As stated in code, if the technician is deleted it , the appointment should be deleted on cascade. Made initial migrations and pushed to branch. Implemented View functions and according urls path for the Appointment model, make right use of the technician foreign key, and assigning in them to the appointments. Created function to handle Api endpoint of features of deleting and updating status of and appointment. Reference of the appointments are the vin numbers that are unique for each car and is the value that helps to filter and/or get specific appointment. All functions implemented on the back end for this microservices as the ability to handle errors. Service microservice polls data every minute from the inventory microservices to keep the list of automobiles update. This should conclude the back-end for the microservice to be used and shown in the front-end. Back-end code has been shaved to have a clean code appearance based on developer knowledge.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
