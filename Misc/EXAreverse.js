// For the latest Axiom VirtualNetwork+ scripting documentation, 
// please visit: http://www.zachtronics.com/virtualnetwork/

function getTitle() {
    return "REVERSE THE INPUT";
}

function getSubtitle() {
    return "POWERED BY EXAS®";
}

function getDescription() {
    return "Take input from #INPT ending with zero, reverse it and output to #OUTP.\nYou are not allowed to create file.";
}

function initializeTestRun(testRun) {
    targetHost = createHost("target", 5, 0, 300, 3);
	banFile = createHost("banFile", -1e9, 5, 1, 1)
	for(var i=0; i<100; i++) setFileInitiallyCollapsed(createNormalFile(banFile, 400+i, FILE_ICON_USER, []));
	var inputValues = [];
	n = randomInt(8, 32);
	for (var i = 0; i < n; i++) {
		inputValues[i] = randomString(4);
	}
	//printConsole(inputValues);
	createTable('DATA', 100, 0, 'Reverse the input');
	addTableInput("INPUT", inputValues.concat(0), createRegister(targetHost, 7, 2, "INPT"));
	addTableOutput("OUTPUT", inputValues.reverse(), createRegister(targetHost, 7, 0, "OUTP"));
}

function onCycleFinished() {
}

function randomString(n) {
	return n?randomString(n-1)+(String.fromCharCode(randomInt(33, 126))):'';
}

/*
?     c814319859762562   NEW SOLUTION 1               
   XA?  LINK 800
MARK N
COPY #INPT T
ADDI X 2 X
TJMP NOEND
MARK END
COPY X M
JUMP END

MARK NOEND
REPL N
LINK -1
COPY X M
COPY T X
COPY M T
LINK 800
SUBI M T T
MULI T M T
MARK DELAY
SUBI T 1 T
TJMP DELAY
COPY X #OUTP

                                                                                                     
   XB'   MARK START
COPY M T
COPY T M
JUMP START                                                                                                     
*/
