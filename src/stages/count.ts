import QueryString from './../types/QueryString'
import queryString from './../mixins/queryString'

type Count = { $count: string }

/**
 * Example: { $count: 'score' }
 *
 * @param {QueryString} count
 *
 * @returns {Count}
 */
export default (count: QueryString): Count => queryString(count, '$count')