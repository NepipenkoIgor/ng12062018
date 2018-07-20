import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TooltipDirective} from './tooltip.directive';
import {By} from '@angular/platform-browser';

const tooltipText = 'some text';

@Component({
  selector: 'app-test-component',
  template: `
    <div>
      <div class="show" (click)="t.show()"></div>
      <div class="name"
           [appTooltip]="tooltipText"
           #t='tooltip'
      ></div>
    </div>
  `
})
class TestComponent {
  public tooltipText = tooltipText;
}

describe('TooltiDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        TooltipDirective
      ]
    });
    fixture = TestBed.createComponent(TestComponent);
    debugElement = fixture.debugElement;
  });

  it('should work with sibling element', () => {
    const controlDiv = debugElement.query(By.css('.show'));
    const nameDiv = debugElement.query(By.css('.name'));
    let tooltip = nameDiv.nativeElement.querySelector('.tooltip');
    expect(tooltip).toBeFalsy();
    controlDiv.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    tooltip = nameDiv.nativeElement.querySelector('.tooltip');
    expect(tooltip).toBeTruthy();
    expect(tooltip.textContent).toEqual(tooltipText);
  });

});
