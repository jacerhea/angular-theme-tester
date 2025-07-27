import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  imports: [MatRadioModule, FormsModule],
})
export class RadioButtonComponent {
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  favoriteSeason = this.seasons[0]; // Default to the first season

}
