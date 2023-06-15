import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadImageComponent } from './download-image.component';

describe('DownloadImageComponent', () => {
  let component: DownloadImageComponent;
  let fixture: ComponentFixture<DownloadImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DownloadImageComponent]
    });
    fixture = TestBed.createComponent(DownloadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
