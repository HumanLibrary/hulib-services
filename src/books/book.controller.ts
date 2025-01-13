import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
// import { Roles } from '../roles/roles.decorator';
// import { RoleEnum } from '../roles/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { BooksService } from './book.service';
import { RolesGuard } from '../roles/roles.guard';
import { Book } from './domain/book';
import { createNewHumanBookDto } from './dto/create-new-human-book.dto';
import { HumanBookDetailDto } from './dto/human-book-detail.dto';

@ApiBearerAuth()
// @Roles(RoleEnum.admin, RoleEnum.reader)
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiTags('Books')
@Controller({
  path: 'books',
  version: '1',
})
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({ type: Book })
  async create(@Body() createBookDto: createNewHumanBookDto): Promise<Book> {
    return this.booksService.createBook(createBookDto);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  // @Roles(RoleEnum.admin, RoleEnum.reader)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiOkResponse({ type: HumanBookDetailDto })
  @ApiParam({ name: 'id', type: 'number', description: 'ID của human book' })
  async getHumanBookDetail(
    @Param('id') id: number,
  ): Promise<HumanBookDetailDto> {
    return this.booksService.getHumanBookDetail(id);
  }
}
