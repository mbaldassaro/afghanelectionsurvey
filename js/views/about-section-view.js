var app = app || {};

app.HomeAboutItemView = Backbone.View.extend({
	template: _.template($('#homeAboutTemplate').html()),
	render: function(){
		console.log('rendering About');
		console.log(this.model);
		this.$el.addClass('row').html(this.template({
			title: this.model.get('title'),
			text: this.model.get('text'),
			url: this.model.get('url')
		}));
		console.log(this.el);
		return this.$el;
	},
});
