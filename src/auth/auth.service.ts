import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  //TODO Für die Registrierung muss an der Stelle noch verbaut werden
  // Aktuell nur Validierung für Login
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = { id: 1, username: 'test', password: 'test' }; // Beispielhaft - normalerweise muss der User aus DB geladen werden
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}