import {list} from "@keystone-next/keystone/schema";
import {integer, relationship, select, text} from "@keystone-next/fields";
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
		photo: relationship({
			ref: 'ProductImage.product',
			ui: {
				displayMode: 'cards',
				cardFields: [
					'image',
					'altText',
				],
				inlineCreate: {
					fields: [
						'image',
						'altText',
					]
				},
				inlineEdit: {
					fields: [
						'image',
						'altText',
					]
				}
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

