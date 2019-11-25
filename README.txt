Upload Server For Cinegy Workspace

In order to use it you must set the environment variables according to the deployment environemnt.
Variables are present in .env folder. It can be edited according to the environment.

PORT = port the server listens to
HOST = host name of the server working on
DIR = target directory the file will be uploaded to
ORG = origin name for the cors policy

Requires Node.js v12.13.0

To start the server visit the directory. Start the terminal with command:

node server.js

Upon receiving file a message and the name of the file will be prompted.