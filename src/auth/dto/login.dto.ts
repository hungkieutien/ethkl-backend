import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty() // Der Benutzername darf nicht leer sein
  username: string;

  @MinLength(6) // Das Passwort muss mindestens 6 Zeichen haben
  password: string;
}
