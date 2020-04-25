import { Controller, Get, HttpCode, HttpStatus, Body } from '@nestjs/common';
import { CapmService } from './capm.service';

@Controller('capm')
export class CapmController {
  constructor(private readonly capmService: CapmService){}

  @Get()
  @HttpCode(HttpStatus.OK)
  public getCapm(@Body() body) {
    return this.capmService.calculateCapm(body.riskFreeRate, body.beta, body.marketReturn)
  }
}
