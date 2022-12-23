import EventEmitter from "eventemitter3";
import image from "../images/planet.svg";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    
    this._loading = document.querySelector(".progress");
    this.apiUrl = "https://swapi.boom.dev/api/planets";
    this._startLoading();
    this._create();
    this.emit(Application.events.READY);
    
        _startLoading() {
      this._loading.style.diplay = "block";
    }

    _stopLoading() {
      this._loading.style.diplay = "none";
    }
    
    async _load() {
    return await fetch(this.apiUrl).then((response)=>{ return response.JSON(); });
    }
    
_create() {
  this._load().then((response) => { 
  response.results.forEach((element) => {
const box = document.createElement("div");
box.classList.add("box");
box.innerHTML = this._render({
  name: "Placeholder",
  terrain: "placeholder",
  population: 0,
});
    this._stopLoading();
    document.body.querySelector(".main").appendChild(box);
  });
});
}

  _render({ name, terrain, population }) {
    return `
<article class="media">
  <div class="media-left">
    <figure class="image is-64x64">
      <img src="${image}" alt="planet">
    </figure>
  </div>
  <div class="media-content">
    <div class="content">
    <h4>${name}</h4>
      <p>
        <span class="tag">${terrain}</span> <span class="tag">${population}</span>
        <br>
      </p>
    </div>
  </div>
</article>
    `;
  }
}
