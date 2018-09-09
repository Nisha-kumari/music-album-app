import React from 'react';
//import emitter from '../emitter';
import data from '../Data.json';
//import type { HeaderState, SearchOption } from '../type';
import './Header.css';

// const options: Array<SearchOption> = [
//   'All',
//   'Audiobook',
//   'eBook',
//   'Movie',
//   'Music',
//   'Music Video',
//   'Podcast',
//   'TV Show',
//   'Software'
// ];

class Header extends React.Component {
 
  // emitSearch: () => void;
  // _onKeyUp: (e: Object) => void;
  // _onClick: (e: Object) => void;
  // _update: (e: Object) => Function;
  // ticking: boolean;
  // rAf: any;

  // state: HeaderState = {
  //   media: 'All',
  //   query: ''
  // };

  // constructor(props: Object) {
  //   super(props);
  //   this.ticking = false;
  //   this.rAf = null;
  //   this.emitSearch = () => emitter.emit('search', this.state);
  //   this._onClick = e => this.setState(
  //     { media: e.target.textContent },
  //     () => (this.state.query.length ? this.emitSearch() : null)
  //   );
  //   this._update = ({ keyCode, target: { value: query } }) => _ => {
  //     this.setState({ query }, () => keyCode === 13 && this.emitSearch());
  //     this.ticking = false;
  //   };
  //   this._onKeyUp = e => {
  //     if (!this.ticking) {
  //       this.rAf = window.requestAnimationFrame(this._update(e));
  //       this.ticking = true;
  //     }
  //   };
  // }

  // renderSearchOption = () => options.map(opt =>
  //   <li
  //     key={opt}
  //     className={this.state.media === opt ? 'select' : ''}
  //   >
  //     <a
  //       tabIndex="0"
  //       role="button"
  //       onClick={this._onClick}
  //     >
  //       {opt}
  //     </a>
  //   </li>);

  // componentWillUnmount() {
  //   window.cancelAnimationFrame(this.rAf);
  // }

  render() {
    const { updateList, value } = this.props;
    return (
      <div className="header-fixed">
        <div className="header-container">
          <div className="header-wrapper cyan">
            <div className="header-search-wrapper">
              <i className="material-icons black-text">search</i>
              <input
                type="text"
                placeholder="Search"
                value={value}
                onChange={updateList}
               // onKeyUp={this._onKeyUp}
                className="search-input white black-text"
              />
            </div>
            {/* <div className="dropdown-wrapper">
              <div
                className="dropdown-button"
                role="button"
                data-activates="search-options"
              >
                {this.state.media}
              </div>
              <ul id="search-options" className="dropdown-content">
                {this.renderSearchOption()}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
