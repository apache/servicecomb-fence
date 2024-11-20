FROM openjdk:17-alpine
LABEL authors="wmwei"
RUN mkdir -p /opt
COPY target/admin-service-0.0.1-SNAPSHOT.jar /opt
WORKDIR /opt
RUN mv admin-service-0.0.1-SNAPSHOT.jar admin-service.jar
EXPOSE 9096
ENTRYPOINT ["java", "-jar","admin-service.jar"]