import { NestFactory } desde '@nestjs/core';
import { AppModule } desde './app.module';

Arranque de la función asincrónica() {
  const app = await NestFactory. create(AppModule);
  Espera la aplicación. escuchar(3000);
}
Bootstrap();
