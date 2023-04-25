import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirEventoComponent } from './inserir-evento.component';

describe('InserirEventoComponent', () => {
  let component: InserirEventoComponent;
  let fixture: ComponentFixture<InserirEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
