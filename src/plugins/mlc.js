import gravatar from 'gravatar'

/* global MAINLAND_CHN */

/**
 * @param {string} email
 * @param {number} size
 */
export function gravatarURL (email, size) {
  let avatar = gravatar.url(email, { s: size, protocol: 'https' })
  if (MAINLAND_CHN) avatar = avatar.replace(/.+\.gravatar\.com\/avatar/, 'https://cdn.v2ex.com/gravatar')
  return avatar
}
