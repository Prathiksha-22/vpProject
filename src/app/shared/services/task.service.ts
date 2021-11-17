import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL ='http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private model = 'taskData';

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(this.getUrl());
  }

  find(taskId: any) {
    return this.http.get(this.getUrlById(taskId));
  }

  create(task: any) {
     return this.http.post(this.getUrl(), task);
  }

  update(task: any) {
    return this.http.put(this.getUrlById(task.id), task);
  }

  delete(taskId: any) {
    return this.http.delete(this.getUrlById(taskId));
  }

  private getUrl() {
    return`${BASE_URL}${this.model}`;
  }

  private getUrlById(id: any) {
    return `${this.getUrl()}/${id}`;
  }
}
