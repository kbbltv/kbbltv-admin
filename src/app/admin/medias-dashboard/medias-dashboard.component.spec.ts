import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediasDashboardComponent } from './medias-dashboard.component';

describe('MediasDashboardComponent', () => {
  let component: MediasDashboardComponent;
  let fixture: ComponentFixture<MediasDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediasDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediasDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
