import { Test, TestingModule } desde '@nestjs/testing';
import { INestApplication } desde '@nestjs/common';
Importar * como solicitud de 'Supertest';
import { AppModule } desde './.. /src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(asincrónico () => {
    const moduleFixture: TestingModule = await Test. createTestingModule({
      importa: [AppModule],
    }). compilar();

    app = moduleFixture. createNestApplication();
    Espera la aplicación. Init();
  });

  it('/ (GET)', () => {
    Solicitud de devolución (app. getHttpServer())
      . Obtener('/')
      . esperar(200)
      . expect('Hello World!');
  });
});
