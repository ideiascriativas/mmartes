import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-min',
  templateUrl: './search-min.component.html',
  styleUrls: ['./search-min.component.scss']
})
export class SearchMinComponent implements OnInit {

  isOpenSearch: boolean;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchService.currentActionSearch.subscribe(current => this.isOpenSearch = current);
  }

  openSearch() {
    this.searchService.updateSearch(true);
  }

}
