import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './categories.component';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<Category[]>('http://localhost:3000/categories');
  }
  getOneCategories(id: number) {
    return this.http.get(`http://localhost:3000/categories/${id}`);
  }
  getQuizByName(name: string) {
    return this.http.get<Category[]>(
      `http://localhost:3000/categories?categoryLabel_like=${name}`
    );
  }
}
