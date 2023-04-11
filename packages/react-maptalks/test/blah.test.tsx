import * as React from 'react'
import { render } from '@testing-library/react'
import {describe, test} from '@jest/globals'

import { Button } from '../src'
/**
 * @jest-environment jsdom
 */
describe('Common render', () => {
  test('renders without crashing', () => {
    render(<Button />)
  })
})