import {
  Controller,
  Get,
  UseGuards,
  UseFilters,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { CountryService } from './country.service';

@Controller('countries')
@UseFilters(new HttpExceptionFilter())
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @UseGuards(AuthGuard)
  @Get()
  async findMany() {
    try {
      return this.countryService.getCountries({});
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
