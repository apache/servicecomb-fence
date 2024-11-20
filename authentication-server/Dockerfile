FROM openjdk:17-alpine
LABEL authors="wmwei"
RUN mkdir -p /opt
COPY target/authentication-server-0.0.1-SNAPSHOT.jar /opt
WORKDIR /opt
RUN mv authentication-server-0.0.1-SNAPSHOT.jar authentication-server.jar
EXPOSE 9061
ENTRYPOINT ["java", "-jar","authentication-server.jar"]