import { PropTypes } from 'prop-types' // eslint-disable-line

const { arrayOf, number, object, shape, string } = PropTypes
export const pricingPropTypes = {
  node: shape({
    description: shape({
      json: arrayOf(object),
    }).isRequired,
    icon: string.isRequired,
    order: number.isRequired,
    price: number.isRequired,
    slug: string.isRequired,
    time: number.isRequired,
    title: string.isRequired,
  }).isRequired,
}
