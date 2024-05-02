import { Module } from '@nestjs/common';
import { SmeService } from './sme.service';
import { SmeController } from './sme.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HttpModule } from '@nestjs/axios';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [SmeController],
  providers: [SmeService],
  imports: [
    PrismaModule,
    HttpModule,
    MulterModule.register({
      dest: './uploads',
    }),
  ],
})
export class SmeModule {}
