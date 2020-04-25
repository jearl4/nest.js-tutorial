import { Injectable } from '@nestjs/common';

@Injectable()
export class CapmService {
  public calculateCapm(riskFreeRate: number, beta: number, marketReturn: number) {
    return riskFreeRate + beta * (marketReturn - riskFreeRate);
  }
}
