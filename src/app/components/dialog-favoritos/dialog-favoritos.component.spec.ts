import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFavoritosComponent } from './dialog-favoritos.component';

describe('DialogFavoritosComponent', () => {
  let component: DialogFavoritosComponent;
  let fixture: ComponentFixture<DialogFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
