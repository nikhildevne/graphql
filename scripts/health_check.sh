#!/bin/bash

# Check if the application is running
if pm2 list | grep -q 'my-nodejs-app'; then
  echo "Application is running."
  exit 0
else
  echo "Application is not running."
  exit 1
fi
