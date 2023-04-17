import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaAssociacaoComponent } from './nota-associacao.component';

describe('NotaAssociacaoComponent', () => {
  let component: NotaAssociacaoComponent;
  let fixture: ComponentFixture<NotaAssociacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaAssociacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaAssociacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
