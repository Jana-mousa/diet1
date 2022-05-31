import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodItemEntity } from './entities/food-items.entity';
import { FoodItemsController } from './food-items.controller';
import { FoodItemsService } from './food.item.serveis';

@Module({
     imports: [
        TypeOrmModule.forFeature([FoodItemEntity])
     ],
     controllers: [
        FoodItemsController
     ],
     providers: [FoodItemsService]
})

export class FoodItemsModule{}