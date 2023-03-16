import { Component } from '@angular/core';
import { RestService } from './home.http.servies';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [
    RestService
  ]
})

export class HomePage {
  public postsList: any[] = [];
  SearchTerm: any;
  List: any[] = [];

  constructor(private restService: RestService) {
    this.getAllPostList();
  }


  public getAllPostList() {
    this.restService.GetConfigrations().subscribe((response: any) => {
      console.log(response);
      this.postsList = response;
      this.List = this.postsList;
    });

  }

  async searchBtnClick() {
    this.postsList = this.List;
    if (this.SearchTerm) {
      if (this.SearchTerm && this.SearchTerm.trim().length > 0) {
        this.postsList = this.List.filter(x =>
          (x.title && x.title.toLowerCase().indexOf(this.SearchTerm.toLowerCase().trim()) >= 0)
        );
      }
    } else {
      this.postsList = this.List;
    }
  }
}
