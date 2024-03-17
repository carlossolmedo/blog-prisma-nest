import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { Logger, VersioningType } from '@nestjs/common';
import { server } from './config';

async function bootstrap() {
  const PORT = server.port;
  const HOST = server.host;

  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });

  // Versioning API
  app.enableVersioning({
    type: VersioningType.URI,
  });

  const config = new DocumentBuilder()
    .setTitle('Joule Interview')
    .setDescription('The Joule Interview API description')
    .setVersion('0.1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/v1', app, document);

  if (HOST) {
    await app.listen(PORT, HOST);
    Logger.log(`Application is running on port: '${PORT}', host: '${HOST}'`);
  } else {
    await app.listen(PORT);
    Logger.log(`Application is running on port: '${PORT}'`);
  }
}

bootstrap();
