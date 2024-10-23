import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './entities/product'; // Das GraphQL-Produkt-Entity

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  // Query zum Abrufen aller Produkte
  @Query(() => [Product], { name: 'getAllProducts' })
  findAll() {
    return this.productService.findAll();
  }

  // Mutation zum Erstellen eines neuen Produkts
  @Mutation(() => Product)
  createProduct(@Args('name') name: string) {
    return this.productService.create({ name });
  }
}