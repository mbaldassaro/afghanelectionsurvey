var app = app || {};

app.HomeContent = Backbone.Collection.extend({
	model: app.HomeContentItem,
	url: 'js/data/data.json',
	// sync: function(method, model, options){
	// 	var params = _.extend({
	// 		dataType: 'jsonp',
	// 		error: function(e, eText, eThrown){
	// 			console.log("error");
	// 			console.log(e);
	// 			console.log(eText);
	// 			console.log(eThrown);
	// 		},
	// 		processData: false,
	// 		success: function(data){
	// 			console.log("success");
	// 			console.log(data);
	// 		},
	// 		type: 'GET',
	// 		url: this.url
	// 	},options);
	// 	return $.ajax(params);
	// },
	// parse: function(response){	
	// 	var rawData = response.feed.entry,
	// 		data = [],
	// 		rowTemp = {},
	// 		keyRow = [],
	// 		lastRow = 0;
	// 	for (var i in rawData){  // could refactor to use forEach and make more efficient by knowing number of columns 
	// 		var thisRow = parseInt(rawData[i].link[0].href.substring(rawData[i].link[0].href.lastIndexOf("R")+1, rawData[i].link[0].href.lastIndexOf("C")));
	// 		var thisColumn = parseInt(rawData[i].link[0].href.substring(rawData[i].link[0].href.lastIndexOf("C")+1, rawData[i].link[0].href.length));
	// 		if (thisRow > lastRow) { // If we begin a new row
	// 			lastRow = thisRow;
	// 			if(thisRow === 1) { // First Row - consists of column headers that will be keys for our data object 
	// 				keyRow.push(rawData[i].content.$t);
	// 			}
	// 			else { // After First Row - keyRow is filled and useable
	// 				var currentKey = keyRow[thisColumn - 1];
					
	// 				if(thisRow === 2){ // Second Row - first instance of real data, start adding to our rowTemp variable
	// 					rowTemp[currentKey] = rawData[i].content.$t;
	// 				}
	// 				else { // All other rows - the rowTemp variable will be full and we puch it to data, then reset it and start refilling
	// 					data.push(rowTemp);
	// 					rowTemp = new Object(); 
	// 					rowTemp[currentKey] = rawData[i].content.$t;
	// 				}
	// 			}
	// 		}
	// 		else { // We are not starting a new row
	// 			if(thisRow === 1){ // We are in the first row, and should add column headers to our keyRow variable
	// 				keyRow.push(rawData[i].content.$t);
	// 			}
	// 			else { // We are dealing with values and rowTemp is not full, so we should add them to our rowTemp variable
	// 				var currentKey = keyRow[thisColumn - 1];
	// 				rowTemp[currentKey] = rawData[i].content.$t;
	// 			}
	// 		}
	// 	}
	// 	data.push(rowTemp); // After for loop rowTemp is still full with last rown of data. So we push it into data and are done.
	// 	data = _.filter(data, function(row){return row.sector !== 'psc';});
	// 	return data;
	// }
});
