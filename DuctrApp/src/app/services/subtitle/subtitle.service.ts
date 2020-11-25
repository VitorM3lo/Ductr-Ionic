import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubtitleData } from 'src/app/entities/SubtitleData';
import { SubtitleConverterService } from '../subtitle-converter/subtitle-converter.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SubtitleService {
  constructor(
    private httpClient: HttpClient,
    private subtitleConverter: SubtitleConverterService
  ) {}

  // TODO: Create a config file and service to fetch the url to the backend
  getLanguages(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:8080/languages/');
  }

  getSubtitles(movieId: number, language: string): Observable<SubtitleData[]> {
    return this.httpClient.get<SubtitleData[]>(
      `http://localhost:8080/subtitles?id=${movieId}&lang=${language}`
    );
  }

  getSubtitleFile(subtitleId: number, movieId: number) {
    return this.httpClient
      .get(
        `http://localhost:8080/subtitle?subtitleId=${subtitleId}&movieId=${movieId}`,
        { responseType: 'text' }
      )
      .pipe(
        map((resource) => {
          console.log(this.subtitleConverter.srt2webvtt(resource));
          console.log(resource);
          return this.subtitleConverter.srt2webvtt(resource);
        })
      );
  }
}
