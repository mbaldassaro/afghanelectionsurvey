var app = app || {};

app.HeaderView = Backbone.View.extend({
	el: '#header',
	template: _.template($('#headerTemplate').html()),

	initialize: function(){
		this.render();
		this.$el.addClass('header-expanded');
	},
	collapse: function(){
		this.$el.removeClass('header-expanded').addClass('header-collapsed');
	},
	expand: function(){
		this.$el.removeClass('header-collapsed').addClass('header-expanded');
	},
	render: function(){
		this.$el.html(this.template({}));
	},
	update: function(){

	}
});

