import { Injectable } from '@angular/core';

@Injectable()
export class ConfirmService {

  constructor() { }

  activate: (message?: string, title?: string) => Promise<boolean>;
}