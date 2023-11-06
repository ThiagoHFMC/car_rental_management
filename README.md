# Car Rental Management

This project was developed for the selection process at RentCars. It's an implementation of a CRUD application for managing a car rental company. The application is a full web application with a front-end, back-end, and database. The front-end web page consumes the endpoints of the back-end API and performs operations in the database. It can handle any of the basic CRUD operations: Create, Read, Update, and Delete.

The back-end uses the following technologies:

* Node.js
* Express.js
* Sequelize

The front-end uses the following technologies:

* HTML/CSS
* JavaScript

The only database used is:

* MySQL

### Prerequisites

Your machine must have the following technologies installed:

* NodeJs
* Docker

## Getting Started

To run the project, download it locally and extract it or clone it. After that, you need to install the necessary Node.js dependencies, which are provided in the `package.json` file. The `npm install` command will automatically install all the required packages.

Once that is done, you need to start the execution of the database used in the application. You can do this with the following command:

```bash
mkdir /tmp/mysql-data
docker run --name basic-mysql --rm -v /tmp/mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=ANSKk08aPEDbFjDO -e MYSQL_DATABASE=testing -p 3307:3306 -it mysql:8.0
```

The next step is to start the Node.js server. To do that, you simply need to run the following command:

```
npm run dev
```

This command will run the server in development mode. The application is exposed on port 5000, so after all the dependencies are installed and the code is running, you can access the page to perform CRUD operations at `localhost:5000/home`.

### CRUD Operations

The front-end that consumes the API provides the four CRUD operations: Create, Read, Update, and Delete. For the creation operation, in the front-end, you will have a form to fill in the information, and a button to send that information to the API, which will handle the insertion into the database. This operation is a POST method that makes a request to the endpoint `localhost:5000/api/v1/veiculos`.

For the update operation, the front-end form includes a field for entering the ID, which will indicate which item will have its information updated. Additionally, you can also fill in the information that you want to update through the form. This operation is a PUT method that makes a request to the endpoint `localhost:5000/api/v1/veiculos/id`.

The delete operation also uses the ID field to indicate which item will be removed from the database. In this operation, you do not need to fill in the other fields of the API. This operation is a DELETE method that makes a request to the endpoint `localhost:5000/api/v1/veiculos/id`.

The last operation is the read operation, which requests information about all the items in the database and displays them on the screen. Therefore, there is no need to use the form. This operation is a GET method that makes a request to the endpoint `localhost:5000/api/v1/veiculos`.

All of the above operations have a button through which you can make the request.

## Authors

* **Thiago Frois** - *The entire project* - [ThiagoHFMC](https://github.com/ThiagoHFMC)

## License

This project is licensed under the [GNU General Public License (GPL)](LICENSE.md)  - see the [LICENSE.md](LICENSE.md) file for details