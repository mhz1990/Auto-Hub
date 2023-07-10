# Auto-Hub

Team:

- Matt Hoadley - Sales
- Wilbert Machuca - Services

## Design

## Sales microservice

My approach is to begin by creating models for the data. Next, I'll create view functions and then urls which will allow us to interact with the database and CRUD data as required. After this is complete, I'll create the logic for the polling service. Then I'll begin working on the front-end structure and logic in order to populate data in the React site.

    5 June 2023- Created Salesperson, Sale, and AutomobileVO django models and Sale model with foreign key interaction as well as made initial migration. Started building salespersons views.

    6 June 2023- Completed building salesperson views, and able to create, list, and delete a salesperson. Completed building customer views for create, read, and delete. Created Sale list view.

    7 June 2023- Completed building create and delete sale view with full functionality and interaction between Sale model and Customer, Salesperson, and AutomobileVO models.

    8 June 2023- Together through pair programming, created the following front end javascript/react Inventory components: Automobile List, Automobile Create, Model List, Model Create, Manufacturer List, and Manufacturer Create. All of these pages are fully functional and interactive with full connectivity to the backend. Solo, I began building the following front end javascript components: Sales List and Customer List which are currently displaying properly.

    9 June 2023- Through pair programming, completed all components of the Inventory front end architecture, to include all lists and forms with full functionality and interactivity with the backend. Solo, I created Customer Create and Salesperson Create javascript forms as well as completed the customer, sale, and salesperson list pages. I worked further on all of the sales front end forms but they are not yet usable. Progress will continue as time allows.

    14 June 2023- Corrected handleSubmit functions in CustomerForm.js and SalespeopleForm.js, forms now posting properly from frontend to backend.

    10 July 2023- Updated App.css to add background photo for entire application. Needs still support to scale background size across different device sizes.

## Service microservice

Created models Technician , AutomobileVO and appointment model that has relations with the technician model. As stated in code, if the technician is deleted it , the appointment should be deleted on cascade. Made initial migrations and pushed to branch. Implemented View functions and according urls path for the Appointment model, make right use of the technician foreign key, and assigning in them to the appointments. Created function to handle Api endpoint of features of deleting and updating status of and appointment. Reference of the appointments are the vin numbers that are unique for each car and is the value that helps to filter and/or get specific appointment. All functions implemented on the back end for this microservices as the ability to handle errors. Service microservice polls data every minute from the inventory microservices to keep the list of automobiles update. This should conclude the back-end for the microservice to be used and shown in the front-end. Back-end code has been shaved to have a clean code appearance based on developer knowledge. As group we both implemented front-end development to show the inventory an its lists. This microservices gives the ability in react to interact with the browser, and being able to display List of data based information, such as technician list , automobile list and appointment list. And this browser give you the opportunity to interact with it databases, to the point of adding technicians, deleting them adding appointments thru technicians and unique vehicle VIN.
