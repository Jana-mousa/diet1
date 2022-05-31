import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FooditemModel } from "src/models/food-item.model";
import { Repository } from "typeorm";
import { FoodItemEntity } from "./entities/food-items.entity";
@Injectable()
export class FoodItemsService {
    constructor(
        @InjectRepository(FoodItemEntity)
        private _repository: Repository<FoodItemEntity>
    ) { }


    getAll(): Promise<Array<FoodItemEntity>> {
        return this._repository.find();
    }


    async create(model : FooditemModel): Promise<FoodItemEntity> {
        //model=>entity
        let newEntity={
            carbs: model.carbs,
            name: model.name,
            protien: model.protien,
            fat: model.fat,
        } as  FoodItemEntity

        let createdEntity = this._repository.create(newEntity);

        await this._repository.save(createdEntity);

        return createdEntity;
    }
  
    async updatFoodItem(id: string, model: FooditemModel) : Promise<FoodItemEntity> {
        let fooditem = await this._repository.findOne(id)

        if (!fooditem) {
            throw new Error("the id not exit")
        }
    
        fooditem.name = model.name
        fooditem.carbs = model.carbs
        fooditem.fat = model.fat
        fooditem.protien = model.protien


        return this._repository.save(fooditem);
    }

    async Deleteitem(id:string) : Promise<any>{
        let fooditem = await this._repository.delete(id)
        if (!fooditem) {
            throw new Error("the id not exit")
        }

        return this._repository.clear();

     }
}