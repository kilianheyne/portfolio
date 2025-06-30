import { Component, effect, inject } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";

type Textset = {
  icon: string; 
  texts: string[];
}

@Component({
  selector: 'app-why-me',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
  translate = inject(TranslateService);

  textSets: Textset[] = [
    {
      icon: 'assets/images/why-me/location.png',
      texts: ['why-me.location_span_1', 'why-me.location_span_2']
    },
    {
      icon: 'assets/images/why-me/remote-work.png',
      texts: ['why-me.work_span_1', 'why-me.work_span_2']
    },
    {
      icon: 'assets/images/why-me/relocate.png',
      texts: ['why-me.relocate_span_1', 'why-me.relocate_span_2']
    }
  ];
  
  currentSetIndex: number = 0;
  currentSet: Textset = this.textSets[0];
  typedText: string = '';
  isFading: boolean = false;

  private fullText: string = '';
  private typingSpeed: number = 100;
  private deletingSpeed: number = 40;
  private pauseAfterTyping: number = 1500;
  private pauseAfterDeleting: number = 500; 

  ngOnInit(): void {
    this.startRotation();
  }

  async startRotation(): Promise<void> {
    while (true) {
      this.currentSet = this.textSets[this.currentSetIndex];
      this.fullText = await this.getTranslatedText(this.currentSet.texts);
      await this.typeText(this.fullText);
      await this.delay(this.pauseAfterTyping);
      await this.deleteText();
      await this.fadeOutIcon();
      this.nextSet();
    }
  }

  async typeText(text: string): Promise<void> {
    this.typedText = '';
    for (let i = 0; i < text.length; i++) {
      this.typedText += text[i];
      await this.delay(this.typingSpeed);
    }
  }

  async deleteText(): Promise<void> {
    for (let i = this.typedText.length; i >= 0; i--) {
      this.typedText = this.typedText.slice(0, i);
      await this.delay(this.deletingSpeed);
    }
  }

  async fadeOutIcon(): Promise<void> {
    this.isFading = true;
    await this.delay(400); // CSS-Transition sollte zur Dauer passen
    this.isFading = false;
  }

  nextSet(): void {
    this.currentSetIndex = (this.currentSetIndex + 1) % this.textSets.length;
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getTranslatedText(keys: string[]): Promise<string> {
    const translations = await Promise.all(keys.map(key => this.translate.get(key).toPromise()));
    return translations.join(' ');
  }
}
