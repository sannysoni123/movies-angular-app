import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { Actor } from '../../models/actor';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from '../../services/actor.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit, OnDestroy {
  actor: Actor | null = null;
  imagesSizes = IMAGE_SIZES;
  constructor(private route: ActivatedRoute, private actorService: ActorService) {}
  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ actorId }) => {
      // param && param.id ?
      this.getActor(actorId);
    });
  }
  ngOnDestroy(): void {}
  getActor(actorId: string) {
    this.actorService.getActor(actorId).subscribe((actorResponse) => {
      this.actor = actorResponse;
    });
  }
}
