import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { returnProductObject } from './return-product.object'
import { ProductDto } from './dto/product.dto'
import { generateSlug } from 'src/utils/generate-slug'
import { CategoryService } from 'src/category/category.service'

@Injectable()
// export class ProductService {}

////////////////////////////////////////////////////////

@Injectable()
// export class CategoryService {
export class ProductService {
	constructor(
		private prisma: PrismaService,
		private categoryService: CategoryService
	) {}

	//getAll
	async getAll(searchTerm?: string) {
		if (searchTerm) return this.search(searchTerm)

		return this.prisma.product.findMany({
			select: returnProductObject,
			orderBy: {
				createdAt: 'desc'
			}
		})
	}

	async search(searchTerm: string) {
		return this.prisma.product.findMany({
			where: {
				OR: [
					{
						name: {
							contains: searchTerm,
							mode: 'insensitive'
						}
					},
					{
						description: {
							contains: searchTerm,
							mode: 'insensitive'
						}
					}
				]
			},
			select: returnProductObject
		})
	}

	// getBySlug
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

	// getByCategory
	async byCategory(categorySlug: string) {
		const products = await this.prisma.product.findMany({
			where: {
				category: {
					slug: categorySlug
				}
			},
			select: returnProductObject
		})
		if (!products) throw new NotFoundException('Products not found')

		return products
	}
	//created
	async create() {
		const name = `New product ${Date.now()}`
		return this.prisma.product.create({
			data: {
				name: name,
				slug: generateSlug(name),
				image: '',
				description: '',
				price: 0
			}
		})
	}
	//updated
	async update(id: string, dto: ProductDto) {
		const { name, description, price, categoryId, image } = dto

		await this.categoryService.byId(categoryId)

		return this.prisma.product.update({
			where: {
				id
			},
			data: {
				name,
				description,
				price,
				// image,
				slug: generateSlug(name),
				category: {
					connect: {
						id: categoryId
					}
				},
				image
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
