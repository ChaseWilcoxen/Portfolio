import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiService) { }

  trenderResults: any =[];

  ngOnInit(): void {
    this.trenderData()
  }

  trenderData(){
    this.service.trenderApiData().subscribe((result)=>{
      console.log(result, 'results');
      this.trenderResults = result.results;
    })
  }

}
