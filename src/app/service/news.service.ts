import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api_key = "96e684280a974229b012dbe9d96fa739";

  constructor(private http: HttpClient) { }
  initSources() {
    return this.http
      .get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  }
  getArticlesByid(source: string) {
    return this.http
      .get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
  }
  intitArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
  }
}
