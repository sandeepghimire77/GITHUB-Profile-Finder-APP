import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({

  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _githubService:GithubService) {
  // here we set up the GithubService that we imported
  }

  ngOnInit() {
  }

}
