import React, { useContext, useState, Fragment } from 'react';
import context from '../context';
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default ({ children, to, onClick })=> {
  const state = useContext(context);
  return(
    <AniLink
      to={to}
      bg={state.primaryColor}
      direction="down"
      duration={.8}
      cover
      onClick={onClick}
    >
      {children}
    </AniLink>
  )
}