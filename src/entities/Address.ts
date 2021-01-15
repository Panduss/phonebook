import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsString, IsNumber} from "class-validator";

@Entity()
export default class Address extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column('text', {nullable: false})
    country: string

    @IsString()
    @Column('text', {nullable: false})
    zip: string

    @IsString()
    @Column('text', {nullable: false})
    city: string

    @IsString()
    @Column('text', {nullable: false})
    street: string

    @IsNumber()
    @Column('int', {nullable: false})
    number: number

    @IsString()
    @Column('text', {nullable: true})
    addition: string

}