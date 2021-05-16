import 'dotenv/config';
import {config, createSchema} from "@keystone-next/keystone/schema";

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-database';
const sessionConfig = {
	maxAge: (60 * 60 * 24 * 30), // How long user user should sign in.
	secret: process.env.COOKIE_SECRET,
};

export default config({
	server: {
		cors: {
			origin: [process.env.FRONTEND_URL],
			credentials: true,
		}
	},
	db: {
		adapter: 'mongoose',
		url: databaseURL,
		// @TODO: data seeding.
	},
	lists: createSchema({
		// Schema items.
	}),
	ui: {
		// Change this for roles,
		isAccessAllowed: () => {
			return true;
		}
	},
	// @Todo: Session values.
})