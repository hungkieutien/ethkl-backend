import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module'; // PrismaModule importieren

@Module({
  imports: [
    AuthModule,
    ProductModule,
    CartModule,
    UserModule,
    OrderModule,
    PrismaModule, // PrismaModule hinzufügen
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      introspection: true,
      csrfPrevention: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
