import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../repo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User;
  users = [];
  repo: Repo;
  repos = [];

  constructor(public serviceService: ServiceService, http: HttpClient) {}

  performSearch(searchTerm): any {

    this.serviceService.getProfileInfo(searchTerm).then(
      (result) => {
        this.user = this.serviceService.user;
      },
      (error) => {
        console.log(error);
      }
    );
    this.serviceService.getRepoInfo(searchTerm).then(
      (result) => {
        this.repo = this.serviceService.repo;
        this.repos.push(this.repo);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.performSearch('sawe-daisy');
  }
}
