import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosPublicosComponent } from './eventos-publicos.component';

describe('EventosPublicosComponent', () => {
  let component: EventosPublicosComponent;
  let fixture: ComponentFixture<EventosPublicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosPublicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosPublicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
