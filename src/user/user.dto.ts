import { EnumGender } from './user.interface';

import { IsString, IsEnum } from 'class-validator';

export class UserDTO {
  @IsString()
  name: string;

  @IsString()
  birthday: string;

  @IsEnum(EnumGender)
  gender: string;

  @IsString()
  location: string;

  @IsString()
  avatar: string;
}
