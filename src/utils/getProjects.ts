import { getCollection } from "astro:content"

type Order = ('large' | 'medium' | 'small')[]

const getProjects = async (limit?: number | undefined) => {
  let counter = 0
  let projectsList = []
  projectsList = await getCollection('projects')

  if (limit) {
    projectsList = projectsList.slice(0, limit)
  }
  
  const data = projectsList.map((project) => {
    const order: Order = ["large", "medium", "small", "small", "medium"]

    const projectType = order[counter]
    counter++
  
    if (counter > order.length) {
      counter = 0
    }

    project.data.type = projectType
    return project
  })
  
  return data
}


export default getProjects
