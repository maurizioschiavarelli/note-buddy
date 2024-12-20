import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Sidebar from '../../Sidebar';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import '../../Guides.css';

import JavascriptPanoramica from './2-JavascriptPanoraminca';
import JavascriptIntroduzione from './3-JavascriptIntroduzione';
import JavascriptVariabili from './3.1-JavascriptVariabili'
import JavascriptTipiDiDato from './4-JavascriptTipiDiDato';
import JavascriptOperatori from './5-JavascriptOperatori';

// Definizione dei link di navigazione per il JavaScript
const javascriptLinks = [
  { name: 'Panoramica', to: '/Javascript/Panoramica' },
  { name: 'Introduzione', to: '/Javascript/Introduzione' },
  { name: 'Variabili', to: '/Javascript/Variabili' },
  { name: 'Tipi di Dato', to: '/Javascript/TipiDiDato' },
  { name: 'Operatori', to: '/Javascript/Operatori' },
  { name: 'Strutture di Controllo', to: '/Javascript/strutture-controllo' },
  { name: 'Funzioni', to: '/Javascript/funzioni' },
  { name: 'Oggetti', to: '/Javascript/oggetti' },
  { name: 'Array', to: '/Javascript/array' },
  { name: 'Loop (Cicli)', to: '/Javascript/loop' },
  { name: 'Scope e Closures', to: '/Javascript/scope-closures' },
  { name: 'Eventi', to: '/Javascript/eventi' },
  { name: 'Asincronicità', to: '/Javascript/asincronicita' },
  { name: 'Manipolazione del DOM', to: '/Javascript/manipolazione-dom' },
  { name: 'ES6 e Nuove Funzionalità', to: '/Javascript/es6' },
  { name: 'Modulo (import/export)', to: '/Javascript/modulo' },
  { name: 'Errori e Debugging', to: '/Javascript/errori-debugging' },
  { name: 'Funzioni Arrow', to: '/Javascript/funzioni-arrow' },
  { name: 'Destructuring', to: '/Javascript/destructuring' },
  { name: 'Template Literals', to: '/Javascript/template-literals' },
  { name: 'Higher-order Functions', to: '/Javascript/higher-order-functions' },
  {
    name: 'Prototipi e Ereditarietà',
    to: '/Javascript/prototipi-ereditarieta'
  },
  { name: 'This in JavaScript', to: '/Javascript/this' },
  { name: 'Classi (ES6)', to: '/Javascript/classi' },
  { name: 'Mappe e Set', to: '/Javascript/mappe-set' },
  { name: 'JSON', to: '/Javascript/json' },
  { name: 'Web APIs', to: '/Javascript/web-apis' },
  { name: 'Performance e Ottimizzazione', to: '/Javascript/performance' },
  { name: 'Testing in JavaScript', to: '/Javascript/testing' },
  { name: 'Patterns di Design', to: '/Javascript/design-patterns' }
]

export default function Javascript () {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0) // Scroll ogni volta che cambia la rotta
  }, [location])

  return (
    <>
      {/* Impostazioni del documento */}
      <Helmet>
        <link
          rel='stylesheet'
          type='text/css'
          href='/note-buddy/src/components/Guides.css'
        />
        <title>JavaScript</title>
      </Helmet>

      {/* Navbar */}
      <Navbar />

      <div className='flex bg-gray-800'>
        {/* Sidebar */}
        <Sidebar
          links={javascriptLinks}
          home='Javascript'
          currentPage='Argomenti'
        />

        <div className='flex-1 containerGuides'>
          {/* Definizione delle rotte */}
          <Routes>
            <Route path='Panoramica' element={<JavascriptPanoramica />} />
            <Route path='Introduzione' element={<JavascriptIntroduzione />} />
            <Route path='Variabili' element={<JavascriptVariabili />} />
            <Route path='TipiDiDato' element={<JavascriptTipiDiDato />} />
            <Route path='Operatori' element={<JavascriptOperatori />} />
          </Routes>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}
