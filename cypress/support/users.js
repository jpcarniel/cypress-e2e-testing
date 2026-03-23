const PASSWORD = 'secret_sauce'

const testUsers = [
  'standard_user',
  'problem_user',
  'performance_glitch_user',
  'error_user',
  'visual_user',
]

const loginUsers = [
  { username: 'standard_user', shouldPass: true },
  { username: 'locked_out_user', shouldPass: false },
  { username: 'problem_user', shouldPass: true },
  { username: 'performance_glitch_user', shouldPass: true },
  { username: 'error_user', shouldPass: true },
  { username: 'visual_user', shouldPass: true },
]

module.exports = { testUsers, loginUsers, PASSWORD }
