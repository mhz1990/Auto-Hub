# CarCar

Team:

* Matt Hoadley - Sales
* Wilbert Machuca - Services

## Design

## Service microservice

Created models Technician , AutomobileVO and appointment model that has relations with the technician model. As stated in code, if the technician is deleted it , the appointment should be deleted on cascade. Made initial migrations and pushed to branch. Implemented View functions and according urls path for the Appointment model, make right use of the technician foreign key, and assigning in them to the appointments. Created function to handle Api endpoint of features of deleting and updating status of and appointment. Reference of the appointments are the vin numbers that are unique for each car and is the value that helps to filter and/or get specific appointment. All functions implemented on the back end for this microservices as the ability to handle errors. Service microservice polls data every minute from the inventory microservices to keep the list of automobiles update. This should conclude the back-end for the microservice to be used and shown in the front-end. Back-end code has been shaved to have a clean code appearance based on developer knowledge.

## Sales microservice

My approach is to begin by creating models for the data. Next, I'll create view functions then urls which will then allow us to interact with the database and crud data as required. After this is complete, I'll create the logic for the polling service. Then I'll begin working on the front-end logic in order to populate data in the React site.

    5 June 2023- Created Salesperson, Sale, and AutomobileVO django models and Sale model with foreign key interaction as well as made initial migration. Started building salespersons views.

    6 June 2023- Completed building salesperson views, and able to create, list, and delete a salesperson. Completed building customer views for create, read, and delete. Created Sale list view.

    7 June 2023- Completed building create sale view with full functionality and interaction between Sale model and Customer, Salesperson, and AutomobileVO models.

