import Vue from 'vue'

import './styles/quasar.styl'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QCard,
  QCardActions,
  QCardSection,
  QSpace,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QCarousel,
  QForm,
  QInput,
  QSelect,
  QCarouselSlide,
  QCarouselControl,
  QParallax,
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QSpace,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QForm,
    QInput,
    QSelect,
    QCarousel,
    QCarouselSlide,
    QCarouselControl,
    QParallax,
    QCard,
    QCardActions,
    QCardSection,
  },
  directives: {
  },
  plugins: {
  }
 })
