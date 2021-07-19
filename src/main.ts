// User modules
import router from "./routes/discord.routes.ts"
import {
	Application
} from 'https://deno.land/x/oak/mod.ts';

//config();

// Server object
const app: Application = new Application();

// Middleware of routes
app.use(router.routes());

// Middleware for let http requests
app.use(router.allowedMethods());

//const PORT = parseInt(Deno.env.get('PORT')) || 7001;

try {
	await app.listen({ port: 3000 });
	console.log(`Denno running on port ${3000}`);
} catch(error) {
	console.error(error);
}
