import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Repo } from './repo';
import { resolve, reject } from '../../node_modules/@types/q';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  user: User;
  repo: Repo;

  id = environment.gitApi;
  repositories;
  private username: string;
  private client_id = '2c31944ff336b7283f4a';
  private client_secret = 'd8e6f45409de394ef11ef2ffe43d31f417085177';

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', 0, 0, '', '', new Date);
    this.repo = new Repo('', '', '', '');
  }

  getProfileInfo(term: string): any {
    interface expected {
      login: any;
      avatar_url: any;
      public_repos: any;
      following: number;
      followers: number;
      email: any;
      bio: any;
      created_at: Date;
    }


    let promise = new Promise((resolve, reject) => {
    this.http.get<expected>('https://api.github.com/users/' + term +
    '?client_id=' + this.client_id +
    '&client_secret' + this.client_secret).toPromise().then(res => {
      this.user = new User(
        res.login,
        res.avatar_url,
        res.public_repos,
        res.following,
        res.followers,
        res.email,
        res.bio,
        res.created_at
      );

      resolve();
    },

    error => {
      console.log(error);
    });
  });
  return promise;
}
  getRepoInfo(term: string): any{
    interface expected{
      name: any;
      description: any;
      language: string;
      repos_url: any;

    }

    let promise = new Promise((resolve, reject) => {
      this.http.get('https://api.github.com/users/' + term + '/repos' +
      '?client_id=' + this.client_id +
      '&client_secret' + this.client_secret).toPromise().then(res => {
        this.repositories = res;
        console.log(this.repositories);

        resolve();

      },
      error => {
        console.log(error);
      }
      );
    });

    return promise;
  }
}
