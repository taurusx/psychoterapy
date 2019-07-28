import { PropTypes } from 'prop-types' // eslint-disable-line

const { arrayOf, number, object, shape, string } = PropTypes
export const disorderPropTypes = {
  node: shape({
    description: shape({
      json: arrayOf(object),
    }).isRequired,
    icon: string.isRequired,
    order: number.isRequired,
    slug: string.isRequired,
    title: string.isRequired,
  }).isRequired,
}
