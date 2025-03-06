import React from 'react'

const Loader = () => {
  return (
    <div className="relative w-[50px] aspect-square rounded-full animate-spin before:absolute before:w-[8px] before:h-[8px] before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-[#ffa516] before:rounded-full"
    style={{
      background: `conic-gradient(transparent 30%, #ffa516)`,
      WebkitMask: `radial-gradient(farthest-side, transparent calc(100% - 8px), black 0)`,
    }}
  ></div>
  )
}

export default Loader
