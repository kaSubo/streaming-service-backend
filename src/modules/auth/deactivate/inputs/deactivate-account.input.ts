import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  MinLength,
} from 'class-validator';

@InputType()
export class DeactivateAccountInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MinLength(8, {
    message: 'Password must be at least 8 characters',
  })
  public password: string;

  @Field(() => String, { nullable: true })
  public pin?: string;
}
