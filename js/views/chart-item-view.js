var app = app || {};

app.ChartItemView = Backbone.View.extend({
	//template: _.template($('#homeDataTemplate').html()),
	initialize: function(){
		console.log('chartItemView initialized');
		console.log(this.model);
	},
	chartDefaults: {
		column: {
			chart: {
	            height: 400,
	            type:'column'
	        },
	        yAxis:{
	        	title:{
	        		text:null
	        	},
	        	max: 100,
	        	labels: {
	                format: '{value}%'
	            }
	        },
	        tooltip: {
	        	pointFormat: '{series.name}: <b>{point.y}</b><br />',
	        	valueSuffix: '%',
	        	shared: true
	        },
	        plotOptions: {
	        	column: {
			        pointPadding: 0,
			        borderWidth: 0,
			        groupPadding: 0.1,
			        shadow: false
			    }
	        }
		}
	},
	render: function(){
		this.$el.addClass('col-sm-12 chart');
		return this.$el;
	},

	addChart: function(){
		console.log('addChart called');
		var chartOptions = this.model.get('chart');
		chartOptions = _.extend(this.chartDefaults[chartOptions.type],chartOptions);
		chartOptions.chart.renderTo = this.$el[0];
		var chart = new Highcharts.Chart(chartOptions);
	}
});