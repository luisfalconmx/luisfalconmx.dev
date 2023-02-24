import { getCollection } from 'astro:content'

type Order = ('large' | 'medium' | 'small')[]

const useProjects = () => {
  const getLatestProjects = async () => {
    let counter = 0
    const limit = 5
    const order: Order = ['large', 'medium', 'small', 'small', 'medium']

    const projects = await getCollection('projects', () => {
      counter++
      return counter <= limit
    })

    const orderedProjects = projects.sort((a: any, b: any) => {
      return a.data.publishDate - b.data.publishDate
    })

    const reversedProjects = orderedProjects.reverse()

    const latestProjects = reversedProjects.map((project) => {
      if (counter > order.length) {
        counter = 0
      }

      const projectType = order[counter]
      counter++

      project.data.type = projectType
      return project
    })

    return latestProjects
  }

  const getAllProjects = async () => {
    const projects = await getCollection('projects')
    const orderedProjects = projects.sort((a: any, b: any) => {
      return a.data.publishDate - b.data.publishDate
    })
    const allProjects = orderedProjects.reverse()
    return allProjects
  }

  return {
    getLatestProjects,
    getAllProjects
  }
}

export default useProjects
