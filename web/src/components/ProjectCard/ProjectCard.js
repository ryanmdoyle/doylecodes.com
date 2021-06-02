import ExternalLinkSVG from 'src/components/ExternalLinkSvg/ExternalLinkSvg'
import SvgGithub from 'src/components/SvgGithub/SvgGithub'

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
    window.open(`https://${github}`, '_blank')
  }

  return (
    <div className="flex justify-center w-full">
      <div className="h-36 md:h-48 lg:h-64 w-full lg:w-3/4 2xl:w-2/3 bg-whiteSoft rounded-md border-2 border-purpleLight mb-4 flex justify-between overflow-hidden">
        <div className="p-2 lg:p-4 flex flex-col justify-between">
          <div>
            {/* Title */}
            <h2 className="font-display font-bold text-purpleDark text-md md:text-xl lg:text-3xl">
              {title}
            </h2>
            {/* Description */}
            <p className="font-body text-purpleLight text-sm md:text-lg lg:text-xl">
              {description}
            </p>
            {/* Tech List */}
            <ul className="font-body flex w-full flex-wrap justify-start mt-1 md: mt-2 lg:mt-4">
              {techArray?.map((tech) => (
                <li
                  className="h-6 lg:h-8 py-1 px-2 mr-1 md:mr-2 mb-1 bg-purpleLight rounded-md text-white text-xs md:text-md lg:text-lg flex justify-center items-center"
                  key={tech}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          {/* Social Links */}
          <div className="flex justify-self-end">
            <button title={github} onClick={openGithub}>
              <SvgGithub
                className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 text-purpleLight hover:text-gold"
                // onClick={openGithub}
              />
            </button>
            <button title={href} onClick={openSite}>
              <ExternalLinkSVG className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 text-purpleLight hover:text-gold ml-2" />
            </button>
          </div>
        </div>
        <img src={imageLink} alt={title} className="h-full"></img>
      </div>
    </div>
  )
}

export default ProjectCard
