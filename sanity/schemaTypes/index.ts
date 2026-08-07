import { type SchemaTypeDefinition } from 'sanity'

import { productType } from './productType'
import { projectType } from './projectType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, projectType],
}
