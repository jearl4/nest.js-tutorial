import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CapmController } from './capm/capm.controller';
import { CapmService } from './capm/capm.service';

@Module({
  imports: [],
  controllers: [AppController, CapmController],
  providers: [CapmService, AppService],
})
export class AppModule {}
