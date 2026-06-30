import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async createOrUpdate(profile: any) {
    const email = profile.emails[0].value;

    let user = await this.userModel.findOne({ email });

    if (!user) {
      user = await this.userModel.create({
        name: profile.displayName,
        email,
        provider: 'google',
        role: 'USER',
        status: 'PENDING',
      });
    }

    return user;
  }

  async getPendingUsers() {
    return this.userModel.find({ status: 'PENDING' });
  }
  async approveUser(id: string) {
  return this.userModel.findByIdAndUpdate(
    id,
    {
      status: 'APPROVED',
    },
    {
      new: true,
    },
  );
}
async getStats() {
  const totalUsers = await this.userModel.countDocuments();

  const pendingUsers = await this.userModel.countDocuments({
    status: 'PENDING',
  });

  const approvedUsers = await this.userModel.countDocuments({
    status: 'APPROVED',
  });

  return {
    totalUsers,
    pendingUsers,
    approvedUsers,
  };
}
}