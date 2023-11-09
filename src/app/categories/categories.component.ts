import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CategoriesService } from './categories.service';

export type Category = {
  id: number;
  categoryLabel: string;
};

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CategoriesService],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  searchTerm: string = '';

  constructor(
    private CategoriesService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.CategoriesService.getCategories().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
        this.searchTerm = '';
      }
    );
  }

  searchCategory() {
    this.CategoriesService.getQuizByName(
      this.searchTerm.toLocaleLowerCase()
    ).subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  navigateToQuiz(category: Category) {
    this.router.navigate(['/quiz', category.id]);
  }

  resetFilter() {
    this.CategoriesService.getCategories().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
        this.searchTerm = '';
      }
    );
  }
}
