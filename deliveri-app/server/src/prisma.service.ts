// import { Injectable } from '@nestjs/common'
// import { PrismaClient } from './generated/prisma/client'
// import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

// @Injectable()
// export class PrismaService extends PrismaClient {
// 	constructor() {
// 		const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL })
// 		super({ adapter })
// 	}
// }

import { Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
	[x: string]: any
	async onModuleInit() {
		await this.$connect()
	}
}
