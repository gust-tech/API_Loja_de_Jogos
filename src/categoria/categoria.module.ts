import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaCrontoller } from "./controller/categoria.controller";
import { Categoria } from "./entities/categoria.entity";
import { CategoriaService } from "./service/categoria.service";

@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    providers: [CategoriaService],
    controllers:[CategoriaCrontoller],
    exports: [TypeOrmModule]
})
    export class CategoriaModule { }