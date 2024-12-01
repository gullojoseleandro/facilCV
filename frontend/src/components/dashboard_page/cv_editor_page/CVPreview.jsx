import { motion } from "framer-motion"

export const CVPreview = ({ cv, controls }) => {
  return (
    <motion.div 
      className={`bg-white p-4 md:p-6 lg:p-8 shadow-lg rounded-lg ${cv.template} transition-all duration-300 ease-in-out h-full overflow-auto`}
      animate={controls}
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-primary">{cv.sections.personalInfo.name}</h1>
      <p className="text-xs md:text-sm lg:text-base text-muted-foreground mb-4">
        {cv.sections.personalInfo.email} | {cv.sections.personalInfo.phone} | {cv.sections.personalInfo.location}
      </p>
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-primary">Resumen Profesional</h2>
      <p className="text-xs md:text-sm lg:text-base mb-4">{cv.sections.summary}</p>
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-primary">Experiencia Laboral</h2>
      {cv.sections.experience.map((exp, index) => (
        <motion.div 
          key={index} 
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <h3 className="text-base md:text-lg lg:text-xl font-semibold">{exp.title}</h3>
          <p className="text-xs md:text-sm lg:text-base text-muted-foreground">{exp.company} | {exp.date}</p>
          <p className="text-xs md:text-sm lg:text-base">{exp.description}</p>
        </motion.div>
      ))}
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-primary">Educación</h2>
      {cv.sections.education.map((edu, index) => (
        <motion.div 
          key={index} 
          className="mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <h3 className="text-base md:text-lg lg:text-xl font-semibold">{edu.degree}</h3>
          <p className="text-xs md:text-sm lg:text-base text-muted-foreground">{edu.school} | {edu.date}</p>
        </motion.div>
      ))}
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-primary">Habilidades</h2>
      <p className="text-xs md:text-sm lg:text-base">{cv.sections.skills.join(", ")}</p>
    </motion.div>
  )
}

