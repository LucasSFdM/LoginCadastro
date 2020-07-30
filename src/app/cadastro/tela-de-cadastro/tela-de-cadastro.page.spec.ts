import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaDeCadastroPage } from './tela-de-cadastro.page';

describe('TelaDeCadastroPage', () => {
  let component: TelaDeCadastroPage;
  let fixture: ComponentFixture<TelaDeCadastroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaDeCadastroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaDeCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
