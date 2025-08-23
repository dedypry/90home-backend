import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './domains/auth/auth.module';
import { ProfileModule } from './domains/profile/profile.module';
import { RolesModule } from './domains/roles/roles.module';
import { DevelopersModule } from './domains/developers/developers.module';
import { UsersModule } from './domains/users/users.module';
import { ProductsModule } from './domains/products/products.module';

@Module({
  imports: [
    AuthModule,
    ProfileModule,
    RolesModule,
    DevelopersModule,
    UsersModule,
    ProductsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
