import { Body, Controller, Get, Post,Param } from '@nestjs/common';
import { FooditemModel } from './models/food-item.model';

import { FoodItemsService } from './food-items/food.item.serveis';

@Controller('test')
@Controller()
export class AppController {
  appserveice: any;

  @Get()
  getHello(): string {
    return 'Welcome to nest js';
 
  }

/*
  @Get('items')
  getall(@Param('id') id: number):Array<FooditemModel>{
    return this.appserveice.getAllitems();
}

@Get('items/:id')
getbyid(@Param('id') id: number): FooditemModel{
  return this.appserveice.getByid(id);
}

@Post('items')
create (@Body() item:FooditemModel){
 return this.appserveice.creatitem(item);
}
*/
}
