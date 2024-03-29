import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthDTO {
	@IsEmail()
	@MinLength(2)
	@MaxLength(20)
	@IsString()
	readonly email: string;

	@MaxLength(20)
	@MinLength(8)
	@IsString()
	readonly password: string;
}
