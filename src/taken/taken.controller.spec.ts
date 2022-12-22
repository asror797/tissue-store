import { Test, TestingModule } from '@nestjs/testing';
import { TakenController } from './taken.controller';
import { TakenService } from './taken.service';

describe('TakenController', () => {
  let controller: TakenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TakenController],
      providers: [TakenService],
    }).compile();

    controller = module.get<TakenController>(TakenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
