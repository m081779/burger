# Eat-Da-Burger!

This is an Express burger logging app with a MySQL database.  All queries are handled by a homemade ORM. Users can type in burgers they would like to add, or add burgers via the Annyang voice recognition module.  Burgers may be "devoured", which will move them to the other side of the screen.

## [Click Here](https://eat-da-burger-map.herokuapp.com/) to see the deployed version.

## Technologies used:
* Node JS
* Express JS
* MySQL
* Annyang voice recognition
* Homemade ORM
* Handlebars
* AJAX/JSON
* ES6 syntax
* HTML5
* CSS3
* google fonts


## Users can type burgers they would like to add into the speech bubble, or add burgers via the Annyang voice recognition module:
![image of the landing page](https://github.com/m081779/burger/blob/master/public/assets/img/img3.png)



## Inputs that contain special characters other than spaces, numbers, apostrophes, and dashes are rejected::
![image of the landing page](https://github.com/m081779/burger/blob/master/public/assets/img/img2.png)





## Once submitted they are added to the page and stored in the database:
![image of the landing page](https://github.com/m081779/burger/blob/master/public/assets/img/img4.png)




## Users can click the "Devour me" button, and it will change the burger's state in the database and move it to the devoured column:
![image of the landing page](https://github.com/m081779/burger/blob/master/public/assets/img/img5.png)