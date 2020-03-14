import { async, TestBed } from '@angular/core/testing';
import { RequestRecommnedationComponent } from './request-recommnedation.component';
describe('RequestRecommnedationComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RequestRecommnedationComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(RequestRecommnedationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=request-recommnedation.component.spec.js.map