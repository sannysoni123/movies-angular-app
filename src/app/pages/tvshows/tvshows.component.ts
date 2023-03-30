import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { tv } from 'src/app/models/tv';
import { TvshowsService } from 'src/app/services/tvshows.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit, OnDestroy {
  tvshows: tv[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;
  constructor(private tvshowsService: TvshowsService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getTvShowsByGenre(genreId, 1);
      } else {
        this.getPagedTvShows(1);
      }
    });
  }
  searchChanged() {
    if (this.searchValue) {
      this.getPagedTvShows(1, this.searchValue);
    }
  }
  ngOnDestroy(): void {
    console.log('ngDestroy from tvshows component');
  }
  getPagedTvShows(page: number, searchKeyword?: string) {
    this.tvshowsService.searchTvShows(page, searchKeyword).subscribe((tvshows) => {
      this.tvshows = tvshows;
    });
  }
  getTvShowsByGenre(genreId: string, page: number) {
    this.tvshowsService.getTvShowsByGenre(genreId, page).subscribe((tvshows) => {
      this.tvshows = tvshows;
    });
  }
  onPageChange(event: any) {
    // this.first = event.first;
    // this.rows = event.rows;
    let pageNumber = event.page + 1;
    if (this.genreId) {
      this.getTvShowsByGenre(this.genreId, pageNumber);
    } else {
      if (this.searchValue) {
        this.getPagedTvShows(pageNumber, this.searchValue);
      } else {
        this.getPagedTvShows(pageNumber);
      }
    }
  }
}
