import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../shared/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = '';
  categoryId = 0;

  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.quizService.categoryId = params['categoryId'];
      this.categoryId = params['categoryId'];
      this.quizService.playerName = localStorage.getItem('playerName') || '';
      this.playerName = localStorage.getItem('playerName') || '';
    });
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}