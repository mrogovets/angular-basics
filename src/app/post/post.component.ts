import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() post!: Post
  @Output() onRemove = new EventEmitter<number>();
  @ContentChild('info', {static: true}) infoRef!: ElementRef

  constructor() { }

  removePost() {
    this.onRemove.emit(this.post.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck()')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit()')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked()')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit()')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked()')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    // console.log(this.infoRef.nativeElement)
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy()')
  }

}
