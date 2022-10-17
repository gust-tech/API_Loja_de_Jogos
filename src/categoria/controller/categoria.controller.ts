import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../service/categoria.service";

@Controller('/categoria')
export class CategoriaCrontoller{
    constructor(private readonly CategoriaService: CategoriaService){}

    @Get()
        @HttpCode(HttpStatus.OK)
             findAll(): Promise<Categoria[]> {
                return this.CategoriaService.findAll()
    }

    @Get('/:id')
        @HttpCode(HttpStatus.OK)
            findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
                return this.CategoriaService.findById(id)
    }

    @Get('/genero/:genro')
        @HttpCode(HttpStatus.OK)
            findByNick(@Param('genero') genero:string): Promise<Categoria[]>{
                return this.CategoriaService.findByGenero(genero)
    }

    @Post()
        @HttpCode(HttpStatus.CREATED)
            create(@Body() categoria: Categoria): Promise<Categoria>{
                return this.CategoriaService.create(categoria)
    }

    @Put()
        @HttpCode(HttpStatus.OK)
            update(@Body() categoria: Categoria): Promise<Categoria>{
                return this.CategoriaService.update(categoria)
    }

    @Delete('/:id')
        @HttpCode(HttpStatus.NO_CONTENT)
            delete(@Param('id', ParseIntPipe) id: number){
                return this.CategoriaService.delete(id)
    }

}