import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  Items;
  lazyTargets;
  ngOnInit(): void {
    this.apiService.getImage().subscribe((resp: any) => {
        this.Items = resp;
        console.log(resp);
      });
  }

}
