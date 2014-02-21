var app = app || {};

app.SurveyContent = Backbone.Collection.extend({
	model: app.SurveyContentItem,
	url: 'js/data/data-survey-content.json'
});
