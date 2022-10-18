import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_produto"})
    export class Produto{

        @PrimaryGeneratedColumn()
        id: number
        
        @IsNotEmpty()
        @Column({length: 100, nullable: false})
        titulo: string

        @IsNotEmpty()
        @Column({length: 100, nullable: false})
        editora: string

        @Column({length: 100, nullable: true})
        nota: string

        @ManyToOne(()=> Categoria, (Categoria)=> Categoria.produto)
        categoria: Categoria[]
        
 }