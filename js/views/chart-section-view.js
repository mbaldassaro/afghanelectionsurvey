var app = app || {};

app.ChartView = Backbone.View.extend({
	el: '#chart-content .row',
	initialize: function(){
		console.log('chartView initializing');
		this.render();
	},
	render: function(){
		console.log('chartView rendering');
		// console.log(this.collection);
		this.collection.each(this.addItem, this);
	},
	addItem: function(chartItem){
		console.log('chartView addItem called');
		var chartItemView = new app.ChartItemView({model: chartItem});
		this.$el.append(chartItemView.render());
		chartItemView.addChart();
	}
});