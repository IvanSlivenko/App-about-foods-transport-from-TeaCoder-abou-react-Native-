import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { returnCategoryObject } from './return-category.object'
import { CategoryDto } from './dto/category.dto'

@Injectable()
export class CategoryService {
	constructor(private prisma: PrismaService) {}

	//getAll
	async getAll() {
		return this.prisma.category.findMany({
			select: returnCategoryObject
		})
	}

	//getById
	async byId(id: string) {
		const category = await this.prisma.category.findUnique({
			where: {
				id
			},
			select: returnCategoryObject
		})
		if (!category) throw new NotFoundException('Category not found')

		return category
	}
	// getByslug
	async bySlug(slug: string) {
		const category = await this.prisma.category.findUnique({
			where: {
				slug
			},
			select: returnCategoryObject
		})
		if (!category) throw new NotFoundException('Category not found')

		return category
	}
	//created
	async create() {
		return this.prisma.category.create({
			data: {
				name: '',
				slug: '',
				image: ''
			}
		})
	}
	//updated
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async update(id: string, dto: CategoryDto) {
		return this.prisma.category.update({
			where: {
				id
			},
			data: {
				name: dto.name,
				slug: dto.name,
				image: dto.image
			}
		})

		const category = await this.prisma.category.findUnique({
			where: {
				id
			},
			select: returnCategoryObject
		})
		if (!category) throw new NotFoundException('Category not found')
		return category
	}
}
