function drawTree(numberRows){
	for (i=0; i<numberRows; i++) {
		var star = '',
			space = '';
		
		for (j=0; j<numberRows-i-1; j++){
			space += ' ';
			}
		for (j=0; j<i+1; j++){
			star += '*';
			}
		for (j=0; j<i; j++){
			star += '*';
		}
		console.log(space + star);
	}
}

drawTree(5);