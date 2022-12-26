import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'asror797',
        password: 'password',
      },
      {
        userId: 2,
        username: 'fatxulloh99',
        password: 'password',
      },
      {
        userId: 3,
        username: 'admin',
        password: 'admin',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return await this.users.find(user => user.username === username);
  }
}