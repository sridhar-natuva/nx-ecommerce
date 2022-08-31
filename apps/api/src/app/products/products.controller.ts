import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('products')
export class ProductsController {

    @Get()
    getAllProducts(@Req() request: Request): any[] {
        return [
            { id: 'A100', name: 'A', category: 'cloths', price: 100 },
            { id: 'A101', name: 'B', category: 'groceries', price: 100 },
            { id: 'A102', name: 'C', category: 'groceries', price: 100 },
            { id: 'A103', name: 'D', category: 'electronics', price: 100 },
            { id: 'A104', name: 'E', category: 'cloths', price: 100 },
            { id: 'A105', name: 'F', category: 'electronics', price: 100 },
            { id: 'A106', name: 'G', category: 'cloths', price: 100 },
            { id: 'A107', name: 'H', category: 'electronics', price: 100 }
        ];
    }
}
