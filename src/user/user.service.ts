import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(user: User) {
    const userEntity = await this.userRepository.create(user);
    this.userRepository.save(userEntity);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

  update(user: Partial<User>) {
    return this.userRepository.update(user.id, user);
  }

  find(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  findAll() {
    return this.userRepository.find();
  }

  // find(id: number): User
  // find(username: string): User
  // find(value: number | string) {
  //   if (typeof value === 'number') {
  //     return this.userRepository.findOne({})
  //   }
  // }
}
