/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('Validate H1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const message = compiled.querySelector('h1').textContent;
    const length_message_min = 2, lenght_message = message.length;
    expect(message.not.toBe(null);
    expect(message).toMatch(/Welcome/);
    expect(length_message).toBeGreaterThan(length_message_min)
  }));
});
