/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import View from 'ampersand-view'
import ExpandEnvVariables from './ExpandEnvVariables';

describe('expand .env variables', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    let view = new View({el: div, template: ExpandEnvVariables});
    view.render();
  });
});
