import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSidenavComponent } from './playlist-sidenav.component';

describe('PlaylistSidenavComponent', () => {
  let component: PlaylistSidenavComponent;
  let fixture: ComponentFixture<PlaylistSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
