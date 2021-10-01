import { Component, OnInit } from '@angular/core';
import { LessonService } from "../services/lesson.service";
import { Observable, of } from 'rxjs';
import { Lesson } from "../model/lesson";
import { SwPush } from "@angular/service-worker";
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  lessons$: Observable<Lesson[]>;
  isLoggedIn$: Observable<boolean>;

  constructor(private lessonService: LessonService) {

  }

  ngOnInit() {
    this.loadLessons();
  }


  loadLessons() {
    this.lessons$ = this.lessonService.loadAllLessons().pipe(catchError(err => of([])));
  }

}
