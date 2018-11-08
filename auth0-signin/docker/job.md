

### Sample Job to run Educative Auth0 Signin Demo

- **Job Name**: BuildReactApp

- **Input Filename**: foo

- **Build Script**: Leave this field empty.

- **Run Script**: cp -r /usercode/src/* /usr/local/educative/samples/auth0-signin/src/

- **Run in Live Container**: checked

- **Ports to allow**: 3000

- **Start Script**: npm start --prefix /usr/local/educative/samples/auth0-signin
