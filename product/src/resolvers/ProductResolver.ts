import { Product } from "../entity/Product";
import {Arg, Field, InputType, Int, Mutation, Query, Resolver } from "type-graphql";

@InputType()
class ProductInput{
    @Field(()=> String, {nullable: true})
    name?: string;

    @Field(()=> Int, {nullable:true})
    quantity?: number;

    @Field(()=> Int, {nullable:true})
    price?: number;
}

@Resolver()
export class ProductResolver{

    @Mutation(()=> Product)
    async createProduct(@Arg('options', ()=> ProductInput) options : ProductInput){
        const product=  await Product.create(options).save();
        return product;
    }

    @Mutation(()=> Boolean)
    async updateProduct(@Arg("id") id: number, @Arg('input', ()=> ProductInput) input: ProductInput){
        await Product.update({id}, input);
        return true;
    }


    @Mutation(()=> Boolean)
    async deleteProduct(@Arg("id") id: number){
        await Product.delete(id);
        return true
    }


    @Query(()=> Product)
    getProduct(@Arg("id") id:number){
        return Product.findOne({id});
    }

    @Query(()=> [Product])
    async getProducts(){
        return await Product.find();
    }
}