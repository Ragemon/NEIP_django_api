
<div align="left">
  <h1>NEIP </h1>
</div>
# django-react-NEIP-project

Freelance project 
## Table of Contents

- [What is NEIP?](#what-makes-saleor-special)
- [Features](#features)
- [Installation](#installation)
- [Documentation](#documentation)
- [Demo](#demo)
- [Contributing](#contributing)
- [Your feedback](#your-feedback)
- [License](#license)

## What is NEIP project?

NEIP project is meant to be an online database for the people who partook in the NEIP program organise by the Ghanaian government. It was developed in react as the frontend library and django as the backend and database in postgresql preferably. 

## Features
- **Dashboard**: User friendly, fast, and productive. 

## Installation
Clone this repository to your local device at:
Note: Project can use django gis module so to be safe use linux based local machine
```https://github.com/Ragemon/NEIP_django_api.git```

Code is in two parts in the following directories: `Config` which is the backend and `frontend` which is obviously the react frontend when you cd into the cloned dir.

System setup
- Backend:

Python's Django handles the models.

  
  1. Create virtual environment
    ````
    - $ pip install virtualenv
    - $ virtualenv env
    - $ source env/bin/activate
    ```
  2. Install requirements.txt
    ```
    - $ cd config
    - $ pip install -r requirements.txt
    ```
  3. Initial migration
    ```
     - $ python manage.py makemigrations
     - $ python manage.py migrate
     - $ python manage.py check
    ```
  4. Create django superuser
    ```
    python manage.py createsuperuser
    ```
    follow the prompt to create super user
