REM compile the code
set HOME=%cd%

mvn clean install

REM run the application locally

cd %HOME%\authentication-server\target
start java -jar authentication-server-0.0.1-SNAPSHOT.jar

cd %HOME%\samples\EdgeService\target
start java -jar edge-service-0.0.1-SNAPSHOT.jar

cd %HOME%\samples\ResourceServer\target
start java -jar resource-server-0.0.1-SNAPSHOT.jar

cd %HOME%\samples\Client\target
start java -jar client-0.0.1-SNAPSHOT.jar