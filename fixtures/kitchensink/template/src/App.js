/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';

class BuiltEmitter extends Component {
  static propTypes = {
    error: PropTypes.string,
    feature: PropTypes.func,
  };

  componentDidMount() {
    const { error, feature } = this.props;

    if (error) {
      this.handleError(error);
      return;
    }

    // Class components must call this.props.onReady when they're ready for the test.
    // We will assume functional components are ready immediately after mounting.
    if (!Component.isPrototypeOf(feature)) {
      this.handleReady();
    }
  }

  handleError(error) {
    document.dispatchEvent(new Event('ReactFeatureError'));
  }

  handleReady() {
    document.dispatchEvent(new Event('ReactFeatureDidMount'));
  }

  render() {
    const {
      props: { feature },
      handleReady,
    } = this;
    return (
      <div>
        {feature &&
          createElement(feature, {
            onReady: handleReady,
          })}
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { feature: null };

    this.setFeature = this.setFeature.bind(this);
  }

  componentDidMount() {
    const url = window.location.href;
    // const feature = window.location.hash.slice(1);
    // This works around an issue of a duplicate hash in the href
    // Ex: http://localhost:3001/#array-destructuring#array-destructuring
    // This seems like a jsdom bug as the URL in initDom.js appears to be correct
    const feature = url.slice(url.lastIndexOf('#') + 1);

    switch (feature) {
      case 'css-inclusion':
        import('./features/webpack/CssInclusion').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'css-modules-inclusion':
        import('./features/webpack/CssModulesInclusion').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'scss-inclusion':
        import('./features/webpack/ScssInclusion').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'scss-modules-inclusion':
        import('./features/webpack/ScssModulesInclusion').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'sass-inclusion':
        import('./features/webpack/SassInclusion').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'sass-modules-inclusion':
        import('./features/webpack/SassModulesInclusion').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'file-env-variables':
        import('./features/env/FileEnvVariables').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'image-inclusion':
        import('./features/webpack/ImageInclusion').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'json-inclusion':
        import('./features/webpack/JsonInclusion').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'linked-modules':
        import('./features/webpack/LinkedModules').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'no-ext-inclusion':
        import('./features/webpack/NoExtInclusion').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'public-url':
        import('./features/env/PublicUrl').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'shell-env-variables':
        import('./features/env/ShellEnvVariables').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'svg-inclusion':
        import('./features/webpack/SvgInclusion').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'svg-component':
        import('./features/webpack/SvgComponent').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'svg-in-css':
        import('./features/webpack/SvgInCss').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'unknown-ext-inclusion':
        import('./features/webpack/UnknownExtInclusion').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'expand-env-variables':
        import('./features/env/ExpandEnvVariables').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'base-url':
        import('./features/config/BaseUrl').then(f =>
          this.setFeature(f.default)
        );
        break;
      case 'dynamic-import':
        import('./features/webpack/DynamicImport').then(f =>
          this.setFeature(f.default)
        );
        break;
      default:
        this.setState({ error: `Missing feature "${feature}"` });
    }
  }

  setFeature(feature) {
    this.setState({ feature });
  }

  render() {
    const { error, feature } = this.state;
    if (error || feature) {
      return <BuiltEmitter error={error} feature={feature} />;
    }
    return null;
  }
}

export default App;
