/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Slider from "react-slick";
import { Pagination, Input, message  } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import _ from 'lodash';
import myData from './all_imgs.js';
const { Search } = Input;

export default class ImgSlide extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      activeSlide: 1,
      activeSlide2: 2,
      currentPage:1,
      totalRecord:1,
      value: '',
      dataSource: [],
      data:[],
      show:[]
    };
    this.state.data = _.chunk(myData,10)
    this.state.show = this.state.data[0]
    this.state.totalRecord = myData.length
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

    const { dataSource, value, data, nav1, nav2, activeSlide, activeSlide2, currentPage, totalRecord, show } = this.state;
    
    let nextPage = -1
    if(activeSlide == 0){
      nextPage = (currentPage - 1) <= 0 ? 1 : currentPage - 1
    } else if (activeSlide == 9) {
      nextPage = (currentPage + 1) > (totalRecord / 10) ? currentPage : currentPage + 1
    }
    else{
      nextPage = currentPage
    }
    return (
      <div  onKeyDown={this.onKeyPressed} tabIndex="0" >
        
        <Search placeholder="input search text" onSearch={value => this.onSearch(value)} enterButton style={{margin: 32}} />
        <Slider
          asNavFor={nav2}
          ref={slider => (this.slider1 = slider)}
          adaptiveHeight= {true}
          beforeChange = {(current, next) => this.setState({ activeSlide: next })}
          afterChange = {current => this.setState({ activeSlide2: current })}
        >
           {show.map(data => {
                return (
                  <div style={{margin: 32}}>
                    <img src={data.img} style={{ display: 'inline' }}/>
                    <div style={{margin: 32}}> 
                    <div>{data.title }</div>
                    <div>{data.subTitle}</div>
                    <div>{data.issueOn}</div>
                    </div>
                  </div>
                  )
            })}
         
        </Slider>
        <Slider
          asNavFor={nav1}
          ref={slider => (this.slider2 = slider)}
          swipeToSlide={true}
          focusOnSelect={true}
          {...thumnailSetting}
        >
          {show.map(data => {
                return <img src={data.thumb}/>
            })}
        </Slider>
        <Pagination showQuickJumper onChange={this.onPageChange} total={totalRecord}  />
      </div>
    );
  }

  onPageChange=(page, pageSize) =>{
    this.setState({show:this.state.data[page-1]})
    this.setState({currentPage: page})
  }
  

  onKeyPressed(e) {
    if(this){
      if(e.keyCode === 37){ //left
        this.slider2.slickPrev()
      } else if(e.keyCode === 39){//right
        this.slider2.slickNext()
      }
    }
    
  }

  onSearchFlag = (name) => {
    return this.resources.filter( data => {
      return  data.includes(name)
    })
  }
  
  onSearch = searchText => {
    if(searchText === ''){
      this.setState({data : _.chunk(myData,10),totalRecord: myData.length})
    } else {
      const dataSearch =  myData.filter( data => {
        return  data.title.startsWith(searchText.toUpperCase())
      })
      if(dataSearch.length > 0){
        this.setState({data : _.chunk(dataSearch,10),
          totalRecord: dataSearch.length})
          message.info( dataSearch.length +  ' fake visa found :D. Enter or click search again to show LOL');  
      } else { //default
        this.setState({data : _.chunk(myData,10),totalRecord: myData.length})
        message.warning('There id no match fake visa!');
      }
      
    }
    this.setState({show: this.state.data[0]})
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
