import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarIdeiasComponent } from './gerenciar-ideias.component';

describe('GerenciarIdeiasComponent', () => {
  let component: GerenciarIdeiasComponent;
  let fixture: ComponentFixture<GerenciarIdeiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarIdeiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarIdeiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
