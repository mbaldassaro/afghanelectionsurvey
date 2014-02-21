var app = app || {};

app.HomeItemView = Backbone.View.extend({
	template: _.template($('#homeBlurbTemplate').html()),
	render: function(){
		console.log('rendering Blurb');
		console.log(this.model);
		this.$el.addClass('col-sm-4').html(this.template({
			title: this.model.get('title'),
			text: this.model.get('text'),
			button: this.model.get('button'),
			imageSource: this.model.get('imageSource'),
			url: this.model.get('url')
		}));
		console.log(this.el);
		return this.$el;
	},
});

