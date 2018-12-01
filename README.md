# fdn-facebook-api

Getting user facebook feed

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


```
$git clone https://github.com/violerine/fdn-facebook-api.git
```

<b>How to run server side</b>

* Run postgres local database, create database name 'fdn'
* Import userdata.sql file to your local  postgres 


```
Go to /server directory in terminal

$npm start
```

Running on http://localhost:5000 .

To change the port go to file bin/www , search for 

```
var port = normalizePort(process.env.PORT || '5000');

```

## API 


| API  | HTTP | Purpose |
| ------------- | ------------ | ------------- |
| /login/facebook | GET | get access token for facebook   |
| /facebook | GET | stream user feeds |

* For API /login/facebook has to run in browser to get the access token
* Run /login/facebook then run /facebook to stream user feed, otherwise failed
* User feeds only display limited information for the posts. To get complete data need to submit app review to facebook. 


## Running the tests

Explain how to run the automated tests for this system

```
$npm test
```


## Built With

* ExpressJs 

## Testing

* Mocha
* Chai

## Authors

* **Glady Sefirina** *



