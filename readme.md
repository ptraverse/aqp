# AQP

Yet Another Rewrite of QP - this time with AngularJS

## Build
	git clone https://github.com/ptraverse/aqp.git && cd aqp
	npm update
	bower update
	sudo npm start

## Mongodb Notes
* [http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/]
* `sudo apt-get install mongodb-org`
* mongo needs data directory in `sudo mkdir /data/db &&  sudo chmod 0755 /data/db`
* start mongodaemon (included in npm start) with `mongod -f ./mongod.conf`
* angular mongodb-rest port 3000 (included in npm start) with `./node_modules/mongodb-rest/bin/mongodb-rest`
* ![REST Interface for Mongodb](/postman.JPG)
* [https://github.com/codecapers/mongodb-rest]

## VM Notes
* `npm install` with `--no-bin-links` (due to filesharing)
* `bower install` with `--save`