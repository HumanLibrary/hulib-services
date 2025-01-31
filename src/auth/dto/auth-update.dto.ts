import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { FileDto } from '../../files/dto/file.dto';
import { Transform, Type } from 'class-transformer';
import { lowerCaseTransformer } from '../../utils/transformers/lower-case.transformer';
import { StatusDto } from '../../statuses/dto/status.dto';
import { GenderEnum } from '../../genders/genders.enum';
import { GenderDto } from '../../genders/dto/gender.dto';

export class AuthUpdateDto {
  // @ApiPropertyOptional({ type: () => FileDto })
  // @IsOptional()
  // photo?: FileDto | null;

  @ApiPropertyOptional({ example: 'John' })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  firstName?: string;

  @ApiPropertyOptional({ example: 'Doe' })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  lastName?: string;

  @ApiPropertyOptional({ example: 'new.email@example.com' })
  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  @Transform(lowerCaseTransformer)
  email?: string;

  @ApiPropertyOptional({ type: () => FileDto })
  @IsOptional()
  photo?: FileDto | null;

  @ApiPropertyOptional({ example: { id: GenderEnum.other }, type: GenderDto })
  @IsOptional()
  @Type(() => GenderDto)
  gender?: GenderDto | null;

  @ApiPropertyOptional({ type: () => StatusDto })
  @IsOptional()
  @Type(() => StatusDto)
  status?: StatusDto;

  @ApiPropertyOptional()
  @IsOptional()
  // @IsNotEmpty()
  @MinLength(6)
  password?: string;

  @ApiPropertyOptional()
  @IsOptional()
  // @IsNotEmpty({ message: 'mustBeNotEmpty' })
  oldPassword?: string;
}
