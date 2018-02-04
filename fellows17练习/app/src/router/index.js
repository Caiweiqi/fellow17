import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movies/MovieList'
import MusicList from '@/components/musics/MusicsList'
import BooksList from '@/components/books/BooksList'
import PhotosList from '@/components/photos/PhotosList'
import movieDetail from '@/components/movies/MovieDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MovieList
    },
    {
      path:'/MusicsList',
      component:MusicList
    },
    {
      path:'/BooksList',
      component:BooksList
    },
    {
      path:'/PhotosList',
      component:PhotosList
    },
    {
      path:'/movieDetail/:id',
      component:movieDetail
    }

  ]
})
