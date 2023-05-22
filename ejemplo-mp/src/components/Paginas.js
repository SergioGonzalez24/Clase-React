// Ejemplo con las páginas de un sitio para probar react-router

import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import "../styles/paginas.css";


export function Home() {
  const navigate = useNavigate();
  const countryName = useRef();

  const fetch = (e) => {
    e.preventDefault();
    navigate("/" + countryName.current.value);
  }

  return (
    <div className="page-container">
      <p>
        Curabitur non fermentum odio. Cras vitae condimentum libero. Curabitur
        id ultricies enim. Sed aliquam sit amet ex accumsan dignissim. Curabitur
        egestas neque eu ligula fermentum suscipit. Curabitur rhoncus est id
        augue iaculis, at molestie lacus suscipit. Sed quis volutpat justo.
      </p>

      <div className="form-container">
        <div className="card-container">
          <h2>Consulta las banderas del mundo</h2>
          <form onSubmit={fetch}>
            <input ref={countryName} type="text"></input>
            <button type="submit">Buscar</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export function About() {

  return (
    <div className="page-container">
      <h1 className="page-title">Acerca del Tec</h1>
      <p>
        Nulla ornare aliquam posuere. Cras convallis, libero eget aliquet
        porttitor, ante sapien ornare elit, vel porta lectus nibh vitae lorem.
        Sed egestas magna condimentum, semper leo a, semper ligula. Suspendisse
        lobortis ipsum quis fringilla suscipit. Quisque sed rhoncus risus.
        Mauris vehicula, leo condimentum commodo convallis, ex sapien faucibus
        tortor, a imperdiet erat lorem ac odio. Aenean ultricies pellentesque
        mi, ut aliquet nunc cursus eget. Vestibulum nec varius sapien. Proin
        purus metus, rhoncus at volutpat viverra, porta sit amet lectus. Sed
        malesuada, est eu eleifend sodales, arcu nibh bibendum dolor, vitae
        viverra felis turpis vitae mauris. Morbi cursus magna mauris, in
        pulvinar elit semper ac. Donec eu dolor quis turpis feugiat bibendum
        tincidunt in dolor. Maecenas sit amet ultricies risus. Etiam finibus dui
        vitae diam pretium, semper tincidunt orci tempus. Donec sed eros ac
        sapien feugiat imperdiet.
      </p>
      <nav>
        <ul className="about-nav">
          <li>
            <button>
                <Link to="services">Servicios</Link>
            </button>
          </li>
          <li>
            <button>
            <Link to="history">Historia</Link>
            </button>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
}

export function Events() {
  return (
    <div className="page-container">
      <h1 className="page-title">Eventos</h1>
      <p>
        Maecenas commodo ipsum id ultrices scelerisque. Curabitur vel ligula
        vulputate, iaculis nibh eget, blandit ante. Phasellus eleifend commodo
        mauris et vehicula. Vestibulum dolor nisi, finibus et ultricies a,
        sagittis nec massa. Morbi cursus ex condimentum justo pulvinar, eget
        mattis mauris facilisis. Aliquam at ornare libero. Pellentesque tempus
        est neque, ac malesuada turpis pharetra feugiat. Fusce eget semper ex,
        quis vulputate mauris. Morbi lorem est, consequat nec ligula eu,
        accumsan fermentum turpis. Donec mattis mauris eu ex dictum gravida.
        Phasellus congue feugiat magna, quis placerat orci vulputate ornare.
        Duis tempor laoreet lacus, non rhoncus nisi tempor in. Nulla mollis
        mauris quis libero fermentum rhoncus.
      </p>
    </div>
  );
}

export function Products() {
  return (
    <div className="page-container">
      <h1 className="page-title">Productos</h1>
      <p>
        Sed scelerisque euismod justo, at dictum arcu pulvinar eleifend.
        Maecenas placerat sit amet quam ut mollis. Sed ultricies laoreet
        bibendum. Nullam molestie tortor lobortis iaculis condimentum. Nunc ante
        risus, consectetur quis nisl non, ullamcorper commodo purus. Morbi
        sollicitudin, est nec ultrices accumsan, odio tellus maximus libero,
        vitae pulvinar sem dolor in arcu. Praesent ac est magna. Proin dapibus
        nunc quis sapien fermentum tempor. Cras tellus urna, volutpat ut risus
        laoreet, pellentesque hendrerit nisl. Nam accumsan rutrum sem et
        pellentesque. Nunc nec nibh libero. Donec vitae tortor libero. Nunc
        vitae fringilla augue. Nunc eu efficitur est, convallis ultricies nunc.
        Nulla tempus mauris in sagittis consequat. Praesent tincidunt odio in
        euismod efficitur.
      </p>
    </div>
  );
}

export function Contact() {
  return (
    <div className="page-container">
      <h1 className="page-title">Contacto</h1>
      <p>
        Praesent dapibus leo quis nisi malesuada, at ultricies augue ornare.
        Praesent dictum, lorem a dignissim tempor, enim lectus cursus nisl, sit
        amet laoreet est libero ut sapien. Integer nisi nunc, faucibus vel enim
        at, auctor dictum est. Praesent scelerisque sollicitudin urna at
        laoreet. Maecenas eleifend malesuada eros et porttitor. Pellentesque
        pharetra mauris at laoreet cursus. Quisque imperdiet, erat a viverra
        sollicitudin, ex lorem convallis nisi, ut convallis nunc velit non
        lectus. Aliquam vulputate magna eget quam vestibulum, at placerat augue
        fringilla. Cras ornare magna vel sem imperdiet mattis.
      </p>
    </div>
  );
}

export function NotFound() {
  const location = useLocation();
  return (
    <div>
      <h1>Página no encontrada</h1>
      <p>
        La Página {location.pathname} no existe.
      </p>
    </div>
  )
}

export function Services() {
  return (
    <div>
      <h1 className="subtitle">Nuestros servicios</h1>
      <p>
        Ad ex id cillum exercitation velit nisi cupidatat quis ea non veniam adipisicing incididunt. Irure voluptate quis occaecat quis. Velit excepteur dolor consectetur enim voluptate qui ullamco. Do ullamco magna aliqua dolor labore Lorem elit dolore.
        Exercitation eu Lorem id ullamco Lorem nulla. Minim minim qui aliqua voluptate labore labore eu. Ut Lorem duis velit reprehenderit ullamco. Incididunt tempor nisi consequat consequat cupidatat occaecat non. Aute non id ullamco eu sint laborum commodo consectetur nisi est culpa. Mollit occaecat dolor nisi consectetur do mollit consequat pariatur in qui ipsum et ad.
        Id ut eu consequat aute ullamco laboris anim. Ullamco non eiusmod et Lorem pariatur consectetur velit do culpa reprehenderit. Mollit consequat occaecat irure exercitation nulla. Reprehenderit nulla elit mollit eiusmod aute officia qui voluptate ullamco ut. Exercitation esse est ea id mollit et sunt do laborum aliquip exercitation in.
      </p>
    </div>
  );
}

export function History() {
  return (
    <div>
      <h1 className="subtitle">Nuestra historia</h1>
      <p>
        Duis ex excepteur tempor do in eu. Occaecat elit mollit eu officia laborum Lorem veniam adipisicing cillum sint. Eu ea minim ex mollit enim quis enim ex nulla consequat occaecat. Exercitation nostrud eu excepteur reprehenderit Lorem minim non consequat velit eiusmod. Aliqua fugiat qui proident dolor consectetur dolore aliqua officia qui occaecat dolore proident fugiat irure. Aliquip ut deserunt adipisicing velit. Deserunt minim aute enim deserunt amet laboris enim excepteur in est.
        Officia ut adipisicing ullamco duis nisi quis ullamco cillum laborum. Ipsum reprehenderit et ea proident proident anim. Est minim irure cillum nulla eiusmod sunt Lorem ut et.
        Aute dolor ullamco quis reprehenderit. Adipisicing est non ea nisi anim dolore anim. Consequat do adipisicing non id enim labore dolor elit.
      </p>
    </div>
  );
}