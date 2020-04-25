import { INestApplication } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';

describe('AppController (e2e)', () => {
  it('/ (GET)', () => {
    return request(global.app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
