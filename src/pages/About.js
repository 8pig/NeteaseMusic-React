import React, { PureComponent,useEffect } from "react";
import {NavLink} from "react-router-dom";

export default function About() {



    return (
        <div>
          about
          <NavLink to="/about">企业历史</NavLink>
          <NavLink to="/about/culture">企业文化</NavLink>
          <NavLink to="/about/contact">联系我们</NavLink>

        </div>
    );

}

