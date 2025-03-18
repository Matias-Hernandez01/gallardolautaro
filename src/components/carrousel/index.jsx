import style from "./Carrousel.module.css"
import callejeroFino from "../../assets/networks/callejeroFino.jpg"
import damasgratis from "../../assets/networks/damasgratis.jpg"
import thelaplanta from "../../assets/networks/thelaplanta.jpg"
import sergiotorres from "../../assets/networks/sergiotorres.jpg"

export const Carrousel = () => {
  return <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={callejeroFino} className={`d-block w-100 ${style.images}`} alt="callejerofino"  />
    </div>
    <div class="carousel-item">
      <img src={damasgratis} className={`d-block w-100 ${style.images}`} alt="damasgratis"   />
    </div>
    <div class="carousel-item">
      <img src={thelaplanta} className={`d-block w-100 ${style.images}`} alt="thelaplanta"  />
    </div>
    <div class="carousel-item">
      <img src={sergiotorres} className={`d-block w-100 ${style.images}`} alt="sergiotorres"  />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    
};
