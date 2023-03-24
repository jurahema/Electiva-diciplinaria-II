import { Test, TestingModule } desde '@nestjs/testing';
import { AppController } desde './app.controller';
import { AppService } desde './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(asincrónico () => {
    const app: TestingModule = await Test. createTestingModule({
      controladores: [AppController],
      proveedores: [AppService],
    }). compilar();

    appController = aplicación. get<AppController>(AppController);
  });

  describir('raíz', () => {
    it('debería devolver "Hello World!"' , () => {
      expect(appController. getHello()). toBe('Hello World!');
    });
  });
});
