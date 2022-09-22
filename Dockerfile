FROM nginx:alpine
COPY build /home/huangli/mynginx/nginx/html
#COPY conf /etc/nginx
#CMD ["nginx", "-g", "daemon off;"]