import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('CATEGORIAS_REPOSITORY')
    private categoriasRepository: Repository<Categoria>
  ) {}
    async listar():Promise<Categoria[]>{
      return this.categoriasRepository.find();
    }
  private users: Categoria[] = []; 
  
  create(createUserDto: CreateCategoriaDto) {
    const IdMaxAtual = this.users[this.users.length - 1]?.id||0;
    const id = IdMaxAtual + 1;
    const user = {
      id,
      ...CreateCategoriaDto
    };
    this.users.push(categoria);
    return categoria;
  }

  findAll() {
    return `This action returns all categorias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
