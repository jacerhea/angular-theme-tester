import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ChipsComponent } from './components/chips/chips.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DialogComponent } from './components/dialog/dialog.component';

export const routes: Routes = [
  {
    path: 'components/autocomplete',
    component: AutocompleteComponent,
  },
  {
    path: 'components/badge',
    component: BadgeComponent,
  },
  {
    path: 'components/bottom-sheet',
    component: BottomSheetComponent,
  },
  {
    path: 'components/button',
    component: ButtonComponent,
  },
  {
    path: 'components/button-toggle',
    component: ButtonToggleComponent,
  },
  {
    path: 'components/card',
    component: CardComponent,
  },
  {
    path: 'components/checkbox',
    component: CheckboxComponent,
  },
  {
    path: 'components/chips',
    component: ChipsComponent,
  },
  {
    path: 'components/datepicker',
    component: DatepickerComponent,
  }
  ,
  {
    path: 'components/dialog',
    component: DialogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
