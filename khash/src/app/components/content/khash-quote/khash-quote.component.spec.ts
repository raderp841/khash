import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhashQuoteComponent } from './khash-quote.component';

describe('KhashQuoteComponent', () => {
  let component: KhashQuoteComponent;
  let fixture: ComponentFixture<KhashQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhashQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhashQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
