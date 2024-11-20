FROM openjdk:17-alpine
LABEL authors="wmwei"
RUN mkdir -p /opt
COPY target/edge-service-0.0.1-SNAPSHOT.jar /opt
WORKDIR /opt
RUN mv edge-service-0.0.1-SNAPSHOT.jar edge-service.jar
EXPOSE 9090
ENTRYPOINT ["java", "-jar","edge-service.jar"]