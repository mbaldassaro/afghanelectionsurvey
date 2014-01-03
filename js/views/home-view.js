var app = app || {};

app.HomeView = Backbone.View.extend({
	el: '#home-content',
	initialize: function(){
		console.log('homeView initializing');
		this.render();
	},
	render: function(){
		console.log('homeView rendering');
		console.log(this.collection);
		this.collection.each(this.addItem, this);
	},
	addItem: function(homeItem){
		console.log('addItem called');
		var homeItemView = new app.HomeItemView({model: homeItem});
		this.$el.append(homeItemView.render());
	}
});

