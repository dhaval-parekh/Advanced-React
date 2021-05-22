import 'dotenv/config';
import {config, createSchema} from "@keystone-next/keystone/schema";
import {User} from "./schemas/User";
import {Product} from "./schemas/Product";
import {createAuth} from "@keystone-next/auth";
import {statelessSessions, withItemData} from "@keystone-next/keystone/session";
import {ProductImage} from "./schemas/ProductImage";
import {insertSeedData} from "./seed-data";

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-database';

const sessionConfig = {
	maxAge: (60 * 60 * 24 * 30), // How long user should sign in.
	secret: process.env.COOKIE_SECRET,
};

const {withAuth} = createAuth({
	listKey: 'User',
	identityField: 'email',
	secretField: 'password',
	initFirstItem: {
		fields: ['name', 'email', 'password'],
		// @Todo: add initial role.
	}
});

export default withAuth(config({
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
		async onConnect(keystone) {
			if (process.argv.includes('--seed-data')) {
				await insertSeedData(keystone);
			}
		},
	},
	lists: createSchema({
		User,
		Product,
		ProductImage,
	}),
	ui: {
		// Show UI for only use that pass this.
		isAccessAllowed: ({session}) => {
			return !!session ? session.data : false;
		}
	},
	session: withItemData(statelessSessions(sessionConfig), {
		User: `id name email`,
	})
}));
