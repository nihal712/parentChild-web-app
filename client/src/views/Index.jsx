import React from "react";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.jsx";
import PageHeader from "../components/PageHeader/PageHeader.jsx";

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <PageHeader />
          <div className="main"></div>
          
        </div>
      </>
    );
  }
}

export default Index;
