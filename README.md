# JK-tech_assignment
# This assignment written in Nodejs/Javascript

# Database mysql

#  git clone https://github.com/vimalk179/JK-tech_assignment.git
# npm install or yarn install

# create mysql data base jktech with user : admin and password : admin
# two schema/table needed for the same 

# CREATE TABLE buckets (
#   id INT AUTO_INCREMENT PRIMARY KEY,
#   name VARCHAR(255) NOT NULL,
#   user_id INT NOT NULL
# );

# CREATE TABLE files (
#   id INT AUTO_INCREMENT PRIMARY KEY,
#   name VARCHAR(255) NOT NULL,
#   url VARCHAR(255) NOT NULL,
#   bucket_id INT NOT NULL,
#   FOREIGN KEY (bucket_id) REFERENCES buckets(id)
# );

# To start the application : npm run dev

# Swagger UI GUI : http://localhost:8080/api-docs/

