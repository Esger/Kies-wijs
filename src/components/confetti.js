import { inject } from "aurelia-framework";

@inject(Element)
export class ConfettiCustomAttribute {
	constructor(element) {
		this._element = element;
		this._element.classList.add('confetti-button');
	}
	attached() {
		this._element.addEventListener('click', (event) => {
			this.confetti(event);
		});
	}
	detached() {
		this._element.removeEventListener();
	}
	confetti(event) {
		event.preventDefault();
		//reset animation
		event.target.classList.remove('animate');

		event.target.classList.add('animate');
		setTimeout(function () {
			event.target.classList.remove('animate');
		}, 700);
	}
}
