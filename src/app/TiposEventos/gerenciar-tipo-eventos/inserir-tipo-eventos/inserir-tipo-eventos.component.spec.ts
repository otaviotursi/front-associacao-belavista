import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirTipoEventosComponent } from './inserir-tipo-eventos.component';

describe('InserirTipoEventosComponent', () => {
  let component: InserirTipoEventosComponent;
  let fixture: ComponentFixture<InserirTipoEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirTipoEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirTipoEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
