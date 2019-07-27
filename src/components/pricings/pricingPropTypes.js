import { PropTypes } from 'prop-types' // eslint-disable-line

const { arrayOf, number, object, oneOf, shape, string } = PropTypes
export const pricingPropTypes = {
  node: shape({
    description: shape({
      json: arrayOf(object),
    }).isRequired,
    icon: string.isRequired,
    order: number.isRequired,
    price: number.isRequired,
    time: number.isRequired,
    title: string.isRequired,
    type: oneOf(['psychoterapia-indywidualna', 'konsultacje-rodzice'])
      .isRequired,
  }).isRequired,
}
