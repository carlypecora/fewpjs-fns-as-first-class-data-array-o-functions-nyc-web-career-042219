


const wakeDog =	function (dogName, dogBreed) {
	  console.log(`Wake ${dogName} the ${dogBreed}`);
	  return `Wake ${dogName} the ${dogBreed}`;
	}
		
const leashDog = function (dogName, dogBreed){
		console.log(`Leash ${dogName} the ${dogBreed}`);
		return `Leash ${dogName} the ${dogBreed}`;
	}


const walkToPark = function (dogName, dogBreed){
		console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
		return `Walk to the park with ${dogName} the ${dogBreed}`;
	}

const throwFrisbee = function(dogName, dogBreed){
		console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
		return `Throw the frisbee for ${dogName} the ${dogBreed}`;
	}

const walkHome = function(dogName, dogBreed){
		console.log(`Walk home with ${dogName} the ${dogBreed}`);
		return `Walk home with ${dogName} the ${dogBreed}`;

	}

const unleashDog = function(dogName, dogBreed){
		console.log(`Unleash ${dogName} the ${dogBreed}`);
		return `Unleash ${dogName} the ${dogBreed}`;
	}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]


function exerciseDog(dogName, dogBreed){
	let results = [];
	for (var i = 0; i < routine.length; i++){
		results.push(routine[i](dogName, dogBreed))
	}
	return results;
	// return routine.map(func => func(dogName, dogBreed))
}