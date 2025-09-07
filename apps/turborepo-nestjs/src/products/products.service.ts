import { Injectable } from '@nestjs/common';
import { CreateProductRequest } from '@repo/types';

@Injectable()
export class ProductsService {
  createProduct(createProductRequest: CreateProductRequest) {}

  getProducts() {}
}
