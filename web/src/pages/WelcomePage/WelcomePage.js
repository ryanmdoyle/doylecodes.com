const WelcomePage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <img
        src="/profile.jpeg"
        alt="headshot"
        className="w-64 rounded-full my-6"
      ></img>
      <p className="font-body">
        Hey, how{"'"}s it going? I{"'"}m an educator and web developer
        passionate about making applications that are helpful to others. I{"'"}
        ve spend a decade teaching math and science to 6-8th graders outside of
        Sacramento, CA. While most of what I{"'"}ve created has something to do
        with education (solving problems I have on a daily basis) I love
        learning about the newest advencements in web technologies regardless of
        what it{"'"}s related to. While not exhaustive, below are some of the
        technologies I work with.
      </p>
      <ul className="font-body flex w-full flex-wrap justify-between mt-4">
        <li className="h-8 py-1 px-2 mx-2 bg-purpleLight rounded-md text-white mb-2">
          RedwoodJs
        </li>
        <li className="h-8 py-1 px-2 mx-2 bg-purpleLight rounded-md text-white mb-2">
          Next.js
        </li>
        <li className="h-8 py-1 px-2 mx-2 bg-purpleLight rounded-md text-white mb-2">
          Gatsby
        </li>
        <li className="h-8 py-1 px-2 mx-2 bg-purpleLight rounded-md text-white mb-2">
          Apollo
        </li>
        <li className="h-8 py-1 px-2 mx-2 bg-purpleLight rounded-md text-white mb-2">
          Prisma
        </li>
        <li className="h-8 py-1 px-2 mx-2 bg-purpleLight rounded-md text-white mb-2">
          GraphQL
        </li>
        <li className="h-8 py-1 px-2 mx-2 bg-purpleLight rounded-md text-white mb-2">
          Mongo DB
        </li>
        <li className="h-8 py-1 px-2 mx-2 bg-purpleLight rounded-md text-white mb-2">
          PostgreSQL
        </li>
        <li className="h-8 py-1 px-2 mx-2 bg-purpleLight rounded-md text-white mb-2">
          Stlyed Components
        </li>
        <li className="h-8 py-1 px-2 mx-2 bg-purpleLight rounded-md text-white mb-2">
          Emotion
        </li>
        <li className="h-8 py-1 px-2 mx-2 bg-purpleLight rounded-md text-white mb-2">
          React-Spring
        </li>
      </ul>
    </div>
  )
}

export default WelcomePage
