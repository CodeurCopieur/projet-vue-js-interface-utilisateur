const products = [
  {
    id:1,
    titre:'Air Zoom Structure 20 Women',
    description: 'Nike Air Jordan Footwear basketball sneakers.',
    price: 99,
    img: './assets/img/img3.png'
  },
  {
    id:2,
    titre:'Golf FI Impact 2',
    description: 'Nike Air Jordan Footwear basketball sneakers.',
    price: 40,
    img:'./assets/img/img2.png'
  },
  {
    id:3,
    titre:'Air Pegasus 32',
    description: 'Nike Air Jordan Footwear basketball sneakers.',
    price: 60,
    img: './assets/img/img1.png'
  },
  {
    id:4,
    titre:'Zoom Structure 20 Women',
    description: 'Nike Air Jordan Footwear basketball sneakers.',
    price: 60,
    img: './assets/img/img4.png'
  },
  {
    id:5,
    titre:'Max Genome',
    description: 'Nike Air Jordan Footwear basketball sneakers.',
    price: 60,
    img: './assets/img/img6.png'
  }   
  ]

const Home = {
  template: '#home',
  name: 'Home',
  data:() => {
    return {
      products,
      searchKey:''
    }
  },
  computed: {
    filteredList(){
      return this.products.filter( product => {
        return product.titre.toLowerCase().includes(this.searchKey.toLowerCase());
      })
    }
  },
  methods:{

  }
}

const UserSettings = {
  template: '<h1>User Settings</h1>',
  name: 'UserSettings'
}

const WishList = {
  template: '<h1>Wish List</h1>',
  name: 'WishList'
}

const ShoppingCart = {
  template: '<h1>Shopping Cart</h1>',
  name: 'ShoppingCart'
}

// router

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/user-settings', component: UserSettings },
    { path: '/wish-list', component: WishList },
    { path: '/shopping-cart', component: ShoppingCart }
  ]
})

const vue = new Vue({
  router
}).$mount('#app');