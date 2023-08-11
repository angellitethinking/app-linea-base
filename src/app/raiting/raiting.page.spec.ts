import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RaitingPage } from './raiting.page';

describe('RaitingPage', () => {
  let component: RaitingPage;
  let fixture: ComponentFixture<RaitingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RaitingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
