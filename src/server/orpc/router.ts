import { os } from '@orpc/server'

export const helloProducer = os.handler(() => {
	return {
		msg: 'hello World',
	}
})

export const router = {
	hello: helloProducer,
}
