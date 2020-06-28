import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  Key = "vDecIzln4r9j0KVddARfAQaXqnAjC9Y2pkh-m6K3RjA";
  tmdbKey = "06f99320c4d4aafa43383b3d6c8da151";
  page = 1;
  per_page = 20;

  getImage() {
    // const Items = 
    return this.httpClient.get(
      `https://api.unsplash.com/photos/?page=${this.page}&per_page=${this.per_page}&client_id=${this.Key}`);
  }
}


// https://api.unsplash.com/photos/?page=${this.page}&per_page=${this.per_page}&client_id=${this.Key}
// https://api.themoviedb.org/3/movie/now_playing?api_key=${this.tmdbKey}


