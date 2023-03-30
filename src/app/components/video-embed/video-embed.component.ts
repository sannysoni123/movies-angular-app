import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss']
})
export class VideoEmbedComponent implements OnInit {
  @Input() site: string = 'Youtube';
  @Input() key: string | null = null;
  @Input() name: string | null = null;
  videoUrl: SafeResourceUrl = '';
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    switch (this.site) {
      case 'YouTube':
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.key);
        break;
      case 'Vimeo':
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + this.key);
        break;
    }
  }
}
