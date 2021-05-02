import { useSpring, animated } from 'react-spring'

const SiteHeader = () => {
  const h1 = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  const h2 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
  })
  return (
    <div className="flex flex-col justify-center items center">
      <animated.h1
        style={h1}
        className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-purpleDark text-center my-4 xl:mb-8"
      >
        {`Hello, I'm Ryan.`}
      </animated.h1>
      <animated.h2
        style={h2}
        className="font-display text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-purpleLight text-center"
      >
        Developer, Learner, Educator
      </animated.h2>
    </div>
  )
}

export default SiteHeader
