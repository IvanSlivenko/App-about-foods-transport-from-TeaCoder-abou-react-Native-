import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator'

export class AuthDto {
	// @IsOptional
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'Password mist by at least 6 characters long'
	})
	@IsString()
	password: string
}
