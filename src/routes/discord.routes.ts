import { Router, Request, Response } from 'https://deno.land/x/oak/mod.ts';
import * as controller from '../controllers/index.controller.ts';

const router = new Router();

router
	.get('/', ({ response }: { response: Response }) => {
		response.body = 'Hello World';
	});

export default router;

