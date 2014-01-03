var app = app || {};

app.HomeContent = Backbone.Collection.extend({
	model: app.HomeContentItem,
	url: 'js/data/data.json'
});
