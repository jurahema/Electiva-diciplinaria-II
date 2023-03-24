import { Controller, Get } from '@nestjs/common';
import { AppService } desde './app.service';

@Controlador()
exportar clase AppController {
  constructor(private readonly appService: AppService) {}

  @Obtener()
  getHello(): cadena {
    Devuelva esto. appService. getHello();
  }
}
