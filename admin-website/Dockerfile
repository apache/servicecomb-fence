FROM openjdk:17-alpine
LABEL authors="wmwei"
RUN mkdir -p /opt
COPY target/admin-website-0.0.1-SNAPSHOT.jar /opt
WORKDIR /opt
RUN mv admin-website-0.0.1-SNAPSHOT.jar admin-website.jar
EXPOSE 9098
ENTRYPOINT ["java", "-jar","admin-website.jar"]