import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriasService {
  constructor(
    @Inject('CATEGORIAS_REPOSITORY')
    private categoriasRepository: Repository<Categoria>
  ) {}
    async listar():Promise<Categoria[]>{
      return this.categoriasRepository.find();
    }
  private categorias: Categoria[] = []; 
  
  create(createCategoriaDto: CreateCategoriaDto) {
    const IdMaxAtual = this.categorias[this.categorias.length - 1]?.id||0;
    const id = IdMaxAtual + 1;
    const categoria = {
      id,
      ...createCategoriaDto
    };
    this.categorias.push(categoria);
    return categoria;
  }

  findAll() {
    return this.categorias;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    const index = this.categorias.findIndex((categoria)=> categoria.id === id);

    return this.categorias[index];
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
