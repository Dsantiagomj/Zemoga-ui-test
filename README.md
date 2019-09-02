# Rule of Thumb

This project contains ReactJS and NodeJS, it will be necessary run several commands to fully run the project.

It's necessary to have installed git, nodejs and mongodb. It's recommendable to have installed a GUI for MongoDB like Robo 3t, although not necessary.

Clone the repository with

    git clone https://github.com/Dsantiagomj/Zemoga-ui-test.git

Go inside the directory with

    cd Zemoga-ui-test

Install the dependencies once you are inside the project

    npm i

create an .env file, there is an .env.example file you can relate the info to, or simply rename the file by deleting .example of the file.

once the dependencies are installed and the .env file properly configured, proceed to run the server with the follow command

    npm run server

The backend development server will start on port 3000.

It's going to be necessary to fill the database, we need to run just the first time the following command

    node script.js

Once the database is fill you can either keep in development server or run production server.

To run production server execute

    npm start

Finally to run the frontend execute

    npm run dev

New tab will be open with the project fully running
