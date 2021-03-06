import React, { Fragment } from "react";
import { Route, NavLink, useRouteMatch } from "react-router-dom";

import Movies from "./Movies";
import Details from "./Details";

function Avenger(props) {
  const avenger = props.data.find(
    hero => Number(props.match.params.id) === hero.id
  );

  const { path, url } = useRouteMatch();


  return (
    <Fragment>
      <img
        className="character-image"
        src={avenger.img}
        alt={avenger.nickname}
      />
      <div className="character-info-wrapper">
        <h1>{avenger.name}</h1>
        <h3>({avenger.nickname})</h3>
        <nav>
          <ul className="navbarBottom">
            <li>
              <NavLink to={`${url}/movies`}>Movies</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/details`}>Bio</NavLink>
            </li>
          </ul>
        </nav>
        <Route path={`${path}/details`}>
          <Details data={avenger} />
        </Route>
        <Route path={`${path}/movies`}>
          <Movies data={avenger} />
        </Route>
        <button onClick={() => props.history.push('/avengers')}>Back</button>
      </div>
    </Fragment>
  );
}

export default Avenger;
