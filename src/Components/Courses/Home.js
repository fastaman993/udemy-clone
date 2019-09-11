import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCourses } from "../../Publics/Redux/Actions/coureses";
import { getRating } from "../../Publics/Redux/Actions/rating";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardCol from "../Card/card";
import Slider from "react-slick";
import "../../CSS/Home.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#05050594",
        borderRadius: "12px"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#05050594",
        borderRadius: "12px"
      }}
      onClick={onClick}
    />
  );
}

class content extends Component {
  state = {
    courses: []
  };

  componentDidMount = async () => {
    await this.props.dispatch(getAllCourses());
    this.setState({
      courses: this.props.data.coursesList
    });
  };

  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1174,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Container className="justify-content-center mb-5 ">
          <h3 className="my-3">What to learn next</h3>
          <h5>Top courses in Design</h5>
          <Slider {...settings}>
            {this.state.courses.map((course, index) => {
              return (
                <div>
                  <CardCol
                    id={course.id}
                    title={course.title}
                    image={course.image}
                    price={course.price}
                  />
                </div>
              );
            })}
          </Slider>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.coursesList
  };
};

export default connect(mapStateToProps)(content);
