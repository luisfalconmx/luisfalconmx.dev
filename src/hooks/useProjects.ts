import { getCollection } from 'astro:content'
import type { CollectionEntry } from 'astro:content'

const shortByDate = (data: CollectionEntry<'projects'>[]) => {
  const list = data.sort((a: any, b: any) => {
    return a.data.publishDate - b.data.publishDate
  })

  return list.reverse()
}

const useProjects = () => {
  const limit = 5
  let counter = 0
  let iterator = 0

  const getLatestProjects = async () => {
    const projects = await getCollection('projects', () => counter++ < limit)
    const latestProjects = shortByDate(projects)
    return latestProjects
  }

  const getAllProjects = async () => {
    const projects = await getCollection('projects')
    const allProjects = shortByDate(projects)
    return allProjects
  }

  const generateOrder: any = (order: []) => {
    if (iterator > order.length) {
      iterator = 0
    }

    return order[iterator++]
  }

  return {
    getLatestProjects,
    getAllProjects,
    generateOrder
  }
}

export default useProjects
