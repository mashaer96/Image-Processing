# Image Processing API

This is the repo for [Udacity's Advanced Full-Stack Web Development Nanodegree Program](). It's about building API that can be used in two different ways. First, as a simple placeholder API that allows you to place images into your frontend with the size set via URL parameters for rapid prototyping. Second, as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API you create will handle resizing and serving stored images for you.

## Table of Contents

* [Instructions](#instructions)
* [Versions](#versions)
* [Creator](#creators)

## Instructions
To be able to interact with the API, you need to start the server from the terminal then access the localhost on port 3030 in the browser. Make sure you follow the correct pattern of the URL:
http://localhost:3030/api/image/?height=300&width=400&name=lake where "height" and "width" can be any numbers while "name" accepts only images' names provided in "./images" folder. Otherwise you will see an error message.

Other instructions related to terminal:
-To combile the code: "npm run build"
-To run unit tests: "npm run test"
-To start the server: "npm run start"
-To use lint: "npm run lint"
-To use prettier: "npm run prettier"


## Versions

This project uses Node of version 14.18.1, other modules' versions are listed below, this project accepts the exact listed versions or minor releases:

-eslint: 8.7.0
-eslint-config-prettier: 8.3.0
-jasmine: 4.0.2
-jasmine-spec-reporter": 7.0.0
-nodemon: 2.0.15
-prettier: 2.5.1
-supertest: 6.2.2
-ts-node: 10.4.0
-typescript: 4.5.5
-cors: 2.8.5
-express: 4.17.2
-fs: 0.0.1-security
-sharp: 0.29.3
-@types/cors: 2.8.12
-@types/express: 4.17.13
-@types/jasmine: 3.10.3
-@types/node: 17.0.10
-@types/sharp: 0.29.5
-@types/supertest: 2.0.11
-@typescript-eslint/eslint-plugin: 5.10.0
-@typescript-eslint/parser: 5.10.0

## Creators

**Masha'er Mostafa**

* [www.linkedin.com/in/mashaer-mostafa](www.linkedin.com/in/mashaer-mostafa)
* [https://github.com/mashaer96](https://github.com/mashaer96)