import { render, screen } from '@testing-library/react'

import Main from './'

describe('<Main />', () => {
  it('Should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado 2/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
