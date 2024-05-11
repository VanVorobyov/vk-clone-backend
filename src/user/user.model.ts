import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop, Ref } from '@typegoose/typegoose';
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

  @prop({ ref: () => UserModel })
  friends: Ref<UserModel>[];
}
