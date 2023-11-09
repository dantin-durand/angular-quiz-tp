import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuizService } from '../../shared/services/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, OnDestroy {
  quizContent: any[] = this.quizService.quizContent;
  answeredDate: Map<number, Date> = new Map();
  currentDate = new Date();

  constructor(private quizService: QuizService) {}
  ngOnDestroy(): void {
    this.quizService.resetQuiz();
    this.quizContent = [];
  }

  ngOnInit(): void {
    this.quizService.getQuizContent();
  }

  onAnswerSelected(questionId: number) {
    this.answeredDate.set(questionId, new Date());
  }

  getQuestionDate(questionId: number) {
    return this.answeredDate.get(questionId) || null;
  }
}
