import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule } from '../src/config/config.module';
import { TypeOrmConfigService } from '../src/factories/database.factory';
import { AppModule } from '../src/app.module';

jest.setTimeout(10000);

beforeAll(async () => {
  const moduleFixture = await Test.createTestingModule({
    imports: [
      ConfigModule,
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useClass: TypeOrmConfigService,
      }),
      AppModule,
    ],
  }).compile();

  global.app = moduleFixture.createNestApplication();

  await global.app.init();
});

afterAll(async () => {
  await global.app.close();
});
