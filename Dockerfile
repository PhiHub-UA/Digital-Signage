FROM nginx:1.25.5

COPY ./index.html /usr/share/nginx/html
COPY ./styles /usr/share/nginx/html/styles/
COPY ./scripts /usr/share/nginx/html/scripts/
COPY ./static /usr/share/nginx/html/static/

COPY nginx.conf /etc/nginx/nginx.conf