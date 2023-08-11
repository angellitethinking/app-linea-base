import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListHomePage } from './list-home.page';

describe('ListHomePage', () => {
  let component: ListHomePage;
  let fixture: ComponentFixture<ListHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
