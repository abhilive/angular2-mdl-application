import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-box',
  template: `<div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                  <label class="mdl-button mdl-js-button mdl-button--icon" for="search-box">
                    <i class="material-icons">search</i>
                  </label>
                  <div class="mdl-textfield__expandable-holder">
                    <input #input (input)="update.emit(input.value)" class="mdl-textfield__input" type="text" id="search-box">
                    <label class="mdl-textfield__label" for="sample-expandable">Expandable Input</label>
                  </div>
                </div>`
})
export class SearchBoxComponent {

	@Output() update = new EventEmitter();
  	constructor() { }

  	ngOnInit() {
  		this.update.emit('');
  	}
}