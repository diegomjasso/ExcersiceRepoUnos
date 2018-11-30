
/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FinderComponent } from './finder.component';

describe('FinderComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FinderComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('Validate SPAN tag', async(() => {
    const fixture = TestBed.createComponent(FinderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const message = compiled.querySelector('span').textContent;
    const length_message_min = 2, lenght_message = message.length;
    expect(message.not.toBe(null);
    expect(message).toMatch(/Name/);
    expect(length_message).toBeGreaterThan(length_message_min)
  }));
});
