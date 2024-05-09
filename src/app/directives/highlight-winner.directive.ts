import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHighlightWinner]'
})
export class HighlightWinnerDirective implements OnInit {
    @Input('appHighlightWinner') isWinner: boolean = false;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        if (this.isWinner) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
            // Adjust styles or add other behavior based on the isWinner condition
        }
    }
}
