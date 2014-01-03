var app = app || {};

app.Router = Backbone.Router.extend({
	initialize: function(){

	},
	routes: {
		'survey/:id':'survey',
		'survey1':'survey1',
		'survey2':'survey2',
		'survey3':'survey3',
		'main-findings':'mainFindings',
		'about':'about',
		'data':'data',
		'' : 'index' 
	},
	index: function(){
		//  initialize header-view or expand and update if it already exists, remove chart-section-view, map-section-view, and methodology-section-view if they exist
		console.log("Index route");
		this.headerView = new app.HeaderView;
		console.log(this.headerView);
		var homeContent = new app.HomeContent;
		homeContent.fetch({
			success: function(){
				console.log('success');
			}
		});
		this.homeView = new app.HomeView({collection: homeContent});
	},
});

var router = new app.Router();
Backbone.history.start();