import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { returnCategoryObject } from './return-category.object'
import { CategoryDto } from './dto/category.dto'
import { generateSlug } from 'src/utils/generate-slug'

@Injectable()
// export class ProductService {}

////////////////////////////////////////////////////////

@Injectable()
// export class CategoryService {
export class ProductService {
	constructor(private prisma: PrismaService) {}

	//getAll

	//getById
	async byId(id: string) {
		const product = await this.prisma.product.findUnique({
			where: {
				id
			},
			select: returnProductObject
		})
		if (!product) throw new NotFoundException('Product not found')

		return product
	}
	// getByslug
	async bySlug(slug: string) {
		const product = await this.prisma.product.findUnique({
			where: {
				slug
			},
			select: returnProductObject
		})
		if (!product) throw new NotFoundException('Product not found')

		return product
	}
	//created
	async create() {
		return this.prisma.product.create({
			data: {
				name: '',
				slug: '',
				image: ''
			}
		})
	}
	//updated
	async update(id: string, dto: ProductDto) {
		return this.prisma.product.update({
			where: {
				id
			},
			data: {
				name: dto.name,
				slug: generateSlug(dto.name),
				image: dto.image
			}
		})

		const product = await this.prisma.product.findUnique({
			where: {
				id
			},
			select: returnProductObject
		})
		if (!product) throw new NotFoundException('Product not found')
		return product
	}

	//deleted
	async delete(id: string) {
		return this.prisma.product.delete({
			where: {
				id
			}
		})
	}
}
