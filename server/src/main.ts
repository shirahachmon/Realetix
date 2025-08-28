import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.enableCors({
    origin: ['http://localhost:5173'],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Realetix API')
    .setDescription('REST API for properties, units, tenants, leases, payments')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000, '0.0.0.0');
  console.log('API running on http://localhost:3000');
  console.log('Swagger UI at      http://localhost:3000/docs');
}
bootstrap();
