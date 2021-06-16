

export const Validate = (input) => {
	let errors = {};
	let reg = /^\d+$/;
	if (!input.name) {
		errors.name = 'Name is required';
	}
	if (!input.hp || input.hp.search(reg) === -1) {
		errors.hp = 'HP is required and it must be a number';
	}
	if (!input.attack || input.attack.search(reg) === -1) {
		errors.attack = 'Attack is required and it must be a number';
	}
	if (!input.defense || input.defense.search(reg) === -1) {
		errors.defense = 'Defense is required and it must be a number';
	}
    if (!input.weight || input.weight.search(reg) === -1) {
        errors.weight = 'Weight is required and it must be a number';
    }
    if (!input.height || input.height.search(reg) === -1) {
        errors.height = 'Height is required and it must be a number';
    }
	if (!input.speed || input.speed.search(reg) === -1) {
		errors.speed = 'Speed is required and it must be a number';
	}
	return errors;
};

export default Validate;
