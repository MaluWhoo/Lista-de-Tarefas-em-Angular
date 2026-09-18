import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemTarefaComponent } from './item-tarefa';

describe('ItemTarefaComponent', () => {
  let component: ItemTarefaComponent;
  let fixture: ComponentFixture<ItemTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTarefaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemTarefaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
