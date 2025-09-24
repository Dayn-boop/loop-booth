# Dockerfile (static site via Apache)
FROM httpd:2.4
# If your static files are at repo root, COPY . /usr/local/apache2/htdocs/
# If they are in a folder like /public, change to COPY ./public/ /usr/local/apache2/htdocs/
COPY ./public/ /usr/local/apache2/htdocs/
EXPOSE 80
