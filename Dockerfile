FROM nginx

COPY ./index.html /usr/share/nginx/html
COPY ./styles/ /usr/share/nginx/html
COPY ./scripts/ /usr/share/nginx/html
COPY ./static/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf