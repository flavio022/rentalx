import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificaionUseCase';


const specificaitonRepository = SpecificationRepository.getInstance();
const createSpecificaionUseCase = new CreateSpecificationUseCase(specificaitonRepository);
const createSpecificaitionController = new CreateSpecificationController(createSpecificaionUseCase);

export { createSpecificaitionController };