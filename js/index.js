class App {
	//elementy
	genderInput = null;
	initialWeighInput = null;
	desiredWeighInput = null;
	hightImput = null;
	startDataInput = null;
	endDataInput = null;
	button = null;

	DOMElements = {
		genderInput: "gender",
		initialWeighInput: "waightInitial",
		desiredWeighInput: "weightDesired",
		hightImput: "height",
		startDataInput: "StartDate",
		endDataInput: "EndDate",
		button: "[data-button]",
	};

	initializeApp() {
		this.handleElements();
		this.setInitialValues();
		this.addEventListeners();
	}
	setInitialValues() {
		this.initialWeighInput.value = 95;
	}
	addEventListeners() {}
	handleElements() {
		this.genderInput = document.getElementById(this.DOMElements.genderInput);
		this.initialWeighInput = document.getElementById(this.DOMElements.initialWeighInput);
		this.desiredWeighInput = document.getElementById(this.DOMElements.desiredWeighInput);
		this.hightImput = document.getElementById(this.DOMElements.hightImput);
		this.startDataInput = document.getElementById(this.DOMElements.startDataInput);
		this.endDataInput = document.getElementById(this.DOMElements.endDataInput);
		this.button = document.getElementById(this.DOMElements.button);
	}
}
