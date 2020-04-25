import { Test, TestingModule } from '@nestjs/testing';
import { CapmService } from './capm.service';

describe('CapmService', () => {
  let service: CapmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CapmService],
    }).compile();

    service = module.get<CapmService>(CapmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
