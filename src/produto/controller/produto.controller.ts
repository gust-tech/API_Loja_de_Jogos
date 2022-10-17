import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../service/produto.service";

@Controller('/produto')
export class ProdutoCrontoller{
    constructor(private readonly ProdutoService: ProdutoService){}

    @Get()
        @HttpCode(HttpStatus.OK)
             findAll(): Promise<Produto[]> {
                return this.ProdutoService.findAll()
    }

    @Get('/:id')
        @HttpCode(HttpStatus.OK)
            findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
                return this.ProdutoService.findById(id)
    }

    @Get('/produto/:produto')
        @HttpCode(HttpStatus.OK)
            findByTitulo(@Param('titulo') titulo:string): Promise<Produto[]>{
                return this.ProdutoService.findByTitulo(titulo)
    }

    @Post()
        @HttpCode(HttpStatus.CREATED)
            create(@Body() produto: Produto): Promise<Produto>{
                return this.ProdutoService.create(produto)
    }

    @Put()
        @HttpCode(HttpStatus.OK)
            update(@Body() produto: Produto): Promise<Produto>{
                return this.ProdutoService.update(produto)
    }

    @Delete('/:id')
        @HttpCode(HttpStatus.NO_CONTENT)
            delete(@Param('id', ParseIntPipe) id: number){
                return this.ProdutoService.delete(id)
    }

}