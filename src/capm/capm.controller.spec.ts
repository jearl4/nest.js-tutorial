import { Test, TestingModule } from '@nestjs/testing';
import { CapmController } from './capm.controller';

describe('Capm Controller', () => {
  let controller: CapmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CapmController],
    }).compile();

    controller = module.get<CapmController>(CapmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
