import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-teamapp';
  newMemberName: string = '';
  numberOfTeams: number | '' = 0;
  members: string[] = [];
  teams: string[][] = [];
  errorMessage: string = '';

  onInput(member: string) {
    this.newMemberName = member;
  }
  onInputOfTeams(value: string) {
    this.numberOfTeams = Number(value);
  }
  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = 'Name cannot be empty!';
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }
  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = 'Invalid number of teams';
      return;
    }
    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = 'Not enough members';
      return;
    }
    this.errorMessage = '';
    const allMembers = [...this.members];
    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];

        if (!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }

    this.members = [];
    this.numberOfTeams = '';
  }
}
