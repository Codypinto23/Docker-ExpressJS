# Docker-ExpressJS
Dockerfile to quickly make ExpressJS app with API on port 8080


# Install
1) Clone this repo to a folder in your system
* `git clone https://github.com/Codypinto23/Docker-ExpressJS.git`

# To Run Dockerfile

1) First build the docker image (we'll name it 'express-image')
* `docker build . -t express-image`

2) Now run a container using that image (we'll name it 'express-demo'). We'll map our port 80 to the container's port 8080
* `docker run -it --rm -p 80:8080 --name express-demo express-image`


# Notes: 
1) To exit out of the docker and keep it running, type ctrl-p, ctrl-q
2) The -i tag means we run the docker container in interactive mode, which lets us keep it open, even if it's not attached
3) The -t tag means we allocate a psuedo-terminal 
