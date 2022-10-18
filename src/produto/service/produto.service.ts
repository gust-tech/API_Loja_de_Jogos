import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Produto } from "../entities/produto.entity";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
            @InjectRepository(Produto)
            private ProdutoRepository: Repository<Produto>
    ) {}

    async findAll(): Promise<Produto[]> {
        return await this.ProdutoRepository.find({
            relations: {
            
            }
        })
    }

    async findById(id: number):Promise<Produto> {

            let produto = await this.ProdutoRepository.findOne({
                where: { 
                    id
                },
                relations:{
                
                }
            })

        if (!produto)
            throw new HttpException('Produto não existe', HttpStatus.NOT_FOUND)

        return produto
    }

    async findByTitulo(titulo: string): Promise<Produto[]> {
        return await this.ProdutoRepository.find({
            where: {
                titulo: ILike(`%${titulo}%`)
            },
            relations:{
            
            }
        })
    }

    async create(produto: Produto): Promise<Produto>{
        return await this.ProdutoRepository.save(produto)
    }

    async update(produto: Produto): Promise<Produto>{
        let buscarProduro = await this.findById(produto.id)
    
        if(!buscarProduro || !produto.id)
            throw new HttpException('O produto não existe', HttpStatus.NOT_FOUND)

            return await this.ProdutoRepository.save(produto)
    }

    async delete(id: number): Promise<DeleteResult>{
        let buscarProduto = await this.findById(id)

        if(!buscarProduto)
            throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND)

            return await this.ProdutoRepository.delete(id)
    }

}