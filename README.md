# HospitalApi


# Intro
Design the server side for a hospital API .
An API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients .
There can be 2 types of Users:Doctors and Patients.
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
- Register the patient in the app 
- After the checkup, create a Report doctor
- Status can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit]


# 1. DoctersApi
Docters can register by username and password .
Docters can login (returns the JWT to be used) .
Docters can create a patient report .


# 2. PatientsApi
Patients can be register by the docters .
Patients report created by the docters .
We can view the list all the reports of a patient oldest to latest .


# 3. ReportsApi
List all the reports of all the patients filtered by a specific status .
