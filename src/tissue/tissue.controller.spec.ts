import { Test, TestingModule } from '@nestjs/testing';
import { TissueController } from './tissue.controller';
import { TissueService } from './tissue.service';

describe('TissueController', () => {
  let controller: TissueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TissueController],
      providers: [TissueService],
    }).compile();

    controller = module.get<TissueController>(TissueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
