#!/bin/bash
# Update the package manager and install Docker
sudo yum update -y
sudo yum install -y docker
# Start docker serivce
sudo service docker start
# Add ec2-user to the docker group
sudo usermod -aG docker ec2-user
#create necessary directories for Strapi
sudo mkdir -P /app/public/uploads
sudo chmod -R 775 /app/public/uploads

# Restart docker service to apply change
sudo service docker restart
