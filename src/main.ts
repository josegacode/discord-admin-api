// User modules
import router from "./routes/discord.routes.ts"
import {
	Application,
	config
} from './deps.ts';

// Server object
const app: Application = new Application();

// Middleware of routes
app.use(router.routes());

// Middleware for let http requests
app.use(router.allowedMethods());

const PORT = parseInt(env.PORT) || 7000;

try {
	await app.listen({ port: PORT });
	console.log(`Denno running on port ${PORT}`);
} catch(error) {
	console.error(error);
}
