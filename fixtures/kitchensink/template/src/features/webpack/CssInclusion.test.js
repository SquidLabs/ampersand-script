/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import View from 'ampersand-view';
import CssInclusion from './CssInclusion';

describe('css inclusion', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    let view = new View({ el: div, tempalte: CssInclusion })
    view.render();
  });
});
