import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistAjouterComponent } from './playlist-ajouter.component';

describe('PlaylistAjouterComponent', () => {
  let component: PlaylistAjouterComponent;
  let fixture: ComponentFixture<PlaylistAjouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistAjouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
