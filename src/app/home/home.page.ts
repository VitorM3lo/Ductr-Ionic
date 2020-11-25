import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from '../services/file/file.service';
import { VideoFile } from '../entities/VideoFile';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  videoFiles: VideoFile[] = [
    {
      id: 1,
      imdbId: 1,
      name: '1',
      status: 1,
    },
    {
      id: 1,
      imdbId: 1,
      name: '2',
      status: 1,
    },
    {
      id: 1,
      imdbId: 1,
      name: '3',
      status: 1,
    },
    {
      id: 1,
      imdbId: 1,
      name: '4',
      status: 1,
    },
    {
      id: 1,
      imdbId: 1,
      name: '5',
      status: 1,
    },
    {
      id: 1,
      imdbId: 1,
      name: '5',
      status: 1,
    },
    {
      id: 1,
      imdbId: 1,
      name: '5',
      status: 1,
    },
    {
      id: 1,
      imdbId: 1,
      name: '5',
      status: 1,
    },
    {
      id: 1,
      imdbId: 1,
      name: '5',
      status: 1,
    },
    {
      id: 1,
      imdbId: 1,
      name: '5',
      status: 1,
    },
    {
      id: 1,
      imdbId: 1,
      name: '5',
      status: 1,
    },
    {
      id: 1,
      imdbId: 1,
      name: '5',
      status: 1,
    },
    {
      id: 1,
      imdbId: 1,
      name: '5',
      status: 1,
    },
    {
      id: 1,
      imdbId: 1,
      name: '5',
      status: 1,
    },
  ];

  constructor(private router: Router, private fileService: FileService) {}

  ngOnInit() {
    this.fileService.getFiles().subscribe(files => this.videoFiles = files);
  }

}

