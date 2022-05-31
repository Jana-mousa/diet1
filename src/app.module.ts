import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { FoodItemsModule } from './food-items/food-items.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'dietdb',
      autoLoadEntities: true,
      synchronize: true,
    }),

    FoodItemsModule,
  ],
  
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
