export default class LeftNav extends HTMLElement {
    
    connectedCallback() {
        const rootUrl = window.location.origin;
        this.innerHTML = `<div class="fancy-border-r-interior nav-wrapper">
                                <div class="nav-header">
                                    Linqs
                                </div>
                                <div class="font-medium nav-links">
                                    <li>
                                        <a href="${rootUrl}/index.html">Home</a>
                                    </li>
                                    <li>
                                       <a href="${rootUrl}/blogs.html">Blogs</a>
                                    </li>
                                    <li>
                                       <a href="${rootUrl}/projects.html">Projects</a>
                                    </li>

                                </div>
                            </div>`;
    }
}