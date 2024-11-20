FROM openjdk:17-alpine
LABEL authors="wmwei"
RUN mkdir -p /opt
COPY target/resource-server-0.0.1-SNAPSHOT.jar /opt
WORKDIR /opt
RUN mv resource-server-0.0.1-SNAPSHOT.jar resource-server.jar
EXPOSE 9092
ENTRYPOINT ["java", "-jar","resource-server.jar"]