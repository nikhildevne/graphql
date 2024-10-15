#!/bin/bash

# Define the application directory
APP_DIR="/var/www/my-nodejs-app"
LOG_FILE="/var/log/my-nodejs-app.log"

# Make sure the scripts are executable
chmod +x $APP_DIR/scripts/*.sh

# Check if the directory exists
if [ -d "$APP_DIR" ]; then
    echo "Directory $APP_DIR exists. Preparing to start the application..." | tee -a $LOG_FILE
    
    # Navigate to the application directory
    cd $APP_DIR

    # Install dependencies
    echo "Installing dependencies..." | tee -a $LOG_FILE
    npm install >> $LOG_FILE 2>&1

    # Check if the application is already running
    if pgrep -f "node app.js" > /dev/null; then
        echo "Application is already running. Restarting..." | tee -a $LOG_FILE
        pm2 restart app.js >> $LOG_FILE 2>&1
    else
        echo "Starting the application..." | tee -a $LOG_FILE
        pm2 start app.js >> $LOG_FILE 2>&1
    fi
else
    echo "Directory $APP_DIR does not exist. Creating it..." | tee -a $LOG_FILE
    mkdir -p $APP_DIR
    echo "Initial setup done." | tee -a $LOG_FILE
fi
