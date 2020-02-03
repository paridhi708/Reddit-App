import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentReplayComponent } from './comment-replay.component';

describe('CommentReplayComponent', () => {
  let component: CommentReplayComponent;
  let fixture: ComponentFixture<CommentReplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentReplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
