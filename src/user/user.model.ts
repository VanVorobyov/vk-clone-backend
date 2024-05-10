import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';
import { EnumGender } from './user.interface';

export interface UserModel extends Base {}

export class UserModel extends TimeStamps {
  @prop({ unique: true })
  email: string;

  @prop()
  name: string;

  @prop()
  birthday: string;

  @prop({ enum: EnumGender })
  gender: string;

  @prop({ default: false })
  isVerified: boolean;

  @prop()
  location: string;

  @prop()
  avatar: string;
}
