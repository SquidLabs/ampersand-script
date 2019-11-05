/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import View from 'ampersand-view';
import ReactDOM from 'react-dom';
import ScssModulesInclusion from './ScssModulesInclusion';
import ScssInclusion from './ScssInclusion';

describe('scss modules inclusion', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    let view = new View({ el: div, template: ScssModulesInclusion })
    view.render();
  });
});
