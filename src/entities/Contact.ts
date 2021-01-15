import {BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {IsString, IsEmail} from "class-validator";
import Phone from "./Phone";
import Address from "./Address";

@Entity()
export default class Contact extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column('text', {nullable: false})
    firstNames: string

    @IsString()
    @Column('text', {nullable: false})
    lastName: string

    @IsEmail()
    @Column('text', {nullable: true})
    email: string

    @OneToOne(() => Phone, {cascade: true, onDelete: "CASCADE", onUpdate: "CASCADE", nullable: false})
    @JoinColumn({name: 'phone_id'})
    public phone: Phone;

    @OneToOne(() => Address, {cascade: true, onDelete: "CASCADE", onUpdate: "CASCADE", nullable: true})
    @JoinColumn({name: 'address_id'})
    public address: Address;

}