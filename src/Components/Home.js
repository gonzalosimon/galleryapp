import React, { Component } from "react";
import axios from "axios";
import Search from "./Feed/SearchBar.js";
import Post from "./Feed/Post.js";
import "../App.css";
const API_KEY = process.env.REACT_APP_API_KEY;
const baseUrl = `https://api.unsplash.com/photos`;

// var CONFIG = {

//   BASE_URL: 'https://api.unsplash.com/photos'
//   // __APP_ID__: '22b7b54287910389edfae878f576488bbc5b540a46daa0d2833ba858ce03b143',
// }

const LOAD_STATE = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  LOADING: "LOADING",
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      totalPhotos: 0,
      perPage: 30,
      currentPage: 1,
      loadState: LOAD_STATE.LOADING,
    };
  }

  componentDidMount() {
    this.fetchPhotos(this.state.currentPage);
  }

  fetchPhotos(page) {
    var self = this;
    const { perPage } = this.state;
    const options = {
      params: {
        client_id: API_KEY,
        page: page,
        per_page: perPage,
      },
    };

    this.setState({ loadState: LOAD_STATE.LOADING });
    axios
      .get(baseUrl, options)
      .then((response) => {
        self.setState({
          photos: response.data,
          totalPhotos: parseInt(response.headers["x-total"]),
          currentPage: page,
          loadState: LOAD_STATE.SUCCESS,
        });
      })
      .catch(() => {
        this.setState({ loadState: LOAD_STATE.ERROR });
      });
  }

  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { count: 30, query: term },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });

    this.setState({ photos: response.data.results });
  };

  render() {
    return (
      <div>
        <div className="md:p-24 bg-fixed md:flex bg-home-background">
          <section className="flex items-center text-white flex flex-wrap p-12 pl-4 md:pl-80">
            <div className="w-full md:w-1/2">
              <div>
                <h1 className="text-4xl font-bold md:m-16">Photo Gallery</h1>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="p-4">
                <Search userSubmit={this.onSearchSubmit} />
                <p className="text-white mt-4">
                  Trending: flower, wallpapers, backgrounds, coffee"
                </p>
              </div>
            </div>
          </section>
        </div>
        <h2 className="ml-24 mt-16 text-4xl antialiased font-extralight justify-center">
          You might be interested
        </h2>
        <div className="p-6 flex flex-wrap md:-mx-1 lg:-mx-4">
          {this.state.loadState === LOAD_STATE.LOADING ? (
            <div className="loader"></div>
          ) : (
            <List data={this.state.photos} />
          )}
        </div>
        <div className="app">
          <Pagination
            current={this.state.currentPage}
            total={this.state.totalPhotos}
            perPage={this.state.perPage}
            onPageChanged={this.fetchPhotos.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const List = ({ data }) => {
  const items = data.map((photo) => {
    return (
      <div className="container my-12 mx-auto md:px-12">
        <Post key={photo.id} photo={photo} />
      </div>
    );
  });

  return (
    <div className="container mx-auto md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3"> {items} </div>
    </div>
  );
};

class Pagination extends Component {
  pages() {
    var pages = [];
    for (var i = this.rangeStart(); i <= this.rangeEnd(); i++) {
      pages.push(i);
    }
    return pages;
  }

  rangeStart() {
    var start = this.props.current - this.props.pageRange;
    return start > 0 ? start : 1;
  }

  rangeEnd() {
    var end = this.props.current + this.props.pageRange;
    var totalPages = this.totalPages();
    return end < totalPages ? end : totalPages;
  }

  totalPages() {
    return Math.ceil(this.props.total / this.props.perPage);
  }

  nextPage() {
    return this.props.current + 1;
  }

  prevPage() {
    return this.props.current - 1;
  }

  hasFirst() {
    return this.rangeStart() !== 1;
  }

  hasLast() {
    return this.rangeEnd() < this.totalPages();
  }

  hasPrev() {
    return this.props.current > 1;
  }

  hasNext() {
    return this.props.current < this.totalPages();
  }

  changePage(page) {
    this.props.onPageChanged(page);
  }

  render() {
    return (
      <div className="pagination">
        <div className="pagination__left">
          <a
            href="pagination"
            className={!this.hasPrev() ? "hidden" : ""}
            onClick={(e) => this.changePage(this.prevPage())}
          >
            Prev
          </a>
        </div>

        <div className="pagination__mid">
          <ul>
            <li className={!this.hasFirst() ? "hidden" : ""}>
              <a href="pagination" onClick={(e) => this.changePage(1)}>
                1
              </a>
            </li>
            <li className={!this.hasFirst() ? "hidden" : ""}>...</li>
            {this.pages().map((page, index) => {
              return (
                <li key={index}>
                  <a
                    href="pagination"
                    onClick={(e) => this.changePage(page)}
                    className={this.props.current === page ? "current" : ""}
                  >
                    {page}
                  </a>
                </li>
              );
            })}
            <li className={!this.hasLast() ? "hidden" : ""}>...</li>
            <li className={!this.hasLast() ? "hidden" : ""}>
              <a
                href="pagination"
                onClick={(e) => this.changePage(this.totalPages())}
              >
                {this.totalPages()}
              </a>
            </li>
          </ul>
        </div>

        <div className="pagination__right">
          <a
            href="pagination"
            className={!this.hasNext() ? "hidden" : ""}
            onClick={(e) => this.changePage(this.nextPage())}
          >
            Next
          </a>
        </div>
      </div>
    );
  }
}

Pagination.defaultProps = {
  pageRange: 2,
};

export default Home;
