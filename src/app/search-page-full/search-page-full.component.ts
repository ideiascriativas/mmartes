import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-page-full',
  templateUrl: './search-page-full.component.html',
  styleUrls: ['./search-page-full.component.scss']
})
export class SearchPageFullComponent implements OnInit {

  isOpenSearch: boolean;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchService.currentActionSearch.subscribe(current => this.isOpenSearch = current);
  }

  closeSearch() {
    this.searchService.updateSearch(false);
  }
}
