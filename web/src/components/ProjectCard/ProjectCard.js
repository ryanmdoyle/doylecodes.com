import ExternalLinkSVG from 'src/components/ExternalLinkSvg/ExternalLinkSvg'

const ProjectCard = ({
  // id,
  title,
  description,
  technologies,
  github,
  href,
  imageLink,
}) => {
  const techArray = technologies.split(',')
  const openSite = () => {
    window.open(`https://${href}`, '_blank')
  }
  const openGithub = () => {
    window.open(`https://${href}`, '_blank')
  }
  return (
    <div className="h-64 bg-whiteSoft rounded-md border-2 border-purpleLight hover:border-gold mb-4 flex justify-between overflow-hidden">
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="font-display font-bold text-purpleDark text-3xl">
            {title}
          </h2>
          <p className="font-body text-purpleLight text-xl">{description}</p>
          <ul className="font-body flex w-full flex-wrap justify-start mt-4">
            {techArray?.map((tech) => (
              <li
                className="h-8 py-1 px-2 mx-2 bg-purpleLight rounded-md text-white mb-2"
                key={tech}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-self-end">
          <img
            src="/GitHub-Mark-64px.png"
            alt="github link"
            className="h-8 w-8 text-purpleLight"
            onClick={openGithub}
            title={github}
          ></img>
          <div title={href}>
            <ExternalLinkSVG
              className="h-8 w-8 text-purpleLight hover:text-gold ml-4"
              onClick={openSite}
            />
          </div>
        </div>
      </div>
      <img src={imageLink} alt={title} className="h-full"></img>
    </div>
  )
}

export default ProjectCard
