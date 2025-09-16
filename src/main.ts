import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('APP_PORT') || 3030;
  const apiPrefix = configService.get('APP_API_PREFIX') || 'api';
  const apiVersion = configService.get('APP_API_VERSION') || 'v1';

   // Set global prefix
  app.setGlobalPrefix(`${apiPrefix}/${apiVersion}`);

  // Enable CORS
  app.enableCors({
    origin: configService.get<string>('APP_CORS_ORIGIN', 'http://localhost:3000'),
    credentials: true,
  });

   // Configure Swagger
  const config = new DocumentBuilder()
    .setTitle('User Authentication and Authorization Service')
    .setDescription('The User Authentication and Authorization Service API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${apiPrefix}/${apiVersion}/docs`, app, document, {
    useGlobalPrefix: false,
  });

  await app.listen(port);
}
bootstrap();
