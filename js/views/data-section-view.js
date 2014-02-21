var app = app || {};

app.HomeDataItemView = Backbone.View.extend({
	template: _.template($('#homeDataTemplate').html()),
	render: function(){
		console.log('rendering Data');
		console.log(this.model);
		var imgURL = 'url(../' + this.model.get('imageSource') + ')';
		console.log('imgURL:' + imgURL);
		this.$el.addClass('col-sm-4').html(this.template({
			title: this.model.get('title'),
			text: this.model.get('text'),
			url: this.model.get('url'),
			imageSource: this.model.get('imageSource')
		}));
		console.log(this.el);
		return this.$el;
	},
});