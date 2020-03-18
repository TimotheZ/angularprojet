import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistMusiqueComponent } from './playlist-musique.component';

describe('PlaylistMusiqueComponent', () => {
  let component: PlaylistMusiqueComponent;
  let fixture: ComponentFixture<PlaylistMusiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistMusiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistMusiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
