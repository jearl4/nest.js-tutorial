import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CapmController } from './capm/capm.controller';

@Module({
  imports: [],
  controllers: [AppController, CapmController],
  providers: [AppService],
})
export class AppModule {}
