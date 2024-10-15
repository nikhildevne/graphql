#!/bin/bash

# Navigate to the application directory
cd /home/ec2-user/my-nodejs-app

# Start the application using pm2 or any process manager
pm2 start app.js --name my-nodejs-app  # Adjust this to your entry file
