import { useSpring, animated } from 'react-spring'

const SiteHeader = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  return (
    <div className="flex justify-center items center">
      <animated.h1 style={props} className="font-display text-8xl font-bold">
        doyle codes
      </animated.h1>
    </div>
  )
}

export default SiteHeader
