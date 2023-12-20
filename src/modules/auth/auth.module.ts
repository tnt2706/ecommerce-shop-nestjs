import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ShopModule } from '../shop/shop.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
// import { jwtConstants } from './constants';

@Module({
  imports: [
    ShopModule,
    JwtModule.register({
      global: true,
      // secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
