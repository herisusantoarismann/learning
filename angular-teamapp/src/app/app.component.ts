import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-teamapp';
  newMemberName: string = '';
  members: string[] = [];
  errorMessage: string = '';

  onInput(member: string) {
    this.newMemberName = member;
  }
  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = 'Name cannot be empty!';
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }
}
