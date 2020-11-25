import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, first } from 'rxjs/operators';
import { VideoFile } from 'src/app/entities/VideoFile';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private httpClient: HttpClient) { }

  getFiles(): Observable<VideoFile[]> {
    // TODO: Create a config file and service to fetch the url to the backend
    return this.httpClient.get<VideoFile[]>('http://localhost:8080/videos/');
  }
}
