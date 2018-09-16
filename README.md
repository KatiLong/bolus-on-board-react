## "B.O.B." | Fullstack React Capstone
This repository is the Front-End - React version - and connects with the Server Side repository built in Node. For the Server Side, got to: https://github.com/KatiLong/bolus-on-board

BOB - aka Bolus on Board - is designed for users that take Multiple Daily Injections (MDI) of insulin. It is meant to fill the gap for those that do not have access to insulin pumps or who prefer MDIs. It allows the User to input and track a number of Diabetic factors including: insulin on board (for multiple types of insulin), time of Basal Injection, and Blood Glucose readings. It also has the option to sync with a user's Dexcom account. This application is designed to help those with T1D track all the many aspects of the disease that are impossible to track from memory.

## About this project
BOB is built as a capstone project for Thinkful.

This Project was Bootstrapped with Create React App.

I am the sole developer for this project.

## Diabetes FAQ
#### What is Type 1 Diabetes?
Type 1 Diabetes is an autoimmune disease in which the pancreas produces little or no Insulin. Insulin is a vital part of the body's metalbolic system, and it's function is to help the body break down Glucose and use it as fuel. The T1D experience varies greatly from person to person, but management involves constant monitoring of Blood Sugar levels and insulin injections multiple times a day, not to mention a large myriad of other factors that go into daily management and overall health. A person with T1D MUST take insulin in order to live - not getting enough insulin can result in hospitalization and death.

#### I think my Uncle has that.
Possibly, but it's also likely that he has Type 2 Diabetes, which is far more common.

#### What is Type 2 Diabetes?
Type 2 Diabetes is a chronic condition in which the body resists insulin, or it doesn't produce enough insulin. About 95% of People with Diabetes (PWD) are Type 2 Diabetics.

## Screenshots
| User Dashboard  | Login |
| ------------- | ------------- |
| ![User Dashboard](https://github.com/KatiLong/bolus-on-board-react/blob/master/github-images/userdashboard.png) | ![Login](https://github.com/KatiLong/bolus-on-board-react/blob/master/github-images/login.png)|
| Signup  | Medical Disclaimer  |
| ![Signup](https://github.com/KatiLong/bolus-on-board-react/blob/master/github-images/signup.png) | ![Medical Disclaimer](https://github.com/KatiLong/bolus-on-board-react/blob/master/github-images/disclaimer.png)|
| Bolus  | Basal  |
| ![Bolus](https://github.com/KatiLong/bolus-on-board-react/blob/master/github-images/bolus.png) | ![Basal](https://github.com/KatiLong/bolus-on-board-react/blob/master/github-images/basal.png)|
| BG  | A1c  |
| ![BG](https://github.com/KatiLong/bolus-on-board-react/blob/master/github-images/bg.png) | ![A1c](https://github.com/KatiLong/bolus-on-board-react/blob/master/github-images/a1c.png)|

## User Cases
This app is for many types of users:
1. Accessible tools that greatly improve the daily lives of those on mutiple daily injections
2. Backup for Insulin Pump Users when they have gaps in insulin pump supplies
3. Dexcom

### UI Flow
![UI Flow handwritten draft](https://github.com/KatiLong/bolus-on-board-react/blob/master/github-images/uiflowv1.jpg)

### Wireframe _main
![Wireframe _Main](https://github.com/KatiLong/bolus-on-board-react/blob/master/github-images/wireframe.jpg)

## Working Prototype
You can access a working prototype of the app here: Coming Soon

## Functionality
The app's functionality includes:
* Every User has the ability to create an account that stores information unique to them
* User can Add Entries, Update Entries, and Delete Entries
* User can sort entries by: Date & Type (Read, Seen, Performed)

## Technology
* Front-End: HTML5 | CSS3 | JavaScript ES6 | React | Redux | Redux-Form
* Back-End: Node.js | Express.js | Mocha | Chai | RESTful API Endpoints | MongoDB | Mongoose
* Other: React-Native | Netlify


## Responsive
App is strongly built to be usuable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* A Support chatbot to help provide levity and resources for Users with the Dialogflow API (https://dialogflow.com/)
* Nutrition and Exercise Functionality
