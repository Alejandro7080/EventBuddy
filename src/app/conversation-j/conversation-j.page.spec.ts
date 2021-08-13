import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConversationJPage } from './conversation-j.page';

describe('ConversationJPage', () => {
  let component: ConversationJPage;
  let fixture: ComponentFixture<ConversationJPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationJPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConversationJPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
