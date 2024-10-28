import { SECRET_DATA } from '$env/static/private';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET = (() => {
	return json({ SECRET_DATA });
}) satisfies RequestHandler;
