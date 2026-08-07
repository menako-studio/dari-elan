import { type SchemaTypeDefinition } from 'sanity'

import { commercialProjectType } from './commercialProjectType'
import { personalProjectType } from './personalProjectType'
import { productType } from './productType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [commercialProjectType, personalProjectType, productType],
}
