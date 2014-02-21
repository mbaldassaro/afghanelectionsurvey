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
	addItem: function(homeContentItem){
		console.log('addItem called');
		if(homeContentItem.get('content-type') === 'blurb'){
			var homeItemView = new app.HomeItemView({model: homeContentItem});
			this.$el.find('#blurb').append(homeItemView.render());
		}
		else if(homeContentItem.get('content-type') === 'about'){
			var homeAboutItemView = new app.HomeAboutItemView({model: homeContentItem});
			this.$el.find('#about').append(homeAboutItemView.render());
		}
		else if(homeContentItem.get('content-type') === 'data'){
			var homeDataItemView = new app.HomeDataItemView({model: homeContentItem});
			this.$el.find('#data-content-row').append(homeDataItemView.render());
		}
	}
});

