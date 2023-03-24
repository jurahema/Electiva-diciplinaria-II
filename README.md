# Electiva-diciplinaria-II
integrantes 
julio herrera jose luis suarez jusus pera
Sprint 1:
-Historia de Usuario ED-001

Historia de usuario

Feature: Registro de producto
Scenario: Registro de producto en la platafora con codigi (nunca antes registrado)
Given: el usuario ha de hacer clic en el boton "Nuevo Producto" e introduce de forma correcta un codigo de producto, nombre, stock, imagen, descripcion.
When: el usuario clica sobre el boton de "Registrar Producto".
Then: el usuario puede registrar de forma correcta el producto y visualizar el producto creado.
Subtareas (Definir las tareas de BackEnd):

Creacion de tablas de produccion con los campos...(llave unica codigo)
Metodos
URLS de End Points
Body de las solicitudes
Respuestas
Codigos HTTP de las respuestas
Mensajes de error
-Historia Tecnica ED-002

Historia tecnica
Creacion de base de datos

En PostgreSQL, crea base de datos para almacenamiento persistente de los datos de la aplicacion.

Subtareas

Instalacion de PostgreSQL
Creacion de la base de datos
configuracion de la conexion a la base de datos desde el framework
Nest Logo

A progressive Node.js framework for building efficient and scalable server-side applications.

NPM Version Package License NPM Downloads CircleCI Coverage Discord Backers on Open Collective Sponsors on Open Collective  Support us 

Description
Nest framework TypeScript starter repository.

Installation
$ npm install
Running the app
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
Test
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
Support
Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please read more here.

Stay in touch
Author - Kamil Myśliwiec
Website - https://nestjs.com
Twitter - @nestframework
License
Nest is MIT licensed.
