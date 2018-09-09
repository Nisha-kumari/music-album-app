// @flow
import React from 'react';
import emitter from '../emitter';
import { getApiUrl } from '../utils';
import data from '../Data.json';
import './Container.css';
//import type { HeaderState, ContainerState } from '../type';

class Container extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: '',
      loading: 'true',
    }
  }
  componentDidMount() {
    console.log("data", data);
    this.setState({
      data: data,
      loading: false,
    });
  }

  // async getSearchResult(headerState: HeaderState) {
  //   try {
  //     this.setState({ status: 'loading' });
  //     const resp = await fetch(getApiUrl(headerState));
  //     const json = await resp.json();
  //     this.setState({
  //       data: { ...json },
  //       status: json.resultCount ? '' : 'noContent'
  //     });
  //   } catch (e) {
  //     this.setState({ status: 'error' });
  //   }
  // }

  // componentDidMount() {
  //   emitter.on('search', this.getSearchResult.bind(this));
  // }

  // componentWillUnmount() {
  //   emitter.removeListener('search');
  // }

  render() {
     const { data, loading } = this.state;
     const { filterData } = this.props;
     console.log("inside container", filterData);
    return (

      <div>
        {loading ? <div className="loaderWrapper">
          <div className="loader"></div>
          <div  className="loadingStatus">
          loading.....
          </div>
          </div> :
          data.entry.map((items) => {
            const imageUrl = items.image.map((img,i) => (
                img.label
            ))
            const image = imageUrl.pop();
            return(
              <div className="detailCard">
              <div className="cardWrapper">
                <div className="imageWrapper">
                  <img src={image} className="image" />
                </div>
                <div className="detailWrapper">
                  <div className="title">{items.name.label}</div> 
                  <div className="artistName">
                  {items.artist.label}
                  </div>
                  <div className="genre">{items.category.attributes.label}</div>
                  <div className="showMoreLink">
                    <a target="_blank" href={items.link.attributes.href} className="showMoreLink"> Show more.. </a>
                    </div>
                </div>
              </div>
              </div>
            );
          }
           
        )
        }
        {/* {status.length ? <Message status={status} /> : <List {...data} />} */}
      </div>
    );
  }
}

export default Container;
