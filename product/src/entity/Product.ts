import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Product extends BaseEntity{

    @Field()
    @PrimaryGeneratedColumn()
    id:number;

    @Field()
    @Column()
    name: string;

    @Field(()=> Int)
    @Column("int")
    quantity: number;

    @Field(()=> Int)
    @Column("int")
    price: number;
}