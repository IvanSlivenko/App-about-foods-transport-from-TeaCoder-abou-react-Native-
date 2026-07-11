import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	// 4200/api
	app.setGlobalPrefix('api')
	app.enableCors()
	// await app.listen(process.env.PORT ?? 3000)
	await app.listen(4200)
}
bootstrap()
