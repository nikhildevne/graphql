#!/bin/bash

# Define the application directory
APP_DIR="/var/www/my-nodejs-app"

# Check if the directory exists
if [ -d "$APP_DIR" ]; then
    echo "Cleaning up old files in $APP_DIR..."
    rm -rf $APP_DIR/*
else
    echo "No previous installation found. Proceeding with deployment."
fi
