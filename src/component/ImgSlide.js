/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Slider from "react-slick";
import { Pagination  } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import _ from 'lodash';

import myData from './all_imgs.js';

export default class ImgSlide extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      activeSlide: 0,
      activeSlide2: 0,
      value: '',
      dataSource: [],
      data:[],
      show:[]
    };
    this.state.data = _.chunk(myData,10)
    this.state.show = this.state.data[0]
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeyPressed.bind(this));
  }     
  
  render() {
    const thumnailSetting = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 9,
      speed: 10,
      arrows: false,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    };
    
    const thumbPath = 'flags-mini/'
    const imgPath = 'flags-normal/'

    const { dataSource, value, data } = this.state;
    
    return (
      <div  onKeyDown={this.onKeyPressed} tabIndex="0" >
        
        <h2>Slider Testing</h2>

        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          adaptiveHeight= {true}
          beforeChange = {(current, next) => this.setState({ activeSlide: next })}
          afterChange = {current => this.setState({ activeSlide2: current })}
        >
           {this.state.show.map(data => {
                return (
                  <div>
                    <img src={data.img}/>
                    <div>{data.title }</div>
                    <div>{data.subTitle}</div>
                    <div>{data.issueOn}</div>
                  </div>
                  )
            })}
         
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          swipeToSlide={true}
          focusOnSelect={true}
          {...thumnailSetting}
        >
          {this.state.show.map(data => {
                return <img src={data.thumb}/>
            })}
        </Slider>
        <Pagination onChange={this.onPageChange} defaultCurrent={1} total={myData.length} />
      </div>
    );
  }

  onPageChange=(page, pageSize) =>{
    this.setState({show:this.state.data[page-1]})
  }
  

  onKeyPressed(e) {
    if(e.keyCode === 37){ //left
      this.slider2.slickPrev()
    } else if(e.keyCode === 39){//right
      this.slider2.slickNext()
    }
  }

  onSearchFlag = (name) => {
    return this.resources.filter( data => {
      return  data.includes(name)
    })
  }
  
  onSearch = searchText => {
  };

  onChange = value => {
    this.setState({ value });
    this.setState({
      dataSource: !value ? [] : this.onSearchFlag(value),
    });
  };

  onSelect = value =>  {
    this.slider2.slickGoTo(this.resources.findIndex(data => data===value))
  } 
}
