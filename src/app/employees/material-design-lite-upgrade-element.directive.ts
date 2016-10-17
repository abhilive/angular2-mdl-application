import { Directive, AfterViewChecked } from '@angular/core';

declare var componentHandler: any;

@Directive({
  selector: '[appMaterialDesignLiteUpgradeElement]'
})
export class MaterialDesignLiteUpgradeElementDirective implements AfterViewChecked {

  constructor() { }

  ngAfterViewChecked() {
        if (componentHandler) {
            componentHandler.upgradeAllRegistered();
        }
    }

}
