const WelcomePage = () => {
  const techs = [
    'RedwoodJs',
    'Next.js',
    'Gatsby',
    'Apollo',
    'Prisma',
    'Mongo DB',
    'PostgreSQL',
    'Stlyed Components',
    'Emotion',
    'React-Spring',
  ]
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <img
        src="/profile.jpeg"
        alt="headshot"
        className="w-64 rounded-full my-6"
      ></img>
      <p className="font-body w-full lg:w-3/4 mb-8">
        Hey, how{"'"}s it going? I{"'"}m an educator and web developer
        passionate about making applications that are helpful to others. I{"'"}
        ve spend a decade teaching math and science to 6-8th graders outside of
        Sacramento, CA. While most of what I{"'"}ve created has something to do
        with education (solving problems I have on a daily basis) I love
        learning about the newest advencements in web technologies regardless of
        what it{"'"}s related to. While not exhaustive, below are some of the
        technologies I work with.
      </p>
      <ul className="font-body flex flex-wrap justify-between mt-4 w-full lg:w-3/4">
        {techs.map((tech) => (
          <li
            key={tech}
            className="h-8 py-1 px-2 mx-2 bg-purpleLight rounded-md text-white mb-2"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WelcomePage
