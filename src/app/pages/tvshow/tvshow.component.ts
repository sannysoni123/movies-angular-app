import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tv, TvCredits, TvImages, TvVideos } from '../../models/tv';
import { TvshowsService } from '../../services/tvshows.service';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit, OnDestroy {
  tvshow: tv | null = null;
  imagesSizes = IMAGE_SIZES;
  tvVideos: TvVideos[] = [];
  tvImages: TvImages | null = null;
  tvCredits: TvCredits | null = null;
  constructor(private route: ActivatedRoute, private tvshowsService: TvshowsService) {}
  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      // param && param.id ?
      this.getTv(id);
      this.getTvVideos(id);
      this.getTvImages(id);
      this.getTvCredits(id);
      //     this.getSimilarMovies(id);
    });
  }
  ngOnDestroy(): void {}
  getTvVideos(id: string) {
    this.tvshowsService.getTvVideos(id).subscribe((tvVideoData) => {
      this.tvVideos = tvVideoData;
    });
  }
  // getSimilarMovies(id: string) {
  //   this.moviesService.getSimilarMovies(id).subscribe((similarMovies) => {
  //     this.similarMovies = similarMovies;
  //   });
  // }
  getTvImages(id: string) {
    this.tvshowsService.getTvImages(id).subscribe((tvImagesData) => {
      this.tvImages = tvImagesData;
    });
  }
  getTvCredits(id: string) {
    this.tvshowsService.getTvCredits(id).subscribe((tvCreditsData) => {
      this.tvCredits = tvCreditsData;
      this.tvCredits.cast = this.tvCredits.cast.filter((credit) => credit.profile_path !== null);
    });
  }
  getTv(id: string) {
    this.tvshowsService.getTv(id).subscribe((tvData) => {
      this.tvshow = tvData;
    });
  }
}
