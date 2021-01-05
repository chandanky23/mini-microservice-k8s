# A Chat Application only for POSTS and COMMENTS
A mini microservices chat application built using react, node and express and deployed as docker image using kubernetes.

## Application details

* The application contains a react frontend to show posts and comments for that post.
* There are backend services built using node and express which are de-coupled from each and fulfills specific business requirements
* Along with the backend services there is a event bus which will actually help us to achieve microservices architecture. This event bus is custom made and is not of production quality. An example of a production quality event-based massaging system is NATS streaming server
* This event bus delegates events created by services to other services and hence removing any SYNC calls among the different services.
* If any service crashes then the they don't affect the other services as they are 100% decoupled from each other and only receive events from them via the Event Bus.
* In practice every service contains some sort of storage. This can be a database or a message queue( like Redis, RabbitMQ, etc) or some kind of cache(like in memory, etc) as per requirements.

## Get the project

git clone the project using
* ssh - `git@github.com:chandanky23/mini-microservice-k8s.git`
* https - `https://github.com/chandanky23/mini-microservice-k8s.git`

Start the project

To run individual services and the react app, go the individual project root directory and run `npm start`

## Further Implementaion Details
Every application in the project contains their individual Dockerfile which will build an image for them. This image will be then
* be either pushed to docker hub to use the latest built version
* or, will be built with an explicit recurring version to use it in the local env.

Once the image is provided, then we will 
* setup the kubernetes infrastructure and deploy our images using k8s deployments and manage them using k8s services.
* use kubernetess-ingress for load balancing our application for both prod and other envs.
* introduce **skaffold.yaml** file in our project to avoid constant manual k8s build if we make changes to our services. This is only for development purpose.
