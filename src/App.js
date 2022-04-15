import React from 'react';
import './App.css';
import 'D:/Files/TEITA-SEM2022/MAP/exp8/pwa-eapp-srushti/node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
          <meta charset = "UTF-8" name = "viewport" content = "width=device-width, initial-scale=1" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>


          <header class="p-3 bg-dark text-white fixed-top">
                <div class="container">
                  <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                      <img src="https://cdn1.iconfinder.com/data/icons/system-ui-set/154/letter-u-uppercase-latin-keyboard-128.png" class="bg-light" width="30" height="30" alt='Image' />
                    </a>
            
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                      <li><a href="#home" class="nav-brand nav-link px-2 text-warning">Urbanic</a></li>
                      <li><a href="#women" class="nav-link px-2 text-white">Women</a></li>
                      <li><a href="#accessories" class="nav-link px-2 text-white">Accesories</a></li>
                      <li><a href="#utility" class="nav-link px-2 text-white">Beauties</a></li>
                      <li><a href="#" class="nav-link px-2 text-white">About</a></li>
                    </ul>
            
                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                      <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                    </form>
            
                    <div class="text-end">
                      <button type="button" class="btn btn-outline-light me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg> Login </button>
                      <button type="button" class="btn btn-outline-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg> Sign-up </button>
                    </div>
                    <div class="text-end">
                      <button type='button' class="btn btn-outline-warning"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg></button>
                      <button type='button' class="btn btn-outline-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
