import { Controller, Get, Param, Patch } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
  ) {}

  @Get('pending')
  getPendingUsers() {
    return this.adminService.getPendingUsers();
  }

  @Patch('approve/:id')
  approveUser(@Param('id') id: string) {
    return this.adminService.approveUser(id);
  }
 @Get('stats')
getStats() {
  return this.adminService.getStats();
}
}