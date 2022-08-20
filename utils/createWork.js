const createWork = () => {
  return {
    id: (Date.now() + Math.random()).toString(36),
    company: 'My Company',
    title: 'My Title',
    years: '2020 - Present',
    createdAt: Date.now()
  }
}

module.exports = createWork
