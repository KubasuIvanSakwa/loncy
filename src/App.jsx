import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import { Suspense, lazy } from 'react'

import Hero from './components/Hero';
import Servicestab from './components/Servicestab';
import School from './components/School';
import Branding from './components/Branding';
import Business from './components/Business';
// import School from './components/School';

const Layout = lazy(() => import('./pages/Layout'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
          <Route index element=
          {
            <>
              <Hero />
              <Servicestab />
            </>
          } 

          />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />

        <Route path='services' element={<Services />} >
            <Route path='education' element={<School />} />
            <Route path='branding' element={<Branding />} />
            <Route path='business' element={<Business />} />
        </Route>
      </Route>
    </Route>
  ))

  return (
    <Suspense fallback={<div> Loading ...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App;