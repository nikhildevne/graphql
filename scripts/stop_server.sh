#!/bin/bash

# Stop the application using pm2
pm2 stop my-nodejs-app || true  # Avoid failure if the app is not running
