<template>
  <div>
    <div>
      <h1 class="site-heading text-center text-white d-none d-lg-block">
        <span class="site-heading-lower">Coffee Talk Casual</span>
      </h1>

      <!-- Navigation -->
      <nav 
        id="mainNav" 
        class="navbar navbar-expand-lg navbar-dark py-lg-4">
        <div class="container">
          <a 
            class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" 
            href="#">Coffee Talk Casual</a>
          <b-btn
            v-b-toggle.collapse1
            class="navbar-toggler"
            variant="primary"
          >
            <span class="navbar-toggler-icon"/>
          </b-btn>
          <b-collapse 
            id="collapse1" 
            class="mt-2"
            is-nav
          >
            <ul class="navbar-nav mx-auto">
              <li class="nav-item active px-lg-4">
                <nuxt-link
                  class="nav-link text-uppercase text-expanded" 
                  to="/">Home
                  <span class="sr-only">(current)</span>
                </nuxt-link>
              </li>
              <li class="nav-item px-lg-4">
                <nuxt-link 
                  class="nav-link text-uppercase text-expanded" 
                  to="/about">
                  About
                </nuxt-link>
              </li>
              <li class="nav-item px-lg-4">
                <nuxt-link
                  class="nav-link text-uppercase text-expanded" 
                  to="/products">
                  Products
                </nuxt-link>
              </li>
              <li class="nav-item px-lg-4">
                <nuxt-link 
                  class="nav-link text-uppercase text-expanded" 
                  to="/store">
                  Store
                </nuxt-link>
              </li>
            </ul>
          </b-collapse>
        </div>
      </nav>
      <section>
        <nuxt/>
      </section>
      <footer class="footer text-faded text-center py-5">
        <div class="container">
          <p class="m-0 small">Copyright &copy; Your Website 2018</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  background-image: linear-gradient(to right, rgba(47, 23, 15, 0.65), rgba(47, 23, 15, 0.65)), url('~assets/img/bg.jpg');
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
