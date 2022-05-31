import { Controller, Get, Post,Body, Put, Param, Delete } from "@nestjs/common";
import { FooditemModel } from "src/models/food-item.model";
import { FoodItemsService } from "./food.item.serveis";

//http://localhost:3000/items | GET | POST
@Controller('items')
export class FoodItemsController{
    constructor(private _service : FoodItemsService){}
     

    @Get()
    getAll(){
        return this._service.getAll();
    }

    @Post()
    creat(@Body() FooditemModel: FooditemModel){
        return this._service.create(FooditemModel);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() model: FooditemModel) {
      return this._service.updatFoodItem(id , model);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this._service.Deleteitem(id);
    }
  }