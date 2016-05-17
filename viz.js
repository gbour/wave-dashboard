
mkbar  = function(elt, labels, range, opts) {
	var data = Array();
	for(i = 0; i < range; i++) {
		init = {x: ''};
		labels.forEach(function(l) {
			init[l] = 0;
		});

		data.push(init);
	};
	//console.log(labels, data);

	var graph = new Morris.Bar({
	  element  : elt,
	  data     : data,
	  xkey     : 'x',
	  ykeys    : labels,
	  labels   : labels,
	  hideHover: 'auto'
	  ,stacked  : opts.stacked || false
	});

	console.log(graph);
	return [graph,data];
};

upbar = function([graph, data], value) {
	value.x = (new Date()).toUTCString();

	data.push(value);
	data.shift();

	graph.setData(data);
}


