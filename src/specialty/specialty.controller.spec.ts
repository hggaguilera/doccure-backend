import { Test, TestingModule } from '@nestjs/testing';
import { SpecialtyController } from './specialty.controller';

describe('SpecialtiesController', () => {
  let controller: SpecialtyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecialtyController],
    }).compile();

    controller = module.get<SpecialtyController>(SpecialtyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
