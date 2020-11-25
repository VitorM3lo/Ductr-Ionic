import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {
  StreamingMedia,
  StreamingVideoOptions
} from '@ionic-native/streaming-media/ngx';
import { MenuController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { SubtitleData } from '../entities/SubtitleData';
import { SubtitleService } from '../services/subtitle/subtitle.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss'],
})
export class ViewPageComponent implements OnInit {
  link: string;
  languages: string[];
  subtitles: SubtitleData[];
  vtt: SafeUrl;

  movieId: number;
  selectedLanguage = '';
  selectedSubtitle: SubtitleData;

  subtitleError = false;
  subtitleLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private streamingMedia: StreamingMedia,
    private subtitleService: SubtitleService,
    private menu: MenuController,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const options: StreamingVideoOptions = {
      successCallback: () => {
        console.log('Video played');
      },
      errorCallback: (e) => {
        console.log('Error streaming');
      },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: true,
    };

    this.activatedRoute.params.pipe(first()).subscribe((params) => {
      this.link = `http://localhost:8080/stream?id=${params.movie}`;
      this.movieId = params.movie;
      // this.streamingMedia.playVideo(
      //   `https://localhost:8080/stream?id=${params.movie}`,
      //   options
      // );
    });

    this.subtitleService
      .getLanguages()
      .pipe(first())
      .subscribe((languages) => this.languages = languages);
  }

  openMenu() {
    if (this.menu.isOpen('first')) {
      this.menu.close('first');
    }
    this.menu.open('first');
  }

  selectSubtitle(subtitle: SubtitleData) {
    this.openMenu();
    this.selectedSubtitle = subtitle;
    this.subtitleService.getSubtitleFile(subtitle.id, this.movieId).subscribe(vtt => {
      this.vtt = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(new Blob([vtt], {type: 'text/vtt'})));
    });

  }

  searchSubtitles() {
    this.subtitleError = false;
    this.subtitleLoading = true;
    this.subtitles = null;
    this.subtitleService
      .getSubtitles(this.movieId, this.selectedLanguage)
      .pipe(first())
      .subscribe(
        (subtitles: SubtitleData[]) => {
          this.subtitles = subtitles;
          this.subtitleLoading = false;
        },
        () => {
          this.subtitleError = true;
          this.subtitleLoading = false;
        }
      );
  }
}
