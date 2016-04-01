var programmingTest = {

	titleCreation: function() {
		var h1 = document.createElement('h1');
		var parent = document.body;
		h1.className = "title";
		h1.innerHTML = "Тест по программированию";
		parent.appendChild(h1);
	},

	testItemOne: function() {

		var firstTitle = document.createElement('h2');
		var parent = document.body;
		firstTitle.className = "item_title";
		firstTitle.innerHTML = "1. Вопрос №1";
		parent.appendChild(firstTitle);


		var firstList = document.createElement('ul');
		var parent = document.body;
		firstList.className = "unstyled";
		parent.appendChild(firstList);


		var firstLi = document.createElement('li');
		firstLi.className = "item_answer";
		firstList.appendChild(firstLi);

		var firstCheckboxLabel= document.createElement("label");
		firstLi.appendChild(firstCheckboxLabel);

		var firstCheckbox = document.createElement('input');
		firstCheckbox.type = "checkbox";
		firstCheckboxLabel.appendChild(firstCheckbox);

		var firstCheckboxText = document.createElement('span');
		firstCheckboxText.innerHTML = "Вариант ответа №1";
		firstCheckboxLabel.appendChild(firstCheckboxText);

		
		var secondLi = document.createElement('li');
		secondLi.className = "item_answer";
		firstList.appendChild(secondLi);

		var secondCheckboxLabel= document.createElement("label");
		secondLi.appendChild(secondCheckboxLabel);

		var secondCheckbox = document.createElement('input');
		secondCheckbox.type = "checkbox";
		secondCheckboxLabel.appendChild(secondCheckbox);

		var secondCheckboxText = document.createElement('span');
		secondCheckboxText.innerHTML = "Вариант ответа №2";
		secondCheckboxLabel.appendChild(secondCheckboxText);


		var thirdLi = document.createElement('li');
		thirdLi.className = "item_answer";
		firstList.appendChild(thirdLi);

		var thirdCheckboxLabel= document.createElement("label");
		thirdLi.appendChild(thirdCheckboxLabel);

		var thirdCheckbox = document.createElement('input');
		thirdCheckbox.type = "checkbox";
		thirdCheckboxLabel.appendChild(thirdCheckbox);

		var thirdCheckboxText = document.createElement('span');
		thirdCheckboxText.innerHTML = "Вариант ответа №3";
		thirdCheckboxLabel.appendChild(thirdCheckboxText);
	},

	testItemTwo: function() {

		var secondTitle = document.createElement('h2');
		var parent = document.body;
		secondTitle.className = "item_title";
		secondTitle.innerHTML = "2. Вопрос №2";
		parent.appendChild(secondTitle);


		var secondList = document.createElement('ul');
		var parent = document.body;
		secondList.className = "unstyled";
		parent.appendChild(secondList);


		var firstLi = document.createElement('li');
		firstLi.className = "item_answer";
		secondList.appendChild(firstLi);

		var firstCheckboxLabel= document.createElement("label");
		firstLi.appendChild(firstCheckboxLabel);

		var firstCheckbox = document.createElement('input');
		firstCheckbox.type = "checkbox";
		firstCheckboxLabel.appendChild(firstCheckbox);

		var firstCheckboxText = document.createElement('span');
		firstCheckboxText.innerHTML = "Вариант ответа №1";
		firstCheckboxLabel.appendChild(firstCheckboxText);

		
		var secondLi = document.createElement('li');
		secondLi.className = "item_answer";
		secondList.appendChild(secondLi);

		var secondCheckboxLabel= document.createElement("label");
		secondLi.appendChild(secondCheckboxLabel);

		var secondCheckbox = document.createElement('input');
		secondCheckbox.type = "checkbox";
		secondCheckboxLabel.appendChild(secondCheckbox);

		var secondCheckboxText = document.createElement('span');
		secondCheckboxText.innerHTML = "Вариант ответа №2";
		secondCheckboxLabel.appendChild(secondCheckboxText);


		var thirdLi = document.createElement('li');
		thirdLi.className = "item_answer";
		secondList.appendChild(thirdLi);

		var thirdCheckboxLabel= document.createElement("label");
		thirdLi.appendChild(thirdCheckboxLabel);

		var thirdCheckbox = document.createElement('input');
		thirdCheckbox.type = "checkbox";
		thirdCheckboxLabel.appendChild(thirdCheckbox);

		var thirdCheckboxText = document.createElement('span');
		thirdCheckboxText.innerHTML = "Вариант ответа №3";
		thirdCheckboxLabel.appendChild(thirdCheckboxText);
	},

	testItemThree: function() {

		var thirdTitle = document.createElement('h2');
		var parent = document.body;
		thirdTitle.className = "item_title";
		thirdTitle.innerHTML = "3. Вопрос №3";
		parent.appendChild(thirdTitle);


		var thirdList = document.createElement('ul');
		var parent = document.body;
		thirdList.className = "unstyled";
		parent.appendChild(thirdList);


		var firstLi = document.createElement('li');
		firstLi.className = "item_answer";
		thirdList.appendChild(firstLi);

		var firstCheckboxLabel= document.createElement("label");
		firstLi.appendChild(firstCheckboxLabel);

		var firstCheckbox = document.createElement('input');
		firstCheckbox.type = "checkbox";
		firstCheckboxLabel.appendChild(firstCheckbox);

		var firstCheckboxText = document.createElement('span');
		firstCheckboxText.innerHTML = "Вариант ответа №1";
		firstCheckboxLabel.appendChild(firstCheckboxText);

		
		var secondLi = document.createElement('li');
		secondLi.className = "item_answer";
		thirdList.appendChild(secondLi);

		var secondCheckboxLabel= document.createElement("label");
		secondLi.appendChild(secondCheckboxLabel);

		var secondCheckbox = document.createElement('input');
		secondCheckbox.type = "checkbox";
		secondCheckboxLabel.appendChild(secondCheckbox);

		var secondCheckboxText = document.createElement('span');
		secondCheckboxText.innerHTML = "Вариант ответа №2";
		secondCheckboxLabel.appendChild(secondCheckboxText);


		var thirdLi = document.createElement('li');
		thirdLi.className = "item_answer";
		thirdList.appendChild(thirdLi);

		var thirdCheckboxLabel= document.createElement("label");
		thirdLi.appendChild(thirdCheckboxLabel);

		var thirdCheckbox = document.createElement('input');
		thirdCheckbox.type = "checkbox";
		thirdCheckboxLabel.appendChild(thirdCheckbox);

		var thirdCheckboxText = document.createElement('span');
		thirdCheckboxText.innerHTML = "Вариант ответа №3";
		thirdCheckboxLabel.appendChild(thirdCheckboxText);
	},

	buttonCreation: function() {
		var button = document.createElement('button');
		button.innerHTML = "Проверить мои результаты";
		var parent = document.body;
		parent.appendChild(button);
	}
}

programmingTest.titleCreation ();
programmingTest.testItemOne ();
programmingTest.testItemTwo ();
programmingTest.testItemThree ();
programmingTest.buttonCreation ();





