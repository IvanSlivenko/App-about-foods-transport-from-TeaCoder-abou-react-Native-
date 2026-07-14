import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { returnCategoryObject } from './return-category.object'
import { CategoryDto } from './dto/category.dto'
import { generateSlug } from 'src/utils/generate-slug'

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
	async update(id: string, dto: CategoryDto) {
		return this.prisma.category.update({
			where: {
				id
			},
			data: {
				name: dto.name,
				slug: generateSlug(dto.name),
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

	//deleted
	async delete(id: string) {
		return this.prisma.category.delete({
			where: {
				id
			}
		})
	}
}
