import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Task } from './models/task.model';

@Component({
  selector: 'vaas-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  task$: Observable<Task[]>;

  content = 'Welcome do Bruno Mineiro App!'

  constructor(
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.task$ = this.db.collection<Task>('/tasks').valueChanges();
  }

}
