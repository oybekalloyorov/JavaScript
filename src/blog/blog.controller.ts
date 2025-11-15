import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';

@Controller('blog')
export class BlogController {
    blogs: BlogDto[];

    constructor() {
        this.blogs = [
            {
                id: 1,
                title: 'NestJS Blog Post',
                excerpt: 'NestJs full Course',
                description: 'Nest js Full Course from 0 to hero',
            },
            {
                id: 2,
                title: 'NextJS Blog Post',
                excerpt: 'NextJs full Course',
                description: 'Next js Full Course from 0 to hero',
            },
            {
                id: 3,
                title: 'NuxtJS Blog Post',
                excerpt: 'NuxtJs full Course',
                description: 'Nuxt js Full Course from 0 to hero',
            }
        ];
    }
    @HttpCode(200)
    @Get()
    async getAll() {
        return this.blogs;
    }

    @HttpCode(201)
    @Post()
    async create(@Body() dto: BlogDto) {
        const data: BlogDto = {
            ...dto,
            id: new Date().getTime(),
        };

        return [...this.blogs, data];
    }
    
}
