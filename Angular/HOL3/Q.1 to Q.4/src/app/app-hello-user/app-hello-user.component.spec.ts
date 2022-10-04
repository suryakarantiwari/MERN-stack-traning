import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHelloUserComponent } from './app-hello-user.component';

describe('AppHelloUserComponent', () => {
  let component: AppHelloUserComponent;
  let fixture: ComponentFixture<AppHelloUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHelloUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHelloUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
