import { Field, Int, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Product{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field(()=> Int)
    quantity: number;

    @Column()
    @Field(()=> Int)
    price: number;
}