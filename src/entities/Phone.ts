import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsString} from "class-validator";

@Entity()
export default class Phone extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column('text', {nullable: false})
    mobile: string

    @IsString()
    @Column('text', {nullable: true})
    home: string

    @IsString()
    @Column('text', {nullable: true})
    work: string

    @IsString()
    @Column('text', {nullable: true})
    other: string
}