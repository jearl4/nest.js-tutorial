import { Controller, Get, HttpCode, HttpStatus, Body } from '@nestjs/common';

@Controller('capm')
export class CapmController {
  @Get()
  @HttpCode(HttpStatus.OK)
  public getCapm(@Body() body) {
      const riskFreeRate = parseFloat(body.riskFreeRate)
      const beta = parseFloat(body.beta)
      const marketReturn = parseFloat(body.marketReturn)
      const capm =  riskFreeRate + beta * (marketReturn - riskFreeRate)
    return capm
  }
}
