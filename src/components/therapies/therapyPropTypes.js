import { PropTypes } from 'prop-types' // eslint-disable-line

const { arrayOf, number, object, shape, string } = PropTypes
export const therapyPropTypes = {
  node: shape({
    description: shape({
      json: arrayOf(object),
    }).isRequired,
    image: shape({ fluid: object.isRequired }),
    order: number.isRequired,
    title: string.isRequired,
    type: string.isRequired,
  }).isRequired,
}
