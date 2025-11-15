import { Injectable } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';

@Injectable()
export class BlogService {
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
    async getAllBlogs() {
        return this.blogs;
    }

    async create(dto: BlogDto) {
        const data: BlogDto = {
            ...dto,
            id: new Date().getTime(),
        };

        return [...this.blogs, data];
    }

    async getById(id: string) {
        return this.blogs.find((item) => item.id === Number(id));
    }

    async update(id: string, dto: BlogDto) {
        let currentBlog = await this.blogs.find((item) => item.id === Number(id));
        currentBlog = dto;
        return currentBlog;
    }

    async delete(id: string) {
         return this.blogs.filter((item) => item.id !== Number(id));
    }
}
