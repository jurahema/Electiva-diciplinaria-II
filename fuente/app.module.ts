import { Module } desde '@nestjs/common';
import { AppController } desde './app.controller';
import { AppService } desde './app.service';

@Módulo({
  importaciones: [],
  controladores: [AppController],
  proveedores: [AppService],
})
exportar clase AppModule {}
