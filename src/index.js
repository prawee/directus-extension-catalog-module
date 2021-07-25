import ModuleComponent from './module.vue';

export default {
	id: 'catalog',
	name: 'Catalog',
	icon: 'box',
	routes: [
		{
			path: '',
			component: ModuleComponent,
		},
	],
};