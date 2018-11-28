import { Carousel, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'
import * as SwiperStyled from '@common/swiper/styledComponent'
class SwiperContainer extends Component {
  constructor(props){
    super(props)
    // console.log(this.props);
    this.state = {
      setData:this.props.setData,
      data: [],
      slideIndex: 0,
      imgHeight: 164,
    }
  }

  
  componentWillMount() {
    fetch(this.state.setData.fetch)
      .then(response => response.json())
      .then(res => {
        // data就是我们请求的props
        this.setState({
          data: res.entity.indexCenterBanner || res.entity.vip ,
        });
      });
  }
  nofind(_this) {
    _this.src = "data:image/png;base64,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";
    _this.onerror = null;
  }
  render() {
    let { setData } = this.state;
    return (
      <SwiperStyled.swiper>
        <WingBlank>
          <Carousel className="space-carousel"
            frameOverflow="visible"
            cellSpacing={setData.cellSpacing}
            slideWidth={setData.width}
            autoplay
            infinite
            afterChange={index => this.setState({ slideIndex: index })}
          >
            {this.state.data.map((val, index) => (
              <a
                key={val.id}
                // href="http://www.alipay.com"
                style={{
                  display: 'block',
                  position: 'relative',
                  top: setData.top,
                  height: this.state.slideIndex === index ? setData.imgHeight : setData.compressHeight,
                  marginTop: this.state.slideIndex === index ? 0 : setData.marginTop,
                  marginBottom: this.state.slideIndex === index ? 0 : setData.marginBottom,
                  overflow: this.state.slideIndex === index ? 'auto' : 'hidden',
                  boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src={`http://static.91miwei.com/${val.imagesUrl}`}
                  alt=""
                  onError={this.nofind(this)}
                  key={val.id}
                  style={{ width: '100%', verticalAlign: 'top', height: '100%' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });

                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
      </SwiperStyled.swiper>

    );
  }
}
export default SwiperContainer
