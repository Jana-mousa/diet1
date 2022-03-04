import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodItemEntity } from './entities/food-items.entity';
import { FoodItemsController } from './food-items.controller';

@Module({
     imports: [
        TypeOrmModule.forFeature([FoodItemEntity])
     ],
     controllers: [
        FoodItemsController
     ],
     providers: []
})

export class FoodItemsModule{}