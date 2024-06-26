import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from '../user/user.model';
import { ModelType } from '@typegoose/typegoose/lib/types';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>) {}
}
