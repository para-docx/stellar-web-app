import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from '../config/particle-config'

export default function ParticleBg() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles id="tsparticles" params={particlesConfig}  init={particlesInit} loaded={particlesLoaded} />
  )
}





