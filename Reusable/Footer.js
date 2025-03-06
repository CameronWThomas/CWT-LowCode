export default class LeftNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="footer fancy-border-interior font-small">
                    <div>cameron.w.thomas@gmail.com</div>
                    <div">oddarray@proton.me</div>
                </div>`;
    }
}