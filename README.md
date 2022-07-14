# Tutor-Finder
Tutor Finder is a web-application to help find tutors for courses of higher difficulty.

## Description
This application can be run to allow students to search by subject or by a specific tutor to find a tutor they would like. <br />
Tutors can sign up for the service and accept or decline new students as needed. <br />
Once accepted a student and a tutor are put together to find a time for tutoring, and payment is made. <br />
Students who do not find their subject can recommend a subject they would like to see implemented and it can be added. <br />

## Installation
Copy the code clone HTTPS. <br />
Use the git command for clone to clone the project to your system.
```bash
git clone XXXXXX
```
XXXXXX is the pasted HTTPS from previous steps. <br />
Use the package manager [pip](https://pip.pypa.io/en/stable/) to install flask.
```bash
npm install
```

## Run locally
```bash
npm run serve
```

## Contributing
Pull requests are welcome. For major changes, ensure discussion with the team prior to making changes. <br /> <br />

Ensure to update test cases as needed.
<br />
# Release Notes 1.0
## 06/23/2022
## New Features
* **Working Web-App home page** - A web-app which users can go to when hosted on a server.
* **Working top-nav-bar** The top nav-bar functions to bring user to a new page and allows quick and easy use of the site.

## Description
This is an initial representation of the code. It is the web-app which will become the application we will be using. Current functionality is the ability to traverse through multiple pages in order to get to different sections of the site. We will be filling out the abilities and functionality of the site, and will be making the web-app have more appealing visuals at a later point.
## Focus of Release
Our main focus at this release was to have functionality of the web-app between itself and other pages. As such, much of the visuals has been left to a later point at which we will be able to improve those.

# Release Notes 2.0
## 07/14/2022
## New Features
* **Seperation between FrontEnd and BackEnd** - The backend of the system has been removed and seperated into its own repository.
* **Test Cases** - Test Cases have been added to ensure the functionality of the different methods in the frontend. All test cases currently are passed, and are set for continuous run to ensure new changes continue to pass.
* **Ability to Add and View Courses Functionality has been added** - Users can now Add courses they want tutoring for and are able to view all courses.

## Description
This has added the needed functionality to add different courses to be able to find tutors for and to be able to view all courses that have been added. We also were able to add test cases for the frontend of the system while moving the backend for better focus. This allowed us to use Heroku as well for our service.

## Focus of Release
The focus for this release was in moving the backend, and adding the functionality to the course portion of the webapp. We are still able to improve visuals at a later stage, but this release allowed us to really show more functionality to the application that wasn't present previously. Our next focus will be to allow users to select to join courses for both tutoring and being a tutor along with ensuring tests are conducted as needed.
