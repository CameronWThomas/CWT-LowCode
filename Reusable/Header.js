export default class LeftNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div>
                <header>
                    <h1 class="jacquard-24-regular font-xlarge header">Cam's House</h1>
                </header>   
            </div>`;
    }
}