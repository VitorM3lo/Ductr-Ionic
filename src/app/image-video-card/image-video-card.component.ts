import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoFile } from '../entities/VideoFile';

@Component({
  selector: 'app-image-video-card',
  templateUrl: './image-video-card.component.html',
  styleUrls: ['./image-video-card.component.scss'],
})
export class ImageVideoCardComponent implements OnInit {
  
  @Input() videoFile: VideoFile;
  @Output() emitId: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  emitClick() {
    this.emitId.emit(this.videoFile.id);
  }
}
