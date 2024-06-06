REM compile the code
set HOME=%cd%

call mvn clean install

REM run the application locally

cd %HOME%\authentication-server\target
start java -jar authentication-server-0.0.1-SNAPSHOT.jar

timeout /T 3 /NOBREAK

cd %HOME%\edge-service\target
start java -jar edge-service-0.0.1-SNAPSHOT.jar

timeout /T 3 /NOBREAK

cd %HOME%\resource-server\target
start java -jar resource-server-0.0.1-SNAPSHOT.jar

timeout /T 3 /NOBREAK

cd %HOME%\admin-service\target
start java -jar admin-service-0.0.1-SNAPSHOT.jar

timeout /T 3 /NOBREAK

cd %HOME%\admin-website\target
start java -jar admin-website-0.0.1-SNAPSHOT.jar

timeout /T 3 /NOBREAK

cd %HOME%
