var score = 0;
		var numberOfRiddles = 0;

		function checkAnswer(inputId, answers){
			var userAnswer = document.getElementById(inputId).value;
			userAnswer = userAnswer.toLowerCase();
			for(var i = 0; i < answers.length; i++){
				if(userAnswer == answers[i]){
					score++;
					numberOfRiddles++;
					return;
				}
			}
			numberOfRiddles++;
		}

	
		function write (text){
			document.getElementById("info").innerHTML = text;
		}	

		function hide (id){
			document.getElementById(id).style.display = "none";
		}

		function show(id){
			document.getElementById(id).style.display = "initial";
		}

		function checkAnswers (){
			
		checkAnswer("userAnswer1",  ["лампочка", "лампа"]);
		checkAnswer("userAnswer2", ["ель", "елка", "ёлка"]);
		checkAnswer("userAnswer3", ["качеля", "качели", "качель"]);


			if (score == numberOfRiddles) {
				
			write('Вы ответили на все ' + numberOfRiddles + ' загадки правильно. Поздравляю!' );
			hide ('button');
			hide ('userAnswer1');
			hide ('userAnswer2');
			hide ('userAnswer3');
				
			} else if (score < numberOfRiddles && score > 0) {

			write('Вы ответили на ' + score + ' из ' + numberOfRiddles + ' загадки правильно.<br> Попробуйте еще раз. Нажмите "Сбросить"' );
			hide('button');
			hide('userAnswer1');
			hide('userAnswer2');
			hide('userAnswer3');
			} else {

			write('Вы не ответили ни на одну из '  + numberOfRiddles + ' загадок правильно.<br> Попробуйте еще раз. Нажмите "Сбросить"' );
			hide('button');
			hide('userAnswer1');
			hide('userAnswer2');
			hide('userAnswer3');
		    }

		}

		function reset(){
			document.getElementById("info").innerHTML = '';
			document.getElementById("userAnswer1").value = '';
			document.getElementById("userAnswer2").value = '';
			document.getElementById("userAnswer3").value = '';
			show('button');
			show('userAnswer1');
			show('userAnswer2');
			show('userAnswer3');
		}