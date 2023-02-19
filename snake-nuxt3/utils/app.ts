const getBaitPosition = (): Position => {
  return {
    x: Math.round(Math.random() * 60) * 10,
    y: Math.round(Math.random() * 40) * 10
  }
}

export { getBaitPosition }
