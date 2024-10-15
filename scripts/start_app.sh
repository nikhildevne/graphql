#!/bin/bash

# Start the application (if not already handled in the previous script)
echo "Starting application using pm2..." | tee -a /var/log/my-nodejs-app.log
pm2 start app.js >> /var/log/my-nodejs-app.log 2>&1
