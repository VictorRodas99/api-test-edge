<div align="center">

# REST API example ⚡

<h3 style="font-style: italic">A basic implementation of a REST API that does a simple <a href="https://es.wikipedia.org/wiki/CRUD">CRUD</a> for data about training and workouts</h3>
 
<hr>

</div>

## Requirements to run the project 🔍
- [NodeJS](https://nodejs.org/es/): Runtime environment
- [MySQL](https://www.mysql.com/): Database management system

## Postman collection of the API 📘
[Here!](https://elements.getpostman.com/redirect?entityId=24977726-c4cfbb33-0b2d-48b1-ade0-46a249a32983&entityType=collection)

## Steps to run the project 🚀
1. Clone the repository

```bash
git clone https://github.com/VictorRodas99/api-test-edge.git
```

2. Enter in the folder

```bash
cd api-test-edge
```

3. Create and .env file in the root directory

__It must contain this data inside the .env file__

```
DB_PASSWORD="<your_mysql_password>"
SECRET="<secret_token_for_jwt>"
```

**The secret can be any random character**

4. Start the mysql server

**For linux** 🐧

```bash
sudo service mysql start
```

**For windows** 💣 (replace mysql version with yours)

```cmd
"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqld.exe"
```

5. Open the mysql cli and create the database

```
mysql -u <user> -p
```

```sql
CREATE DATABASE test_edge;
```

5. Install dependencies

```bash
npm install
```

6. Run the server

```bash
npm start
```

__It will start server in:__ http://localhost:8000

## Swagger (Documentation) 📑
To see the entire documentation of the endpoints: http://localhost:8000/api/docs