
// eslint-disable-next-line react/prop-types
export default function CircleLight({ color, active }) {
    return (
  
      <div className={`light ${color} ${ ((active) ? 'glow' : '')}`}></div>
  
    )
  }