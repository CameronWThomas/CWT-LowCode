export default class LeftNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="fancy-border-r-interior nav-wrapper">
                                <div class="nav-header">
                                    Linqs
                                </div>
                                <div class="font-medium nav-links">
                                    <li>
                                        Home
                                    </li>
                                    <li>
                                        About
                                    </li>
                                    <li>
                                        Contact
                                    </li>

                                </div>
                            </div>`;
    }
}