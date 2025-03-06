import MyComponent from './Reusable/PageWrapper.js'; // Ensure the file extension is included
import LeftNav from './Reusable/LeftNav.js';
import MyFooter from './Reusable/Footer.js';
import MyHeader from './Reusable/Header.js';    

customElements.define('left-nav', LeftNav);
customElements.define("my-component", MyComponent);
customElements.define("my-footer", MyFooter);
customElements.define("my-header", MyHeader);

//console .log screen width
console.log(window.innerWidth / window.devicePixelRatio);