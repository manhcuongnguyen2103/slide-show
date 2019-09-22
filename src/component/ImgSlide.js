/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Slider from "react-slick";
import { Icon, Input, AutoComplete } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    };
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

  resources =["ad.png",
    "ae.png",
    "af.png",
    "ag.png",
    "al.png",
    "am.png",
    "ao.png",
    "ar.png",
    "at.png",
    "au.png",
    "az.png",
    "ba.png",
    "bb.png",
    "bd.png",
    "be.png",
    "bf.png",
    "bg.png",
    "bh.png",
    "bi.png",
    "bj.png",
    "bn.png",
    "bo.png",
    "br.png",
    "bs.png",
    "bt.png",
    "bw.png",
    "by.png",
    "bz.png",
    "ca.png",
    "cd.png",
    "cf.png",
    "cg.png",
    "ch.png",
    "ci.png",
    "cl.png",
    "cm.png",
    "cn.png",
    "co.png",
    "cr.png",
    "cu.png",
    "cv.png",
    "cy.png",
    "cz.png",
    "de.png",
    "dj.png",
    "dk.png",
    "dm.png",
    "do.png",
    "dz.png",
    "ec.png",
    "ee.png",
    "eg.png",
    "eh.png",
    "er.png",
    "es.png",
    "et.png",
    "fi.png",
    "fj.png",
    "fm.png",
    "fr.png",
    "ga.png",
    "gb.png",
    "gd.png",
    "ge.png",
    "gh.png",
    "gm.png",
    "gn.png",
    "gq.png",
    "gr.png",
    "gt.png",
    "gw.png",
    "gy.png",
    "hn.png",
    "hr.png",
    "ht.png",
    "hu.png",
    "id.png",
    "ie.png",
    "il.png",
    "in.png",
    "iq.png",
    "ir.png",
    "is.png",
    "it.png",
    "jm.png",
    "jo.png",
    "jp.png",
    "ke.png",
    "kg.png",
    "kh.png",
    "ki.png",
    "km.png",
    "kn.png",
    "kp.png",
    "kr.png",
    "ks.png",
    "kw.png",
    "kz.png",
    "la.png",
    "lb.png",
    "lc.png",
    "li.png",
    "lk.png",
    "lr.png",
    "ls.png",
    "lt.png",
    "lu.png",
    "lv.png",
    "ly.png",
    "ma.png",
    "mc.png",
    "md.png",
    "me.png",
    "mg.png",
    "mh.png",
    "mk.png",
    "ml.png",
    "mm.png",
    "mn.png",
    "mr.png",
    "mt.png",
    "mu.png",
    "mv.png",
    "mw.png",
    "mx.png",
    "my.png",
    "mz.png",
    "na.png",
    "ne.png",
    "ng.png",
    "ni.png",
    "nl.png",
    "no.png",
    "np.png",
    "nr.png",
    "nz.png",
    "om.png",
    "pa.png",
    "pe.png",
    "pg.png",
    "ph.png",
    "pk.png",
    "pl.png",
    "pt.png",
    "pw.png",
    "py.png",
    "qa.png",
    "ro.png",
    "rs.png",
    "ru.png",
    "rw.png",
    "sa.png",
    "sb.png",
    "sc.png",
    "sd.png",
    "se.png",
    "sg.png",
    "si.png",
    "sk.png",
    "sl.png",
    "sm.png",
    "sn.png",
    "so.png",
    "sr.png",
    "st.png",
    "sv.png",
    "sy.png",
    "sz.png",
    "td.png",
    "tg.png",
    "th.png",
    "tj.png",
    "tl.png",
    "tm.png",
    "tn.png",
    "to.png",
    "tr.png",
    "tt.png",
    "tv.png",
    "tw.png",
    "tz.png",
    "ua.png",
    "ug.png",
    "us.png",
    "uy.png",
    "uz.png",
    "va.png",
    "vc.png",
    "ve.png",
    "vn.png",
    "vu.png",
    "ws.png",
    "ye.png",
    "za.png",
    "zm.png",
    "zw.png"]
  
  render() {
    const thumnailSetting = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "50px",
      slidesToShow: 9,
      speed: 100,
      arrows: false,
      slidesToScroll: 1,
    };
    
    const thumbPath = 'flags-mini/'
    const imgPath = 'flags-normal/'

    const { dataSource, value } = this.state;

    return (
      <div  onKeyDown={this.onKeyPressed} tabIndex="0" >
        <AutoComplete
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={this.onSelect}
          onSearch={this.onSearch}
          onChange={this.onChange}
          placeholder="input here"
        >
        <Input suffix={<Icon type="search" className="certain-category-icon" />} />
        </AutoComplete>
        <h2>Slider Testing</h2>
        <h4>{ this.resources[this.state.activeSlide]}</h4>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          adaptiveHeight= {true}
          beforeChange = {(current, next) => this.setState({ activeSlide: next })}
          afterChange = {current => this.setState({ activeSlide2: current })}
        >
           {this.resources.map(data => {
                return <img src={imgPath + data}/>
            })}
         
        </Slider>
        <h4>Thumbnail</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          swipeToSlide={true}
          focusOnSelect={true}
          {...thumnailSetting}
        >
          {this.resources.map(data => {
                return <img src={thumbPath + data}/>
            })}
        </Slider>
      </div>
    );
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
