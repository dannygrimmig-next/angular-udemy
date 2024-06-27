import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
const getRandNum = (range: number) => Math.floor(Math.random() * range);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // Event Emitter -> output data to template (to be recieved in component that uses the user component)
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

/** Signal Approach */
// avatar = input.required<string>()
// name = input.required<string>()
// imagePath = computed(() => 'assets/users/' + this.avatar())
// select = output<string>()
