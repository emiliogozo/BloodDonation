import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EsriLoaderService } from 'angular-esri-loader';

import { EsriMapComponent } from './esri-map.component';

describe('EsriMapComponent', () => {
  let component: EsriMapComponent;
  let fixture: ComponentFixture<EsriMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsriMapComponent ],
      providers: [ EsriLoaderService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsriMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
