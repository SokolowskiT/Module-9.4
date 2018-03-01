function drawTree(numberRows){
	for (i=0; i<numberRows; i++) {
		var star = '*';
		for (j=0; j<i; j++){
			star += '*';
		}
		console.log(star);
	}
}

drawTree(15);