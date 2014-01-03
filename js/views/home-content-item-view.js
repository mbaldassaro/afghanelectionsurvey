var app = app || {};

app.HomeItemView = Backbone.View.extend({
	template: _.template($('#homeItemTemplate').html()),
	render: function(){
		console.log('rendering');
		console.log(this.model);
		this.$el.addClass('col-sm-4').html(this.template({
			title: this.model.get('title'),
			text: this.model.get('text'),
			button: this.model.get('button'),
			imageSource: this.model.get('imageSource'),
		}));
		return this.$el;
	},
});

