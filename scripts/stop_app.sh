#!/bin/bash

# Stop the application
echo "Stopping the application..." | tee -a /var/log/my-nodejs-app.log
pm2 stop app.js >> /var/log/my-nodejs-app.log 2>&1
