var app = app || {};

app.HomeView = Backbone.View.extend({
	el: '#home-content',
	//template: _.template($('#homeContentTemplate').html()),
	initialize: function(){
		 // create collection for home content and fetch data
		this.render();
	},
	render: function(){
		// this.$el.html(this.template({

		// }));
	}
});

