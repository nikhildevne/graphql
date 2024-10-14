#!/bin/bash
DIRECTORY=/var/www/my-nodejs-app

if [ ! -d "$DIRECTORY" ]; then
  echo "Directory $DIRECTORY does not exist. Creating..."
  mkdir -p $DIRECTORY
  chown -R www-data:www-data $DIRECTORY
  chmod -R 755 $DIRECTORY
else
  echo "Directory $DIRECTORY already exists."
fi
