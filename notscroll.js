'use strict';

export class NotScroll {
  constructor(element) {
    this.$el = element;
    this.widthScroll = window.innerWidth - document.body.offsetWidth;
  }

  disabledScroll() {
    this.$el.dataset.dysscroll = window.scrollY;
    this.$el.style.cssText = `
      position: fixed;
      top: ${-window.scrollY}px;
      left: 0;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      padding-right: ${this.widthScroll}px;
    `;
  }

  enabledScroll() {
    this.$el.style.cssText = ``;
    window.scroll({top: this.$el.dataset.dysscroll});
    this.$el.removeAttribute('data-dysscroll'); 
  }
}