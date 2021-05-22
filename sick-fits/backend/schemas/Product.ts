import {list} from "@keystone-next/keystone/schema";
import {integer, select, text} from "@keystone-next/fields";
import {Simulate} from "react-dom/test-utils";


export const Product = list({
	// access:

	fields: {
		name: text({
			isRequired: true,
		}),
		description: text({
			ui: {
				displayMode: 'textarea',
			}
		}),
		status: select({
			defaultValue: 'draft',
			options: [
				{label: 'Draft', value: 'draft'},
				{label: 'Available', value: 'available'},
				{label: 'Unavailable', value: 'unavailable'},
			],
			ui: {
				displayMode: 'segmented-control',
				createView: {
					fieldMode: 'hidden',
				}
			}
		}),
		price: integer(),
	}
});

