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
		this.homeContent = new app.HomeContent;
		this.homeContent.on('sync',this.initializeHomeView, this);
		this.homeContent.fetch({
			success: function(){
				console.log('homeContent fetch success!');
			},
			error: function(){
				console.log('homeContent fetch error!');
			}
		});
	},
	initializeHomeView: function(){
		console.log('initializeHomeView called!');
		console.log(this.homeContent);
		this.homeView = new app.HomeView({collection: this.homeContent});
	},
	initializeChartSectionView: function(){

	},
	initializeMapSectionView: function(){

	},
	initializeMethodologySectionView: function(){

	},
	initializeAboutView: function(){

	},
	initializeDataView: function(){

	}
});

var router = new app.Router();
Backbone.history.start();