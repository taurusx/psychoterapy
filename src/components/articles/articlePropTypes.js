import { PropTypes } from 'prop-types' // eslint-disable-line

const { arrayOf, object, shape, string } = PropTypes
export const articlePropTypes = {
  node: shape({
    author: arrayOf(
      shape({
        avatar: shape({ fluid: object.isRequired }).isRequired,
        description: shape({
          description: string,
        }),
        email: string,
        firstName: string.isRequired,
        lastName: string,
      })
    ).isRequired,
    date: string.isRequired,
    lead: shape({
      lead: string.isRequired,
    }).isRequired,
    mainImage: shape({ fluid: object.isRequired }).isRequired,
    postType: arrayOf(string).isRequired,
    slug: string.isRequired,
    title: string.isRequired,
  }).isRequired,
}
