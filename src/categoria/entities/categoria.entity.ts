import { IsNotEmpty } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_categoria"})
    export class Categoria{

        @PrimaryGeneratedColumn()
        id: number
        
        @IsNotEmpty()
        @Column({length: 30, nullable: false})
        genero: string

        @IsNotEmpty()
        @Column({length: 255, nullable: false})
        plataforma: string

        @OneToMany(() => Produto, (produto)=> produto.titulo)
        static id: any;

 }