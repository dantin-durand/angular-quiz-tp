import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-btn',
  templateUrl: './category-btn.component.html',
  styleUrls: ['./category-btn.component.scss'],
})
export class CategoryBtnComponent {
  @Input() btnTitle: string = '';

  constructor() {}
}