</svg></button>
                      <button type='button' class="btn btn-outline-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></button>
                    </div>
                  </div>
                </div>
          </header>


            <section id='home'>
              <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                  <h1 class="display-4 fw-normal">Get Top Deals!</h1>
                  <p class="lead fw-normal">Buy now or cry later. Be comfortable, Be inspired, Be right at home. Be your beautiful best. Loved for style.</p>
                  <a class="btn btn-outline-success" href="#">Coming soon</a>
                </div>
                <div class="product-device shadow-sm d-none d-md-block"></div>
                <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
              </div>
          </section>
          <br /><br /><br />
          
    <center>
          <div class="container marketing">
    <div class="row">
      <div class="col-lg-4">
        <img src="https://cdn4.iconfinder.com/data/icons/spots-line-stroke-part-1/460/clothing-tshirts-256.png" class="bd-placeholder-img rounded-circle" width="140" height="140" />
        <h2>Summer Tshirts</h2>
        <p>Belly Tops, Flip Flops, late nights, water fights, Summer fun has begun.</p>
        <p><a class="btn btn-dark" href="#women">View details »</a></p>
      </div>
      <div class="col-lg-4">
      <img src="https://cdn3.iconfinder.com/data/icons/beauty-flat-2/60/028_-_Bust-256.png" class="bd-placeholder-img rounded-circle" width="140" height="140" />
        <h2>Jewellery</h2>
        <p>Ready for every occasion. Look different. Put a gem in your life. Make your life shiny like a jewel.</p>
        <p><a class="btn btn-dark" href="#accessories">View details »</a></p>
      </div>
      <div class="col-lg-4">
      <img src="https://cdn3.iconfinder.com/data/icons/geest-women-kit/128/bag_icons-17-256.png" class="bd-placeholder-img rounded-circle" width="140" height="140" />
        <h2>Makeup</h2>
        <p> Makeup should be fun! So break some rules! Be the star of the show with our makeup</p>
        <p><a class="btn btn-dark" href="#utility">View details »</a></p>
      </div>
    </div>
  </div>
  </center>

          <section id="women">
            <br /><br /><br />
            <h4 class="lead fw-normal p-3 text-white bg-dark">Women's Clothing</h4>
            <div class="container px-4 py-5" id="featured-3">
                <h2 class="pb-2 border-bottom">Hot like summer...! 🔥 </h2>
                <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                  <div class="feature col border border-warning p-2">
                    <center>
                    
                      <img src="https://assets.bonkerscorner.com/uploads/2022/03/31112700/Bonkerscorner_good_vibes_03.jpg" width="350" height="400" /> 
                      <br />
                      <p class="lead p-1">Good Vibes Tshirt</p>
                      <div class="lead">Price: ₹599.00</div>  <br /><div class="btn btn-outline-danger">Add to cart</div>
                    </center>
                  </div>
                  
                  <div class="feature col border border-warning p-2">
                    <center>
                      <img src="https://assets.bonkerscorner.com/uploads/2020/12/21170444/bonkerscorner_pink_white_tie_dye_3_1.jpg" width="350" height="400" /> 
                      <br />
                      <p class="lead p-1">Pink White tie dye</p>
                      <div class="lead">Price: ₹499.00</div> <br /> <div class="btn btn-outline-danger">Add to cart</div>
                    </center>
                  </div>
                
                  <div class="feature col border border-warning p-2">
                    <center>
                      <img src="https://assets.bonkerscorner.com/uploads/2021/01/16194721/IMG-3592.jpg" width="350" height="400" /> 
                      <br />
                      <p class="lead p-1">Over the Size</p>
                      <div class="lead">Price: ₹499.00</div>  <br /><div class="btn btn-outline-danger">Add to cart</div>
                    </center>
                  </div>
              </div>
            </div>
          </section>



          <section id="utility">
            <br /><br /><br />
            <h4 class="lead fw-normal p-3 text-white bg-dark">Beauties</h4>
            <div class="container px-4 py-5" id="featured-3">
                <h2 class="pb-2 border-bottom">Don't miss out on the latest Beauties...! 💋💄</h2>
                <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                  <div class="feature col border border-warning p-2">
                    <center>
                    
                      <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10849124/2019/12/4/a62fbd1d-1bb3-4718-86f1-42ad941c134b1575450495021MaybellineNewYorkTheBlushedNudesEyeshadowPalette9g1.jpg" width="350" height="400" /> 
                      <br />
                      <p class="lead p-1">Maybelline- The blushed nudes</p>
                      <div class="lead">Price: ₹642.00</div>  <br /><div class="btn btn-outline-danger">Add to cart</div>
                    </center>
                  </div>
                  
                  <div class="feature col border border-warning p-2">
                    <center>
                      <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13201772/2021/1/25/8a21de24-9249-4d40-8d21-5a6d106618a11611572567054-Lakme-Women-Lipstick-481611572566635-2.jpg" width="350" height="400" /> 
                      <br />
                      <p class="lead p-1">Lakme-Wine out</p>
                      <div class="lead">Price: ₹255.00</div> <br /> <div class="btn btn-outline-danger">Add to cart</div>
                    </center>
                  </div>
                
                  <div class="feature col border border-warning p-2">
                    <center>
                      <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16411866/2022/4/13/1ba1dc71-7831-4aa9-9f55-8774c4a6c6181649840899592MarieClaireHelloGorgeousNailLacquer-BiscuitBrown1.jpg" width="350" height="400" /> 
                      <br />
                      <p class="lead p-1">Maria Claire- Hello Gorgeous Nail Lacquer</p>
                      <div class="lead">Price: ₹159.00</div>  <br /><div class="btn btn-outline-danger">Add to cart</div>
                    </center>
                  </div>
              </div>
            </div>
          </section>

          <section id="accessories">
            <br /><br /><br />
            <h4 class="lead fw-normal p-3 text-white bg-dark">Women's Accesories</h4>
            <div class="container px-4 py-5" id="featured-3">
                <h2 class="pb-2 border-bottom">Women's accessories 📿💍</h2>
                <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                  <div class="feature col border border-warning p-2">
                    <center>
                    
                      <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10552114/2021/3/17/4bc96d0f-bf05-4982-8db7-3f765e4e60fc1615972646829CarltonLondonGold-PlatedLayeredNecklace1.jpg" width="350" height="400" /> 
                      <br />
                      <p class="lead p-1">Cartler London</p>
                      <div class="lead">Price: ₹591.00</div>  <br /><div class="btn btn-outline-danger">Add to cart</div>
                    </center>
                  </div>
                  
                  <div class="feature col border border-warning p-2">
                    <center>
                      <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9013423/2021/11/22/4de3f6ac-c212-416c-8f57-0ab03d6c7a521637573705422ZaveriPearlsGold-TonedPearlKundanStuddedCrescentShapedChandb1.jpg" width="350" height="400" /> 
                      <br />
                      <p class="lead p-1">Jhumka Bareliwala</p>
                      <div class="lead">Price: ₹499.00</div> <br /> <div class="btn btn-outline-danger">Add to cart</div>
                    </center>
                  </div>
                
                  <div class="feature col border border-warning p-2">
                    <center>
                      <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15617608/2021/9/25/a581cc5e-86e4-4d63-b8ad-dc0a54cae96a1632576872749ShiningDivaSetof9GoldPlatedStylishRings1.jpg" width="350" height="400" /> 
                      <br />
                      <p class="lead p-1">Forever 21</p>
                      <div class="lead">Price: ₹499.00</div>  <br /><div class="btn btn-outline-danger">Add to cart</div>
                    </center>
                  </div>
              </div>
            </div>
          </section>
          <div class="b-example-divider"></div>
          
          <div class="container">
  <footer class="py-5">
    <div class="row">
      <div class="col-6">
        <h5 class="lead fw-bold text-warning"><img src="https://cdn1.iconfinder.com/data/icons/system-ui-set/154/letter-u-uppercase-latin-keyboard-128.png" class="bg-light" width="30" height="30" alt='Image' /> Urbanic</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#home" class="nav-link p-0 text-muted">Home</a></li>
          <li class="nav-item mb-2"><a href="#women" class="nav-link p-0 text-muted">Women</a></li>
          <li class="nav-item mb-2"><a href="#accessories" class="nav-link p-0 text-muted">Accesories</a></li>
          <li class="nav-item mb-2"><a href="#utility" class="nav-link p-0 text-muted">Beauties</a></li>
          <li class="nav-item mb-2"><a href="#about" class="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div class="col-4 offset-1">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div class="d-flex w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address" /><br />
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex justify-content-between py-4 my-4 border-top">
      <p>© 2022 Srushti Shinde, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-dark" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-meta" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714Zm1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z"/>
</svg></a></li>
      </ul>
    </div>
  </footer>
</div>

    </div>
  );
}

export default App;
