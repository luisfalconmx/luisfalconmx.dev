import { getCollection } from 'astro:content'

const useProjects = () => {
  const getLatestProjects = async (limit: number) => {
    const allProjects = await getCollection('projects')
    const limitedProjects = allProjects.slice(0, limit)

    const orderedProjects = limitedProjects.sort((a: any, b: any) => {
      const result = a.data.publishDate - b.data.publishDate
      return result
    })

    const latestProjects = orderedProjects.reverse()
    return latestProjects
  }

  const getAllProjects = async () => {
    const projects = await getCollection('projects')
    const orderedProjects = projects.sort((a: any, b: any) => {
      const result = a.data.publishDate - b.data.publishDate
      return result
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
