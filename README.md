
# wmdd_4999_take_home

# 01 Serverless Alternative Apex
In Apex, you can use languages that are not  supported by Serverless, such as Golang. A variety of workflow related tooling is provided for testing functions, rolling back deploys etc. Also, Apex aims to be a simple and robust solution, while Serverless intends on providing a more feature-rich solution. Moreover, Apex supports concurrency for quick deploys.


# 02 Loose Coupling and High Cohesion

## Loose Coupling
Services should be designed in a way so that if there is need to change/update one of the service, you don’t need to change/update anything in another service. That means a service should be least dependent on another service. A loosely coupled service can be used/tested independently and it knows nothing or very little about others.


## High Cohesion

The related behavior of service should be isolated within that service. This way, when you change/update service, there is no need to update/change another service. In this related logic is kept in one service otherwise different services need to communicate to each other across service boundary.


# Small Project

A simple web app for file sharing using S3, DynamoDb and Serverless Framework for backend and hosted using AWS

# Example URL
http://wmdd-4999-take-home.s3-website-us-west-2.amazonaws.com/

# Notes:

API files are stored in FilSharing1

Other files/directories such as index.html, js, css and img should be uploaded to S3 bucket for hosting on AWS

Create a dynamoDb table with partition key 'id' of string type

## Simply click browse button to select Image (Allowed Image type jpg,jpeg,gif and png)(*required), Enter description of Image (*required), click upload button, Once the Image is uploaded, the Image will be shown in list for few seconds, then page will reload to recreate table (in HTML page) with all the Images in S3 Bucket. Images in table (in HTML page) can be sorted by clicking the headers (filename,description, imageURL) or you can search for image by description, imageURL or filename.





